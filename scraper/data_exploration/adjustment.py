import os

file = open("../links/men.txt", "r")
lines = file.readlines()
file.close()

file = open("../links/men.txt", "w")
file.writelines(lines[39446:])
file.close()
