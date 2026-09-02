print("========== Student Profile ==========\n")

# Different Data Types
student_name = "Safiya"
student_age = 22
student_cgpa = 8.8
is_placed = False
student_phone = None

print("Student Name :", student_name)
print("Student Age  :", student_age)
print("Student CGPA :", student_cgpa)
print("Placed       :", is_placed)
print("Phone Number :", student_phone)

print("\n========== Data Types ==========")

print("student_name :", type(student_name))
print("student_age  :", type(student_age))
print("student_cgpa :", type(student_cgpa))
print("is_placed    :", type(is_placed))
print("student_phone:", type(student_phone))

print("\n========== Type Conversion ==========")

age = "22"

print("Before Conversion :", age, type(age))

age = int(age)

print("After Conversion  :", age, type(age))

cgpa = "8.8"

print("\nBefore Conversion :", cgpa, type(cgpa))

cgpa = float(cgpa)

print("After Conversion  :", cgpa, type(cgpa))


