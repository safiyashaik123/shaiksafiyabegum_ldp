import sys

import employees.employee as emp

from employees.department import employee_information

from payroll import salary

from utilities.helper import current_time


print("\n========== Employee ==========\n")

emp.display_employee(
    101,
    "Safiya"
)


print("\n========== Department ==========\n")

employee_information()


print("\n========== Salary ==========\n")

salary.calculate_salary(
    50000
)


print("\n========== Utility ==========\n")

current_time()


print("\n========== Module Search Path ==========\n")

for path in sys.path:

    print(path)


print("\n========== Module Cache ==========\n")

print("employees.employee :", "employees.employee" in sys.modules)

print("payroll.salary     :", "payroll.salary" in sys.modules)

print("utilities.helper   :", "utilities.helper" in sys.modules)