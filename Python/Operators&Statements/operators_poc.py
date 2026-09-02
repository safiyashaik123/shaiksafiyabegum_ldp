employee_name = "Safiya"
employee_age = 22
employee_salary = 55000
employee_department = "Engineering"

employee_skills = ["Python", "React", "SQL"]

backup_skills = employee_skills

new_skills = ["Python", "React", "SQL"]


print("========== Comparison Operators ==========\n")

print("Age == 22            :", employee_age == 22)
print("Age != 18            :", employee_age != 18)
print("Salary > 50000       :", employee_salary > 50000)
print("Salary < 50000       :", employee_salary < 50000)
print("Age >= 18            :", employee_age >= 18)
print("Age <= 25            :", employee_age <= 25)


print("\n========== Logical Operators ==========\n")

print("Age >=18 and Salary >50000 :",
      employee_age >= 18 and employee_salary > 50000)

print("Age <18 or Salary >50000   :",
      employee_age < 18 or employee_salary > 50000)

print("Not Department == HR       :",
      not employee_department == "HR")


print("\n========== Membership Operators ==========\n")

print("Python in Skills       :", "Python" in employee_skills)
print("Java in Skills         :", "Java" in employee_skills)
print("Java not in Skills     :", "Java" not in employee_skills)
print("React not in Skills    :", "React" not in employee_skills)


print("\n========== Identity Operators ==========\n")

print("backup_skills is employee_skills      :",
      backup_skills is employee_skills)

print("new_skills is employee_skills         :",
      new_skills is employee_skills)

print("new_skills == employee_skills         :",
      new_skills == employee_skills)

print("backup_skills is not new_skills       :",
      backup_skills is not new_skills)

print("\n========== Ternary Operator ==========\n")

result = "Pass" if employee_age >= 18 else "Fail"
print("Age Eligibility        :", result)

bonus = "Eligible" if employee_salary >= 50000 else "Not Eligible"
print("Bonus Eligibility      :", bonus)

department = "Technical" if employee_department == "Engineering" else "Non-Technical"
print("Department Type        :", department)

python_skill = "Available" if "Python" in employee_skills else "Not Available"
print("Python Skill           :", python_skill)


print("\n========== Operator Precedence ==========\n")

print("10 + 5 * 2           :", 10 + 5 * 2)
print("(10 + 5) * 2         :", (10 + 5) * 2)
print("2 ** 3 + 4           :", 2 ** 3 + 4)
print("10 + 5 > 12          :", 10 + 5 > 12)
print("True or False and False :", True or False and False)
print("(True or False) and False :", (True or False) and False)


