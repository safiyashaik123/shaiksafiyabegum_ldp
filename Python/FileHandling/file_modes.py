
print("1. x Mode (Create File)")
print("------------------------")

try:

    with open("employee_copy.txt", "x") as file:

        file.write("Employee File Created Successfully.")

    print("employee_copy.txt created successfully.")

except FileExistsError:

    print("employee_copy.txt already exists.")

print()



print("2. r+ Mode (Read + Write)")
print("--------------------------")

with open("employees_rplus.txt", "r+") as file:

    print("Initial File Content:\n")

    print(file.read())

    file.write("\n103, Priya, React, 60000")

print("\nNew employee appended using r+.")

print("\nUpdated File:\n")

with open("employees_rplus.txt", "r") as file:

    print(file.read())

print()



print("3. w+ Mode (Write + Read)")
print("--------------------------")

with open("employees_wplus.txt", "w+") as file:

    file.write("201, Arun, Python, 70000")

    file.seek(0)

    print(file.read())

print("\nNotice:")
print("Old content was deleted before writing.\n")



print("4. a+ Mode (Append + Read)")
print("---------------------------")

with open("employees_aplus.txt", "a+") as file:

    file.write("\n103, Priya, React, 60000")

    file.seek(0)

    print(file.read())

print("\nNotice:")
print("Old data is preserved and new data is appended.\n")



print("5. wb Mode (Write Binary)")
print("--------------------------")

binary_data = b"Python File Handling"

with open("binary_file.bin", "wb") as file:

    file.write(binary_data)

print("Binary file created successfully.\n")



print("6. rb Mode (Read Binary)")
print("-------------------------")

with open("binary_file.bin", "rb") as file:

    data = file.read()

    print(data)

print("\nProgram Completed Successfully.")