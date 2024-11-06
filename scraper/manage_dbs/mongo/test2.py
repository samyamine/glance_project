import re
from pymongo import MongoClient
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
url1 = "https://www.asos.com/fr/columbia/columbia-north-cascades-t-shirt-manches-longues-blanc/prd/206275424#colourWayId-206275439"
url2 = "https://www.asos.com/fr/columbia/columbia-north-cascades-t-shirt-a-manches-longues-noir/prd/206275321#colourWayId-206275324"
url3 = "https://www.asos.com/fr/nike-training/nike-training-mc-3-baskets-bleu/prd/206091142#colourWayId-206091144"
driver.get(url2)

# On commence par accepter les cookies s'ils sont demandés
cookie_awaiter = WebDriverWait(driver, 100).until(
    EC.visibility_of_element_located((By.CLASS_NAME, 'ot-sdk-container'))
)

accept_cookies_button = driver.find_element(By.ID, "onetrust-accept-btn-handler")
accept_cookies_button.click()

# t = driver.find_elements(By.CLASS_NAME, "xifcn")
# if len(t) > 0:
#     price = re.findall(r'\d+,\d+', t[-1].text)
#     print(price)
# else:
#     t = driver.find_element(By.CLASS_NAME, "MwTOW")
#     price = re.findall(r'\d+,\d+', t.text)
#     print(price)

pictures_xpath = '//ul[@class="thumbnails"]/li/button/img'
picture_urls = driver.find_elements(By.XPATH, pictures_xpath)
pictures = [p.get_attribute("src").split('?')[0] for p in picture_urls]
print(pictures)
