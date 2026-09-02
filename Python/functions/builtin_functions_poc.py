print("========== Built-in Functions POC ==========\n")

skills = ["Python", "React", "SQL"]

numbers = [40, 10, 30, 20]

employee = {
    "name": "Safiya",
    "department": "Engineering"
}



print("========== len() ==========\n")

print("Skills Length :", len(skills))
print("Employee Keys :", len(employee))



print("\n========== type() ==========\n")

print(type(skills))
print(type(numbers))
print(type(employee))



print("\n========== id() ==========\n")

print(id(skills))



print("\n========== print() ==========\n")

print("Python Functions")



print("\n========== sum() ==========\n")

marks = [80, 90, 95]

print(sum(marks))



print("\n========== max() & min() ==========\n")

print("Maximum :", max(numbers))
print("Minimum :", min(numbers))



print("\n========== sorted() ==========\n")

print(sorted(numbers))
print("Original :", numbers)



print("\n========== abs() ==========\n")

print(abs(-250))



print("\n========== round() ==========\n")

print(round(3.141592, 2))



print("\n========== enumerate() ==========\n")

for index, skill in enumerate(skills):
    print(index, skill)




print("\n========== zip() ==========\n")

employees = ["Safiya", "Rahul", "Priya"]

departments = ["Engineering", "HR", "Finance"]

for name, department in zip(employees, departments):
    print(name, "-", department)



print("\n========== any() ==========\n")

attendance = [False, False, True]

print(any(attendance))


print("\n========== all() ==========\n")

results = [True, True, True]

print(all(results))