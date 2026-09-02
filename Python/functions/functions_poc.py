# =====================================================
# Function Definition & Calling
# =====================================================

def welcome():
    print("Welcome to Employee Management System")


welcome()


# =====================================================
# Parameters & Positional Arguments
# =====================================================

def employee_details(employee_id, name, department):
    print("\nEmployee Details")
    print("ID         :", employee_id)
    print("Name       :", name)
    print("Department :", department)


employee_details(101, "Safiya", "Engineering")


print("\n========== Keyword Arguments ==========")

employee_details(
    department="HR",
    employee_id=102,
    name="Rahul"
)


print("\n========== Default Arguments ==========")

def create_employee(name,
                    department="Engineering",
                    location="Hyderabad"):
    print("\nEmployee Created")
    print("Name       :", name)
    print("Department :", department)
    print("Location   :", location)


create_employee("Safiya")

create_employee(
    "Rahul",
    department="Finance",
    location="Bangalore"
)


print("\n========== Return Statement ==========")

def calculate_salary(basic_salary):
    hra = basic_salary * 0.20
    bonus = basic_salary * 0.10

    return basic_salary + hra + bonus


salary = calculate_salary(50000)

print("Total Salary :", salary)



print("\n========== Multiple Return Values ==========")

def employee_summary():
    return 101, "Safiya", "Engineering"


employee_id, employee_name, employee_department = employee_summary()

print(employee_id)
print(employee_name)
print(employee_department)


print("\n========== *args ==========")

def employee_skills(name, *skills):
    print("\nEmployee :", name)

    print("Skills")

    for skill in skills:
        print("-", skill)


employee_skills(
    "Safiya",
    "Python",
    "React",
    "SQL",
    "Docker"
)


print("\n========== **kwargs ==========")

def employee_profile(**details):
    print()

    for key, value in details.items():
        print(key, ":", value)


employee_profile(
    id=101,
    name="Safiya",
    department="Engineering",
    salary=50000,
    experience=2,
    location="Hyderabad"
)



print("\n========== Local Variable ==========")

def generate_email(name):
    company = "zemoso.com"      

    email = name.lower() + "@" + company

    print(email)


generate_email("Safiya")




print("\n========== Global Variable ==========")

company_name = "Zemoso"


def display_company():
    print("Company :", company_name)


display_company()


print("\n========== Global Keyword ==========")

employee_count = 100


def hire_employee():
    global employee_count

    employee_count += 1

    print("Inside Function :", employee_count)


hire_employee()

print("Outside Function :", employee_count)



print("\n========== Local & Global Same Name ==========")

company = "Zemoso"      


def show_company():
    company = "Google"   

    print("Inside Function :", company)


show_company()

print("Outside Function :", company)



print("\n========== Same Name Using Global Keyword ==========")

company = "Zemoso"


def update_company():
    global company

    company = "Microsoft"

    print("Inside Function :", company)


update_company()

print("Outside Function :", company)


# =====================================================
# Function Calling Another Function
# =====================================================

print("\n========== Function Calling Another Function ==========")

def calculate_bonus(salary):
    return salary * 0.10


def calculate_total_salary(salary):
    bonus = calculate_bonus(salary)

    return salary + bonus


print("Total Salary :", calculate_total_salary(50000))