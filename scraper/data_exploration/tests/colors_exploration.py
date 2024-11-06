import os
import re
from selenium import webdriver
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
links = ["links/men.txt", "links/women.txt", "links/unisexe.txt"]
colors = set()

for link in links:
    file = open(link, "r")
    urls = file.readlines()

    for url in urls:
        driver.get(url)
        title = driver.find_elements(By.TAG_NAME, "h1")[0].text
        title_colors = title.split(" - ")[-1]
        item_colors = re.split(r'/| - ', title_colors)

        colors.update(item_colors)

        print(len(colors))
        print(colors)

    file.close()

os.makedirs("data", exist_ok=True)
file = open("data/colors.txt", "w")

for color in colors:
    file.write(color + "\n")

file.close()

print("------- FINAL -------")
print(len(colors))
print(colors)
