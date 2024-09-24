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
    # FIXME: Get the following properties:
    #  title, DONE
    #  brand, DONE
    #  price, DONE
    #  category, DONE
    #  materials,
    #  description,
    #  instructions,
    #  url,
    #  variants (color, sizes, available, pictures)

    details_button_xpath = '//div[@id="productDescription"]//ul//li[contains(@class, "accordion-module_item__2SdMy")]/div/h2/button'
    category_xpath = '//div[@id="productDescriptionDetails"]/div/div/a'
    brand_xpath = '//div[@id="productDescriptionDetails"]/div/div/a[2]'
    product_description_xpath = '//div[@id="productDescriptionDetails"]/div/div/ul/li'

    try:
        # Get title
        head_text = driver.find_elements(By.TAG_NAME, "h1")[0].text
        title = '-'.join(head_text.split('-')[:-1])  # We get everything except the color (located at the last position)

        # Get price
        price_tag = driver.find_elements(By.CLASS_NAME, "xifcn")
        if len(price_tag) > 0:
            price = re.findall(r'\d+,\d+', price_tag[-1].text)[0]
        else:
            price_tag = driver.find_element(By.CLASS_NAME, "MwTOW")
            price = re.findall(r'\d+,\d+', price_tag.text)[0]

        # Get brand
        details_button = driver.find_element(By.XPATH, details_button_xpath)
        details_button.click()

        brand = driver.find_element(By.XPATH, brand_xpath)

        # Get category
        category = driver.find_element(By.XPATH, category_xpath)

        # Get product description
        description_tags = driver.find_elements(By.XPATH, product_description_xpath)
        description_tags = [tag.text for tag in description_tags]

        # Get brand description

        # Get materials
        # Get instructions
        # Get url
        # Get variants (color, sizes, available, pictures)

        title_colors = re.split(r'\s*-\s*', title)[-1]
        item_colors = re.split(r'\s*/\s*|\s*-\s*|\s+et\s+', title_colors)
        colors.update(item_colors)

        # Get category
        details_button = file_driver.find_element(By.XPATH,'//div[@id="productDescription"]//ul//li[contains(@class, "accordion-module_item__2SdMy")]/div/h2/button')
        details_button.click()
        category = file_driver.find_element(By.XPATH, '//div[@id="productDescriptionDetails"]/div/div/a').text
        categories.add(category)
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

        for path in paths:
            file = open(path, "r")
            lines = file.readlines()
            file.close()

            process_items(lines, all_collection)

        client.close()

    except Exception as e:
        raise Exception("Unable to find the document due to the following error: ", e)
