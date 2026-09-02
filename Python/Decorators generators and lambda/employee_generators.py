
# ============================================================
# Employee Data
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
        "salary": 55000
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
        "salary": 65000
    },
    {
        "id": 105,
        "name": "Neha",
        "department": "Python",
        "salary": 70000
    }
]


# ============================================================
# Generator 1: Generate Employees
# ============================================================

def employee_generator(employee_list):

    for employee in employee_list:

        print("Generating employee:", employee["name"])

        yield employee


# ============================================================
# Generator 2: Generate Employees Based on Salary
# ============================================================

def high_salary_employees(employee_list, minimum_salary):

    for employee in employee_list:

        if employee["salary"] >= minimum_salary:

            yield employee


# ============================================================
# Generator 3: Generate Employee IDs
# ============================================================

def employee_ids(employee_list):

    for employee in employee_list:

        yield employee["id"]


# ============================================================
# Generator Expression
# ============================================================

salary_generator = (
    employee["salary"]
    for employee in employees
)


# ============================================================
# 1. Create Generator Object
# ============================================================

print("========== Generator Object ==========\n")

generator = employee_generator(employees)

print("Generator:", generator)


# ============================================================
# 2. Using next()
# ============================================================

print("\n========== Using next() ==========\n")

print(next(generator))

print(next(generator))


# ============================================================
# 3. Continue Using for Loop
# ============================================================

print("\n========== Using for Loop ==========\n")

for employee in generator:

    print(employee)


# ============================================================
# 4. High Salary Employees
# ============================================================

print("\n========== High Salary Employees ==========\n")

high_salary = high_salary_employees(
    employees,
    60000
)

for employee in high_salary:

    print(
        employee["name"],
        "₹",
        employee["salary"]
    )


# ============================================================
# 5. Employee IDs
# ============================================================

print("\n========== Employee IDs ==========\n")

ids = employee_ids(employees)

print(next(ids))
print(next(ids))

print("\nRemaining IDs:")

for employee_id in ids:

    print(employee_id)


# ============================================================
# 6. Generator Expression
# ============================================================

print("\n========== Generator Expression ==========\n")

print("Generator:", salary_generator)

for salary in salary_generator:

    print(salary)


# ============================================================
# 7. Demonstrate Lazy Execution
# ============================================================

print("\n========== Lazy Execution ==========\n")


def lazy_employee_generator():

    print("Generator Started")

    for employee in employees:

        print("Producing:", employee["name"])

        yield employee


lazy_generator = lazy_employee_generator()

print("\nGenerator object created.")

print("\nRequesting first employee:")

print(next(lazy_generator))

print("\nRequesting second employee:")

print(next(lazy_generator))


# ============================================================
# 8. Demonstrate One-Time Consumption
# ============================================================

print("\n========== One-Time Consumption ==========\n")

new_generator = employee_ids(employees)

for employee_id in new_generator:

    print(employee_id)

print("\nTrying to use the same generator again:")

for employee_id in new_generator:

    print(employee_id)

print("No output because generator is exhausted.")


# ============================================================
# 9. Demonstrate StopIteration
# ============================================================

print("\n========== StopIteration ==========\n")

numbers = employee_ids(employees)

try:

    while True:

        employee_id = next(numbers)

        print(employee_id)

except StopIteration:

    print("Generator is exhausted.")