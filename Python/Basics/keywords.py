import keyword

print("========== Python Keywords ==========\n")

# Boolean Keywords
is_student = True
is_placed = False

print("Is Student :", is_student)
print("Is Placed  :", is_placed)

# None Keyword
student_phone = None

print("\nPhone Number :", student_phone)

student_phone = "9876543210"

print("Updated Phone :", student_phone)

print("\n========== Keyword Checking ==========")

print("Is 'if' a keyword?      :", keyword.iskeyword("if"))
print("Is 'student' a keyword? :", keyword.iskeyword("student"))
print("Is 'while' a keyword?   :", keyword.iskeyword("while"))
print("Is 'python' a keyword?  :", keyword.iskeyword("python"))

print("\n========== Total Keywords ==========")

print("Total Keywords :", len(keyword.kwlist))

print("\n========== Keyword List ==========")

print(keyword.kwlist)