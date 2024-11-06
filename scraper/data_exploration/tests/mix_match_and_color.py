import os
import re

from selenium import webdriver
from selenium.webdriver import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# FIXME: Refacto
# Init driver + on se rend sur le site ASOS
driver = webdriver.Chrome()
driver.get("https://www.asos.com/fr/")

# FIXME: Refacto
# On commence par accepter les cookies s'ils sont demandés
cookie_awaiter = WebDriverWait(driver, 100).until(
    EC.visibility_of_element_located((By.CLASS_NAME, 'ot-sdk-container'))
)

accept_cookies_button = driver.find_element(By.ID, "onetrust-accept-btn-handler")
accept_cookies_button.click()

# ------- DEBUT ------- #
# links = ["../links/men.txt", "../links/women.txt", "../links/unisexe.txt"]
links = ["../links/men.txt"]
colors = set()
categories = set()

os.makedirs("../errors", exist_ok=True)
errors_file = open("../errors/men.txt", "w")

# TODO: Split mix and match, récupérer la catégorie et la couleur
for link in links:
    print("STARTING", link)
    file = open(link, "r")
    lines = file.readlines()
    file.close()

    file = open(link, "w")

    for line in lines:
        # Go to page
        driver.get(line)

        # Check if mix & match
        element = driver.find_elements(By.CLASS_NAME, "product-hero")
        # If mix & match
        if len(element) > 0:
            nested_links = driver.find_elements(By.XPATH, "//ul/li[@class='item']/a")
            hrefs = [a.get_attribute("href") for a in nested_links]

            for href in hrefs:
                file.write(href)
                lines.append(href)
        else:
            file.write(line)

            # Get colors.txt
            title = driver.find_elements(By.TAG_NAME, "h1")[0].text
            title_colors = re.split(r'\s*-\s*', title)[-1]
            item_colors = re.split(r'\s*/\s*|\s*-\s*|\s+et\s+', title_colors)
            colors.update(item_colors)

            # Get category
            try:
                details_button = driver.find_element(By.XPATH, '//div[@id="productDescription"]//ul//li[contains(@class, "accordion-module_item__2SdMy")]/div/h2/button')
                details_button.click()
                category = driver.find_element(By.XPATH, '//div[@id="productDescriptionDetails"]/div/div/a').text
                categories.add(category)
            except Exception:
                errors_file.write(line)
                print("ERROR WITH URL", line[:-1])

    file.close()
    print("FINISHED", link)


# ------- SAVE COLORS IN A FILE ------- #
os.makedirs("data", exist_ok=True)
colors_file = open("data/colors.txt", "w")
categories_file = open("data/categories.txt", "w")

for color in colors:
    colors_file.write(color + "\n")

for category in categories:
    categories_file.write(category + "\n")

colors_file.close()
categories_file.close()
errors_file.close()

print("------- FINAL -------")
print(len(colors))
print(colors)
