import os
import re
import multiprocessing
import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options


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
    # FIXME: Refacto
    # Init driver + on se rend sur le site ASOS
    driver = webdriver.Chrome()
    driver.get("https://www.asos.com/fr/")

    print("GOT PAGE")

    # FIXME: Refacto
    # On commence par accepter les cookies s'ils sont demandés
    cookie_awaiter = WebDriverWait(driver, 100).until(
        EC.visibility_of_element_located((By.CLASS_NAME, 'ot-sdk-container'))
    )

    print("ACCEPTED COOKIES")

    accept_cookies_button = driver.find_element(By.ID, "onetrust-accept-btn-handler")
    accept_cookies_button.click()

    return driver


def process_file(lines, n):
    file_driver = init_driver()
    lines_to_write = []
    error_lines = []
    colors = set()
    categories = set()

    print("STARTING process", n)

    for i in range(len(lines)):
        if i % 100 == 0:
            print("Process", n, i, "lines")

        line = lines[i]
        # Go to page
        file_driver.get(line)

        # Check if mix & match
        element = file_driver.find_elements(By.CLASS_NAME, "product-hero")
        # If mix & match
        if len(element) > 0:
            nested_links = file_driver.find_elements(By.XPATH, "//ul/li[@class='item']/a")
            hrefs = [a.get_attribute("href") for a in nested_links]

            for href in hrefs:
                lines_to_write.append(href)
                lines.append(href)
        else:
            lines_to_write.append(line)

            # Get colors.txt
            title = file_driver.find_elements(By.TAG_NAME, "h1")[0].text
            title_colors = re.split(r'\s*-\s*', title)[-1]
            item_colors = re.split(r'\s*/\s*|\s*-\s*|\s+et\s+', title_colors)
            colors.update(item_colors)

            # Get category
            try:
                details_button = file_driver.find_element(By.XPATH, '//div[@id="productDescription"]//ul//li[contains(@class, "accordion-module_item__2SdMy")]/div/h2/button')
                details_button.click()
                category = file_driver.find_element(By.XPATH, '//div[@id="productDescriptionDetails"]/div/div/a').text
                categories.add(category)
            except Exception:
                error_lines.append(line)
                print("ERROR WITH URL", line[:-1])

    file_driver.quit()
    print("FINISHED Process", n)

    return lines_to_write, error_lines, colors, categories


# ------- DEBUT ------- #
# links = ["../links/men.txt", "../links/women.txt", "../links/unisexe.txt"]
links = ["../links/men.txt"]

merged_colors = set()
merged_categories = set()

num_divs = 6

if __name__ == "__main__":
    os.makedirs("errors", exist_ok=True)
    os.makedirs("data", exist_ok=True)

    for link in links:
        print("PROCESSING FILE", link)
        file = open("../backup/" + link.split('/')[-1], 'r')
        lines = file.readlines()
        file.close()

        # Delete everything in the file
        # file = open(link, 'w')
        # file.close()

        # FIXME: change this not to use numpy
        subarrays = divide_array(lines[:10000], num_divs)

        pool = multiprocessing.Pool(num_divs)
        start_time = time.perf_counter()

        processes = [pool.apply_async(process_file, args=(urls, n,)) for urls, n in zip(subarrays, range(num_divs))]
        results = [p.get() for p in processes]

        finish_time = time.perf_counter()
        print(f"Program finished in {finish_time-start_time} seconds")

        error_file = open("errors/men.txt", "a")

        for result in results:
            lines_to_write, error_lines, colors, categories = result

            file = open(link, "a")
            file.writelines(lines_to_write)
            file.close()

            error_file.writelines(error_lines)

            merged_colors = merged_colors.union(colors)
            merged_categories = merged_categories.union(categories)

        error_file.close()

    colors_file = open("data/colors.txt", "w")
    categories_file = open("data/categories.txt", "w")

    for item in merged_colors:
        colors_file.write(item + "\n")

    for item in merged_categories:
        categories_file.write(item + "\n")

    colors_file.close()
    categories_file.close()

    print("FINISHED")
