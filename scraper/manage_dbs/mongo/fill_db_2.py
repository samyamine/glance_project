import multiprocessing
import re
import time
import uuid
from pymongo import MongoClient
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def divide_array(arr, x):
    res = []
    start = 0

    subarray_length = len(arr) // x
    remainder = len(arr) % x

    for i in range(x):
        end = start + subarray_length
        if i < remainder:
            end += 1

        res.append(arr[start:end])
        start = end

    return res


def init_driver():
    # FIXME: Refacto all to package/module
    # Init driver + on se rend sur le site ASOS
    driver = webdriver.Chrome()
    driver.get("https://www.asos.com/fr/homme/")

    # On commence par accepter les cookies s'ils sont demandés
    cookie_awaiter = WebDriverWait(driver, 100).until(
        EC.visibility_of_element_located((By.CLASS_NAME, 'ot-sdk-container'))
    )

    accept_cookies_button = driver.find_element(By.ID, "onetrust-accept-btn-handler")
    accept_cookies_button.click()

    return driver


def check_mix_and_match(driver):
    res = []

    element = driver.find_elements(By.CLASS_NAME, "product-hero")

    if len(element) > 0:
        nested_links = driver.find_elements(By.XPATH, "//ul/li[@class='item']/a")
        res = [a.get_attribute("href") for a in nested_links]

    return res


def generate_uuid():
    product_id = str(uuid.uuid4())

    while product_id in uuids:
        product_id = str(uuid.uuid4())

    uuids.append(product_id)

    return product_id


def retrieve_item_data(driver, url):
    color_list_xpath = '//div[@id="pdp-react-critical-app"]/span[@class="OuZsv"]/div[2]//ul[@class="w51hY"]//a'
    color_selector_class = "w51hY"
    color_selector = driver.find_elements(By.CLASS_NAME, color_selector_class)

    product_id = generate_uuid()
    variants = []

    # Check if out of stock
    h3 = driver.find_elements(By.XPATH, '//div[@class="layout-aside"]//h3[@id="jwe_q"]')
    if len(h3) == 0 or h3[0].text != "ÉPUISÉ":
        variants.append(retrieve_variant_data(driver, url, product_id))

    # If there are other variants for this product
    # FIXME: MERGE VARIANTS IN A SINGLE DOCUMENT !!!
    if len(color_selector) > 0:
        links = driver.find_elements(By.XPATH, color_list_xpath)
        variants_urls = [l.get_attribute("href") for l in filter(lambda x: x.get_attribute("href") is not None, links)]

        for variant_url in variants_urls:
            driver.get(variant_url)

            h3 = driver.find_elements(By.XPATH, '//div[@class="layout-aside"]//h3[@id="jwe_q"]')
            if len(h3) == 0 or h3[0].text != "ÉPUISÉ":
                variants.append(retrieve_variant_data(driver, url, product_id))

    return variants


def retrieve_variant_data(driver, url, product_id):
    print(url)

    res = []
    title = None
    brand = None
    price = None
    category = None
    materials = None
    product_description = None
    brand_description = None
    instructions = None
    color = None
    sizes = None
    pictures = None
    model_data = None
    gender = None

    product_description_xpath = '//div[@id="productDescription"]//ul//li[contains(@class, "accordion-module_item__2SdMy")]/div/h2/button'
    size_selector_xpath = '//div[@id="pdp-react-critical-app"]/span[@class="OuZsv"]/div[3]/div[@class="C09ug"]/select[@id="variantSelector"]/option[position() > 1]'
    pictures_xpath = '//ul[@class="thumbnails"]/li/button/img'

    category_xpath = '//div[@id="productDescriptionDetails"]/div/div/a'
    category_xpath2 = '//div[@id="productDescriptionDetails"]/div/div'
    gender_xpath = '//div[@id="chrome-breadcrumb"]/div/nav/ol/li[2]/a'
    brand_xpath = '//div[@id="productDescriptionDetails"]/div/div/a[2]'
    brand_xpath2 = '//div[@id="productDescriptionDetails"]/div/div'
    simple_description_xpath = '//div[@id="productDescriptionDetails"]/div/div/ul/li'
    brand_description_xpath = '//div[@id="productDescriptionBrand"]/div/div'
    model_information_xpath = '//div[@id="productDescriptionSizeAndFit"]/div/div'
    instructions_xpath = '//div[@id="productDescriptionCareInfo"]/div/div'
    materials_xpath = '//div[@id="productDescriptionAboutMe"]/div/div'

    try:
        # ------- Get title ------- #
        head_text = driver.find_elements(By.TAG_NAME, "h1")[0].text
        title = ' - '.join(head_text.split(' - ')[:-1])  # We get everything except the color (located at the last position)

        # ------- Get gender ------- #
        gender = [driver.find_element(By.XPATH, gender_xpath).text]

        # ------- Get color ------- #
        color = head_text.split(' - ')[-1]

        # ------- Get price ------- #
        price_tag = driver.find_elements(By.CLASS_NAME, "xifcn")

        if len(price_tag) > 0:
            price_tag = price_tag[-1]
        else:
            price_tag = driver.find_element(By.CLASS_NAME, "MwTOW")

        price = re.findall(r'\d+,\d+', price_tag.text)[0]

        # ------- Get sizes (size and availability) ------- #
        size_options = driver.find_elements(By.XPATH, size_selector_xpath)
        size_options = [option.text.split(' - ') for option in size_options]

        sizes = []

        for option in size_options:
            if len(option) == 2 and option[1] == 'Épuisé':
                sizes.append({option[0]: False})
            else:
                sizes.append({option[0]: True})

        # ------- Get pictures------- #
        picture_urls = driver.find_elements(By.XPATH, pictures_xpath)
        pictures = [p.get_attribute("src").split('?')[0] for p in picture_urls]

        # ------- Get all accordion categories------- #
        accordion_categories = [x.text for x in driver.find_elements(By.XPATH, product_description_xpath)]

        for i in range(len(accordion_categories)):
            c = accordion_categories[i]
            button_xpath = f'//div[@id="productDescription"]//ul//li[contains(@class, "accordion-module_item__2SdMy")][{i+1}]/div/h2/button'

            if c == "Détail des produits":
                # ------- Get brand ------- #
                details_button = driver.find_element(By.XPATH, button_xpath)
                details_button.click()

                # Le nom de la marque peut ne pas être un lien
                b = driver.find_elements(By.XPATH, brand_xpath)
                if len(b) > 0:
                    # brand = driver.find_element(By.XPATH, brand_xpath).text
                    # Removing nested HTML while keeping text
                    brand = driver.find_element(By.XPATH, brand_xpath).get_attribute('innerHTML')
                    # brand = re.sub(r'<strong>(.*?)<\/strong>', r'\1', brand)
                    brand = re.sub(r'<.*?>', '', brand)
                    brand = re.sub(r'&amp;', r'&', brand)
                else:
                    # brand = driver.find_element(By.XPATH, brand_xpath2).text.split(" par ")[1]
                    brand = driver.find_element(By.XPATH, brand_xpath2).text.split(" par ")[1]
                    brand = brand.split('\n')[0]
                print(brand)

                # ------- Get category ------- #
                # Le nom de la catégorie peut ne pas être un lien
                b = driver.find_elements(By.XPATH, category_xpath)
                if len(b) > 0:
                    # category = driver.find_element(By.XPATH, category_xpath).text
                    # Removing nested HTML while keeping text
                    category = driver.find_element(By.XPATH, category_xpath).get_attribute('innerHTML')
                    category = re.sub(r'<strong>(.*?)<\/strong>', r'\1', category)
                    category = re.sub(r'&amp;', r'&', category)
                else:
                    # category = driver.find_element(By.XPATH, category_xpath2).text.split(" par ")[0]
                    category = driver.find_element(By.XPATH, category_xpath2).text.split(" par ")[0]
                print(category)

                # ------- Get product description ------- #
                description_tags = driver.find_elements(By.XPATH, simple_description_xpath)
                product_description = '\n'.join([tag.get_attribute('innerHTML') for tag in description_tags])
            elif c == "Marque":
                # ------- Get brand description ------- #
                brand_button = driver.find_element(By.XPATH, button_xpath)
                brand_button.click()

                brand_description_tag = driver.find_element(By.XPATH, brand_description_xpath).get_attribute("innerHTML")

                # Removing nested HTML while keeping text
                brand_description = re.sub(r'<a\s+href="[^"]*"><strong>(.*?)<\/strong><\/a>', r'\1', brand_description_tag)
            elif c == "Taille et coupe":
                # ------- Get model data ------- #
                model_information_button = driver.find_element(By.XPATH, button_xpath)
                model_information_button.click()

                model_information_tag = driver.find_element(By.XPATH, model_information_xpath).get_attribute("innerHTML")

                # Replacing '<br>' with '\n'
                model_data = re.sub(r'<br>', '\n', model_information_tag)
            elif c == "Entretien":
                # ------- Get instructions ------- #
                instructions_button = driver.find_element(By.XPATH, button_xpath)
                instructions_button.click()

                instructions = driver.find_element(By.XPATH, instructions_xpath).get_attribute('innerHTML')
            elif c == "À propos de moi":
                # ------- Get materials ------- #
                materials_button = driver.find_element(By.XPATH, button_xpath)
                materials_button.click()

                materials_tag = driver.find_element(By.XPATH, materials_xpath).get_attribute("innerHTML")
                time.sleep(0.2)

                # Replacing '<br>' with '\n'
                materials = re.sub(r'<br>', '\n', materials_tag)
            else:
                print("UNKNOWN ACCORDION CATEGORY:", c)
            time.sleep(0.2)

        return {
            "productID": product_id,
            "gender": gender,
            "title": title,
            "brand": brand,
            "price": price,
            "category": category,
            "materials": materials,
            "product_description": product_description,
            "brand_description": brand_description,
            "instructions": instructions,
            "url": url,
            "color": color,
            "sizes": sizes,
            "pictures": pictures,
            "model_data": model_data,
            "available": True
        }
    except Exception as e:
        with open("errors_men_2.txt", 'a') as f:
            print("error with url:", url)
            f.write(url + '\n')
            f.write(str(Exception(e)) + '\n')
            print(str(Exception(e)))


def store_items(data, collection):
    # Filter None values (urls which generated exceptions)
    data = list(filter(lambda x: x is not None, data))

    try:
        print(data)
        result = collection.insert_many(data)
        print(result.acknowledged)
    except Exception as e:
        raise Exception("The following error occurred: ", e)


def process_items(urls):
    data = []
    driver = init_driver()

    for url in urls:
        # Go to page
        driver.get(url)

        # ------- Check Mix & Match situation ------- #
        hrefs = check_mix_and_match(driver)

        if len(hrefs) > 0:
            for href in hrefs:
                urls.append(href)
            continue
        # ------------------------------------------- #

        item_data = retrieve_item_data(driver, url)

        for item in item_data:
            data.append(item)

    driver.quit()

    return data


num_divs = 5
paths = ["../../backup/men.txt", "../../backup/unisexe.txt", "../../backup/women.txt"]
uuids = []

client = MongoClient()

if __name__ == "__main__":
    try:
        dbs = client.list_database_names()
        all_collection = client.get_database("glance_items").get_collection("all")
        print(dbs)

        # FIXME: Multiprocessing & error management
        file = open(paths[0], "r")
        lines = file.readlines()
        file.close()

        # 8000-9000 FIRST DONE !!
        subarrays = divide_array(lines[9000:10000], num_divs)

        pool = multiprocessing.Pool(num_divs)
        start_time = time.perf_counter()

        processes = [pool.apply_async(process_items, args=(urls,)) for urls in subarrays]
        results = [p.get() for p in processes]

        print("Results length:", len(results))

        for res in results:
            store_items(res, all_collection)

        client.close()

    except Exception as e:
        client.close()
        raise Exception("Unable to find the document due to the following error: ", e)
