unisex_file = open("../links/unisexe.txt", "r")
unisex_lines = unisex_file.readlines()

links = ["../links/men.txt", "../links/women.txt"]

print("------- ERASED LINES PER FILE -------")

for link in links:
    i = 0
    print(link.split('/')[2])

    # Open the file in read mode to read its lines
    file = open(link, "r")
    lines = file.readlines()
    file.close()

    # Open the file again in write mode to write the filtered lines
    file = open(link, "w")

    for line in lines:
        if line not in unisex_lines:
            file.write(line)
        else:
            i += 1

    file.close()
    print(i)
    print()
