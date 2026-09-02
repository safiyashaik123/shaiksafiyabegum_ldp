
student_name = input("Enter Student Name : ")
student_age = int(input("Enter Age          : "))
student_branch = input("Enter Branch       : ")
student_cgpa = float(input("Enter CGPA         : "))

print("\n===== Original Details =====")
print("Name   :", student_name)
print("Age    :", student_age)
print("Branch :", student_branch)
print("CGPA   :", student_cgpa)

# Variable Reassignment
student_branch = "Artificial Intelligence & Data Science"

print("\n===== Updated Branch =====")
print("Branch :", student_branch)

# Multiple Assignment
city, state = "Bhimavaram","Andhra Pradesh"

print("\n===== Location =====")
print("City  :", city)
print("State :", state)

# Same Value Assignment
semester1 = semester2 = semester3 = "Completed"

print("\n===== Semester Status =====")
print(semester1, semester2, semester3)

# Variable Swapping
current_year = 3
next_year = 4

print("\nBefore Swapping")
print("Current Year :", current_year)
print("Next Year    :", next_year)

current_year, next_year = next_year, current_year

print("\nAfter Swapping")
print("Current Year :", current_year)
print("Next Year    :", next_year)

# Data Types
print("\n===== Data Types =====")
print(type(student_name))
print(type(student_age))
print(type(student_cgpa))