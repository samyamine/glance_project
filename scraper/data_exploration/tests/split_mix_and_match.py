import os
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
links = ["../links/men.txt", "../links/women.txt", "../links/unisexe.txt"]

# TODO: récupérer la catégorie
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
        if len(element) > 0:
            nested_links = driver.find_elements(By.XPATH, "//ul/li[@class='item']/a")
            hrefs = [a.get_attribute("href") for a in nested_links]

            for href in hrefs:
                file.write(href)
        else:
            file.write(line)

    file.close()
    print("FINISHED", link)
