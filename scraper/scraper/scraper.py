import time
import re
import os
from enum import Enum
from selenium import webdriver
from selenium.common import TimeoutException, ElementClickInterceptedException, NoSuchElementException, \
    StaleElementReferenceException
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class GENDER(Enum):
    MEN = "Homme"
    UNISEXE = "Unisexe"
    WOMEN = "Femme"


def wait_page_loading(driver):
    loading_ui_class = "mask_HgJXG"

    load_awaiter = WebDriverWait(driver, 100).until(
        EC.invisibility_of_element_located((By.CLASS_NAME, loading_ui_class))
    )


def driver_wait(driver, condition, timeout=10):
    try:
        element = WebDriverWait(driver, timeout).until(condition)
        return True
    except TimeoutException:
        return False


def get_brands(driver, URL):
    driver.get(URL)

    brands_links = driver.find_elements(By.CLASS_NAME, "brandTitle_k7acW")
    brands = []

    for link in brands_links:
        brands.append(link.text)

    return brands


def get_items_url(driver):
    results = []

    category_selector = driver.find_element(By.XPATH, "//ul[@class='refinementsList_DASZG']/li/div/button/div[contains(text(), 'Catégorie')]/../../..")

    # automatically closes other open tab
    category_selector.click()
    category_filters = [re.match(r"([^\d()\n]+)(?=\S)", x.text).group(1) for x in driver.find_elements(By.CLASS_NAME, "li_IVqZE")]

    print(category_filters)

    for category in category_filters:
        print(category)
        # Find and click on the specified category filter
        c = driver.find_element(By.XPATH, f"{FILTER_XPATH}'{category}']")
        c.click()

        driver_wait(driver, EC.invisibility_of_element_located((By.CLASS_NAME, LOADING_UI_CLASS)))

        # On scroll jusqu'à avoir tous les items de la catégorie affichés
        has_scrolled = load_all_items(driver)

        # On récupère tous les articles
        articles = driver.find_elements(By.CLASS_NAME, "productLink_KM4PI")
        results += [x.get_attribute("href") for x in articles]

        if has_scrolled:
            # Scroll up to the top
            driver.execute_script("window.scrollTo(0, 0);")
            category_selector.click()

        c = driver.find_element(By.XPATH, f"{FILTER_XPATH}'{category}']")
        c.click()
        driver_wait(driver, EC.invisibility_of_element_located((By.CLASS_NAME, LOADING_UI_CLASS)), timeout=60)

    return results


def load_all_items(driver):
    has_scrolled = False

    # On charge tous les articles sous forme de liste sur une seule page
    seen_articles, max_articles = list(map(int, re.findall(r'\d+', driver.find_element(By.CLASS_NAME, "label_Ph1fi").text.replace(' ', ''))))

    while seen_articles < max_articles:
        has_scrolled = True

        try:
            driver_wait(driver, EC.element_to_be_clickable((By.CLASS_NAME, "loadButton_wWQ3F")))
            load_more_button = driver.find_element(By.CLASS_NAME, "loadButton_wWQ3F")
        except NoSuchElementException:
            return has_scrolled

        while True:
            try:
                load_more_button.click()
                break
            except (ElementClickInterceptedException, StaleElementReferenceException) as e:
                retry_button = driver.find_element(By.CLASS_NAME, "retryButton_UkCA8")
                retry_button.click()

        # On attend que tout charge
        load_more_button_awaiter = WebDriverWait(driver, 100).until(EC.invisibility_of_element_located((By.CLASS_NAME, 'loadButtonSpinnerWrapper_J7D3k')))
        seen_articles, max_articles = list(map(int, re.findall(r'\d+', driver.find_element(By.CLASS_NAME, "label_Ph1fi").text.replace(' ', ''))))

    return has_scrolled


def go_to_brand_listing(driver, brand):
    search_bar = driver.find_element(By.ID, "chrome-search")
    search_bar.send_keys(brand)
    search_bar.send_keys(Keys.ENTER)

    # Waits the page to load
    if not driver_wait(driver, EC.invisibility_of_element_located((By.CLASS_NAME, LOADING_UI_CLASS)), timeout=10):
        logo = driver.find_element(By.CLASS_NAME, "afrMdWS")
        logo.click()
        time.sleep(2)

        search_bar = driver.find_element(By.ID, "chrome-search")
        search_bar.send_keys(brand)
        search_bar.send_keys(Keys.ENTER)


os.makedirs("links", exist_ok=True)

men_file = open("../links/men.txt", "a")
women_file = open("../links/women.txt", "a")
unisexe_file = open("../links/unisexe.txt", "a")

URL_MEN_BRANDS = "https://www.asos.com/fr/homme/a-to-z-of-brands/cat/?cid=1361"
URL_WOMEN_BRANDS = "https://www.asos.com/fr/femme/a-to-z-of-brands/cat/?cid=1340"

# -----  UI HTML CLASSES  ----- #
FILTER_XPATH = "//div[contains(@class, 'value_hLBn8') and text()="
LOADING_UI_CLASS = "mask_HgJXG"
BRAND_TITLE = "searchTerm_Fp6B1"

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


# Début du scrapping
# ----------   MARQUES HOMMES/UNISEXE   ---------- #
men_brands = get_brands(driver, URL_MEN_BRANDS)
print(len(men_brands))
print(men_brands)


# ----------   MARQUES FEMMES/UNISEXE   ---------- #
women_brands = get_brands(driver, URL_WOMEN_BRANDS)
print(len(women_brands))
print(women_brands)

total_brands = dict()

for brand in men_brands:
    total_brands[brand] = ["Homme"]

for brand in women_brands:
    if brand not in total_brands.keys():
        total_brands[brand] = ["Femme"]
    else:
        total_brands[brand] = ["Homme", "Femme"]

print(len(total_brands))
print(total_brands)


# ----------   RETRIEVE ITEMS URL FOR MEN, WOMEN & UNISEXE   ---------- #
for brand in total_brands.keys():
    if brand in ["ASOS Collection"]:  # ["ASOS DESIGN", "ASOS Collection"]:
        print(brand)
        # try:
        go_to_brand_listing(driver, brand)

        time.sleep(5)

        # Get all genders
        gender_selector = driver.find_element(By.XPATH, "//ul[@class='refinementsList_DASZG']/li/div/button/div[contains(text(), 'Genre')]/../../..")
        gender_selector.click()
        genders = [re.match(r'([A-Za-z]+)', x.text).group(1) for x in driver.find_elements(By.CLASS_NAME, "li_IVqZE")]
        genders.reverse()

        for gender in genders:
            print(gender)

            gender_button = driver.find_element(By.XPATH, f"{FILTER_XPATH}'{gender}']")
            print("Click on gender_button", gender)
            gender_button.click()
            driver_wait(driver, EC.invisibility_of_element_located((By.CLASS_NAME, LOADING_UI_CLASS)))

            items = get_items_url(driver)

            if gender == "Homme":
                for item in items:
                    men_file.write(item + "\n")
            elif gender == "Femme":
                for item in items:
                    women_file.write(item + "\n")
            else:
                for item in items:
                    unisexe_file.write(item + "\n")

            print("Click on gender_selector")
            gender_selector.click()
            print("Click on gender_button", gender)
            gender_button = driver.find_element(By.XPATH, f"{FILTER_XPATH}'{gender}']")
            gender_button.click()
            driver_wait(driver, EC.invisibility_of_element_located((By.CLASS_NAME, LOADING_UI_CLASS)))

            time.sleep(2)


men_file.close()
women_file.close()
unisexe_file.close()

time.sleep(10)
