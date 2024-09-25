import re
from pymongo import MongoClient
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def init_driver():
    # FIXME: Refacto all to package/module
    # Init driver + on se rend sur le site ASOS
    driver = webdriver.Chrome()
    driver.get("https://www.asos.com/fr/")

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


def retrieve_item_data(driver, url):
    # FIXME: Generate UUID

    color_list_xpath = '//div[@id="pdp-react-critical-app"]/span[@class="OuZsv"]/div[2]//ul[@class="w51hY"]//a'
    color_selector_class = "w51hY"
    color_selector = driver.find_elements(By.CLASS_NAME, color_selector_class)

    variants = [retrieve_variant_data(driver, url, None)]  # FIXME: Change None to real ID

    # If there is other variants for this product
    if len(color_selector) > 0:
        links = driver.find_elements(By.XPATH, color_list_xpath)
        variants_urls = [l.get_attribute("href") for l in filter(lambda x: x.get_attribute("href") is not None, links)]

        for variant_url in variants_urls:
            variants.append(retrieve_variant_data(driver, variant_url, None))  # FIXME: Change None to real ID

    return variants


def retrieve_variant_data(driver, url, product_id):
    res = []

    details_button_xpath = '//div[@id="productDescription"]//ul//li[contains(@class, "accordion-module_item__2SdMy")]/div/h2/button'
    brand_button_xpath = '//div[@id="productDescription"]//ul//li[contains(@class, "accordion-module_item__2SdMy")][2]/div/h2/button'
    model_information_button_xpath = '//div[@id="productDescription"]//ul//li[contains(@class, "accordion-module_item__2SdMy")][3]/div/h2/button'
    instructions_button_xpath = '//div[@id="productDescription"]//ul//li[contains(@class, "accordion-module_item__2SdMy")][4]/div/h2/button'
    materials_button_xpath = '//div[@id="productDescription"]//ul//li[contains(@class, "accordion-module_item__2SdMy")][5]/div/h2/button'
    size_selector_xpath = '//div[@id="pdp-react-critical-app"]/span[@class="OuZsv"]/div[3]/div[@class="C09ug"]/select[@id="variantSelector"]/option[position() > 1]'
    pictures_xpath = '//ul[@class="thumbnails"]/li/button/img'

    category_xpath = '//div[@id="productDescriptionDetails"]/div/div/a'
    brand_xpath = '//div[@id="productDescriptionDetails"]/div/div/a[2]'
    product_description_xpath = '//div[@id="productDescriptionDetails"]/div/div/ul/li'
    brand_description_xpath = '//div[@id="productDescriptionBrand"]/div/div'
    model_information_xpath = '//div[@id="productDescriptionSizeAndFit"]/div/div'
    instructions_xpath = '//div[@id="productDescriptionCareInfo"]/div/div'
    materials_xpath = '//div[@id="productDescriptionAboutMe"]/div/div'

    try:
        # ------- Get title ------- #
        head_text = driver.find_elements(By.TAG_NAME, "h1")[0].text
        title = '-'.join(head_text.split('-')[:-1])  # We get everything except the color (located at the last position)

        # ------- Get color ------- #
        color = head_text.split(' - ')[-1]

        # ------- Get price ------- #
        price_tag = driver.find_elements(By.CLASS_NAME, "xifcn")

        if len(price_tag) > 0:
            price_tag = price_tag[-1]
        else:
            price_tag = driver.find_element(By.CLASS_NAME, "MwTOW")

        price = re.findall(r'\d+,\d+', price_tag.text)[0]

        # ------- Get brand ------- #
        details_button = driver.find_element(By.XPATH, details_button_xpath)
        details_button.click()

        brand = driver.find_element(By.XPATH, brand_xpath)

        # ------- Get category ------- #
        category = driver.find_element(By.XPATH, category_xpath)

        # ------- Get product description ------- #
        description_tags = driver.find_elements(By.XPATH, product_description_xpath)
        product_description = '\n'.join([tag.get_attribute('innerHTML') for tag in description_tags])

        # ------- Get brand description ------- #
        brand_button = driver.find_element(By.XPATH, brand_button_xpath)
        brand_button.click()

        brand_description_tag = driver.find_element(By.XPATH, brand_description_xpath).get_attribute("innerHTML")

        # Removing nested HTML while keeping text
        brand_description = re.sub(r'<a\s+href="[^"]*"><strong>(.*?)<\/strong><\/a>', r'\1', brand_description_tag)

        # ------- Get model data ------- #
        model_information_button = driver.find_element(By.XPATH, model_information_button_xpath)
        model_information_button.click()

        model_information_tag = driver.find_element(By.XPATH, model_information_xpath).get_attribute("innerHTML")

        # Replacing '<br>' with '\n'
        model_data = re.sub(r'<br>', '\n', model_information_tag)

        # ------- Get instructions ------- #
        instructions_button = driver.find_element(By.XPATH, instructions_button_xpath)
        instructions_button.click()

        instructions = driver.find_element(By.XPATH, instructions_xpath).text

        # ------- Get materials ------- #
        materials_button = driver.find_element(By.XPATH, materials_button_xpath)
        materials_button.click()

        materials_tag = driver.find_element(By.XPATH, materials_xpath)

        # Replacing '<br>' with '\n'
        materials = re.sub(r'<br>', '\n', materials_tag)

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

        return {
            "productID": product_id,
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
        raise Exception(f"Error with the following url: {url} ", e)


def store_items(data, collection):
    try:
        # FORMAT
        # items = [
        #     {"<field name>": "<value>", ...},
        #     {"<field name>": "<value>", ...}
        # ]

        result = collection.insert_many(data)

        print(result.acknowledged)
    except Exception as e:
        raise Exception("The following error occurred: ", e)


def process_items(urls, collection):
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
        data.append(item_data)

    store_items(data, collection)


if __name__ == "__main__":
    # uri = "<connection string URI>"
    paths = ["../../backup/men.txt", "../../backup/unisexe.txt", "../../backup/women.txt"]
    client = MongoClient()

    try:
        dbs = client.list_database_names()
        print(dbs)

        database = client.get_database("glance_items")
        all_collection = database.get_collection("all")

        # FIXME: Multiprocessing & error management
        for path in paths:
            file = open(path, "r")
            lines = file.readlines()
            file.close()

            process_items(lines, all_collection)

        client.close()

    except Exception as e:
        raise Exception("Unable to find the document due to the following error: ", e)
