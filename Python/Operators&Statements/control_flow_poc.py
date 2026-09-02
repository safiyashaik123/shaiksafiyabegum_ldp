
employee = {
    "id": 101,
    "name": "Safiya",
    "age": 22,
    "department": "Engineering",
    "salary": 55000,
    "experience": 3,
    "skills": ["Python", "React", "SQL"]
}

print("Employee Name :", employee["name"])
print("Department    :", employee["department"])
print("Salary        :", employee["salary"])



print("\n========== if Statement ==========\n")

if employee["age"] >= 18:
    print("Employee is eligible to work.")



print("\n========== if...else Statement ==========\n")

if employee["salary"] >= 50000:
    print("Employee is eligible for Bonus.")
else:
    print("Employee is not eligible for Bonus.")


print("\n========== if...elif...else Statement ==========\n")

if employee["salary"] >= 70000:
    print("Employee Grade : A")

elif employee["salary"] >= 50000:
    print("Employee Grade : B")

else:
    print("Employee Grade : C")


print("\n========== Nested if Statement ==========\n")

if employee["department"] == "Engineering":

    print("Engineering Department")

    if "Python" in employee["skills"]:
        print("Python Developer")

    else:
        print("Python Skill Missing")

else:
    print("Employee is not from Engineering")



print("\n========== Match Case ==========\n")

match employee["department"]:

    case "Engineering":
        print("Software Development Team")

    case "HR":
        print("Human Resources Team")

    case "Finance":
        print("Finance Team")

    case _:
        print("Department Not Found")
        
        
        
        

     