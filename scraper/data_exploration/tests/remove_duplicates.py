print("------- ERASED LINES PER FILE -------")

links = ["../links/men.txt", "../links/women.txt", "../links/unisexe.txt"]

for link in links:
    i = 0
    print(link.split('/')[2])

    # Open the file in read mode to read its lines
    file = open(link, "r")
    lines = file.readlines()
    unique_lines = set(lines)

    print(len(lines))
    print(len(unique_lines))

    file.close()

    # Open the file again in write mode to write the filtered lines
    file = open(link, "w")

    for line in unique_lines:
        file.write(line)

    file.close()
