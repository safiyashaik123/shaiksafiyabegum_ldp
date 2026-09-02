employees = [
    "101, Safiya, Python, 50000\n",
    "102, Rahul, Java, 55000\n",
    "103, Priya, React, 60000\n"
]

# ==========================================
# Write Employee Records
# Mode : w
# ==========================================

print("Writing Employee Records...\n")

with open("employees.txt", "w") as file:

    file.writelines(employees)

print("Employee Records Saved Successfully.\n")


# ==========================================
# Read Complete File
# Mode : r
# ==========================================

print("Reading Complete File\n")

with open("employees.txt", "r") as file:

    data = file.read()

    print(data)


# ==========================================
# Read Line By Line
# ==========================================

print("\nReading Line By Line\n")

with open("employees.txt", "r") as file:

    print(file.readline())

    print(file.readline())


# ==========================================
# Read All Lines
# ==========================================

print("\nReading Using readlines()\n")

with open("employees.txt", "r") as file:

    records = file.readlines()

    for record in records:

        print(record.strip())


# ==========================================
# Append New Employee
# Mode : a
# ==========================================

print("\nAppending New Employee\n")

with open("employees.txt", "a") as file:

    file.write("104, Kiran, SQL, 65000\n")

print("Employee Added Successfully.\n")


# ==========================================
# tell() and seek()
# ==========================================

print("File Pointer Demonstration\n")

with open("employees.txt", "r") as file:

    print("Pointer Position :", file.tell())

    print(file.read(15))

    print("Pointer Position :", file.tell())

    file.seek(0)

    print("Pointer After seek() :", file.tell())

    print(file.read(15))


# ==========================================
# FileNotFoundError
# ==========================================

print("\nException Handling\n")

try:

    with open("employee_report.txt", "r") as file:

        print(file.read())

except FileNotFoundError as error:

    print(error)

finally:

    print("\nFile Operation Completed.")