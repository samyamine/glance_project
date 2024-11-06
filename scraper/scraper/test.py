from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


options = webdriver.ChromeOptions()
options.add_argument("--headless=new")
driver = webdriver.Chrome(options=options)

driver.get('https://www.asos.com/fr/asos-design/asos-design-pantalon-cargo-fusele-marron/prd/205719607#colourWayId-205719619')
page_source = driver.page_source
print(page_source)

driver.quit()
