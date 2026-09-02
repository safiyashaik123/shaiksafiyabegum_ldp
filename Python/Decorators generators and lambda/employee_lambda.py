# ============================================================
# Employee Lambda Functions POC
# ============================================================

employees = [
    {
        "id": 101,
        "name": "Safiya",
        "department": "Python",
        "salary": 50000
    },
    {
        "id": 102,
        "name": "Rahul",
        "department": "Java",
        "salary": 70000
    },
    {
        "id": 103,
        "name": "Priya",
        "department": "React",
        "salary": 60000
    },
    {
        "id": 104,
        "name": "Kiran",
        "department": "SQL",
        "salary": 45000
    },
    {
        "id": 105,
        "name": "Neha",
        "department": "Python",
        "salary": 75000
    }
]


# ============================================================
# 1. Basic Lambda
# ============================================================

print("========== Basic Lambda ==========\n")

calculate_bonus = lambda salary: salary * 0.10

print("Salary:", 50000)
print("10% Bonus:", calculate_bonus(50000))


# ============================================================
# 2. Lambda with Multiple Parameters
# ============================================================

print("\n========== Multiple Parameters ==========\n")

calculate_total = lambda salary, bonus: salary + bonus

print(
    "Total Salary:",
    calculate_total(50000, 5000)
)


# ============================================================
# 3. Lambda with Conditional Expression
# ============================================================

print("\n========== Salary Classification ==========\n")

salary_status = lambda salary: (
    "High Salary"
    if salary >= 60000
    else "Standard Salary"
)

print("50000:", salary_status(50000))
print("70000:", salary_status(70000))


# ============================================================
# 4. map() + Lambda
# Get Employee Names
# ============================================================

print("\n========== Employee Names ==========\n")

employee_names = map(
    lambda employee: employee["name"],
    employees
)

print(list(employee_names))


# ============================================================
# 5. map() + Lambda
# Calculate 10% Bonus for Every Employee
# ============================================================

print("\n========== Employee Bonuses ==========\n")

employee_bonuses = map(
    lambda employee: employee["salary"] * 0.10,
    employees
)

for employee, bonus in zip(employees, employee_bonuses):

    print(
        employee["name"],
        "-> Bonus:",
        bonus
    )


# ============================================================
# 6. filter() + Lambda
# Find High Salary Employees
# ============================================================

print("\n========== High Salary Employees ==========\n")

high_salary_employees = filter(
    lambda employee: employee["salary"] >= 60000,
    employees
)

for employee in high_salary_employees:

    print(
        employee["name"],
        "->",
        employee["salary"]
    )


# ============================================================
# 7. filter() + Lambda
# Find Python Employees
# ============================================================

print("\n========== Python Employees ==========\n")

python_employees = filter(
    lambda employee: employee["department"] == "Python",
    employees
)

for employee in python_employees:

    print(
        employee["name"],
        "->",
        employee["department"]
    )


# ============================================================
# 8. sorted() + Lambda
# Sort Employees by Salary
# ============================================================

print("\n========== Salary Ascending ==========\n")

salary_ascending = sorted(
    employees,
    key=lambda employee: employee["salary"]
)

for employee in salary_ascending:

    print(
        employee["name"],
        "->",
        employee["salary"]
    )


# ============================================================
# 9. sorted() + Lambda
# Sort Employees by Salary Descending
# ============================================================

print("\n========== Salary Descending ==========\n")

salary_descending = sorted(
    employees,
    key=lambda employee: employee["salary"],
    reverse=True
)

for employee in salary_descending:

    print(
        employee["name"],
        "->",
        employee["salary"]
    )


# ============================================================
# 10. sorted() + Lambda
# Sort Employees by Name
# ============================================================

print("\n========== Sort by Name ==========\n")

name_sorted = sorted(
    employees,
    key=lambda employee: employee["name"]
)

for employee in name_sorted:

    print(employee["name"])


# ============================================================
# 11. Lambda with Name Length
# ============================================================

print("\n========== Sort by Name Length ==========\n")

name_length_sorted = sorted(
    employees,
    key=lambda employee: len(employee["name"])
)

for employee in name_length_sorted:

    print(
        employee["name"],
        "-> Name Length:",
        len(employee["name"])
    )