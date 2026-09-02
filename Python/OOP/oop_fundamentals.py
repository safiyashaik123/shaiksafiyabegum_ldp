
class Employee:

    # ===============================================
    # Class Attribute
    # ===============================================

    company = "Zemoso Technologies"

    employee_count = 0


    # ===============================================
    # Constructor
    # ===============================================

    def __init__(self, employee_id, name, department, salary):

        self.employee_id = employee_id
        self.name = name
        self.department = department
        self.salary = salary

        Employee.employee_count += 1


    # ===============================================
    # Instance Method
    # ===============================================

    def display_employee(self):

        print("\nEmployee Details")
        print("----------------")
        print("ID         :", self.employee_id)
        print("Name       :", self.name)
        print("Department :", self.department)
        print("Salary     :", self.salary)
        print("Company    :", Employee.company)


    # ===============================================
    # Instance Method Calling Another Instance Method
    # ===============================================

    def display_salary(self):

        bonus = self.calculate_bonus()

        print("Bonus      :", bonus)
        print("Total      :", self.salary + bonus)


    # ===============================================
    # Instance Method
    # ===============================================

    def calculate_bonus(self):

        return self.salary * 0.10


    # ===============================================
    # Instance Method
    # ===============================================

    def update_department(self, department):

        self.department = department

        print("\nDepartment Updated Successfully")


    # ===============================================
    # Class Method
    # ===============================================

    @classmethod
    def display_company(cls):

        print("\nCompany Information")
        print("-------------------")
        print("Company :", cls.company)
        print("Employees :", cls.employee_count)


    # ===============================================
    # Static Method
    # ===============================================

    @staticmethod
    def validate_salary(salary):

        return salary >= 25000


# ==================================================
# Object Creation
# ==================================================

employee1 = Employee(
    101,
    "Safiya",
    "Engineering",
    50000
)

employee2 = Employee(
    102,
    "Rahul",
    "HR",
    35000
)


# ==================================================
# Instance Method
# ==================================================

employee1.display_employee()

employee1.display_salary()


# ==================================================
# Update Instance Attribute
# ==================================================

employee1.update_department("AI Team")

employee1.display_employee()


# ==================================================
# Multiple Objects
# ==================================================

employee2.display_employee()

employee2.display_salary()


# ==================================================
# Class Method
# ==================================================

Employee.display_company()

# ==================================================
# Static Method
# ==================================================

print("\nSalary Validation")
print("-----------------")

print(
    "Employee1 :",
    Employee.validate_salary(employee1.salary)
)

print(
    "Employee2 :",
    Employee.validate_salary(employee2.salary)
)