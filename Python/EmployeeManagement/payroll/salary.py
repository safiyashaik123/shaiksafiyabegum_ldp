from employees.employee import display_employee

from constants import BONUS_PERCENTAGE


def calculate_salary(base_salary):

    bonus = base_salary * BONUS_PERCENTAGE / 100

    total = base_salary + bonus

    display_employee(
        101,
        "Safiya"
    )

    print("\nSalary Details")
    print("----------------")
    print("Base Salary :", base_salary)
    print("Bonus       :", bonus)
    print("Total Salary:", total)