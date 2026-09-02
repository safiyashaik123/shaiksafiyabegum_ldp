import employee
import salary
import department
import utilities
import constants

import sys
import importlib
import math


print("\n========== Employee Information ==========")

employee.display_employee(
    101,
    "Safiya"
)


print("\n========== Salary ==========")

total_salary = salary.calculate_salary(50000)

print("Total Salary :", total_salary)


print("\n========== Department ==========")

department.display_department()


print("\n========== Constants ==========")

print(constants.COMPANY_NAME)


print("\n========== Built-in Module ==========")

print("Square Root :", math.sqrt(144))


print("\n========== Utility Module ==========")

utilities.show_current_time()


print("\n========== Module Search Path ==========")

for path in sys.path:

    print(path)


print("\n========== Module Cache ==========")

print("employee" in sys.modules)

print("salary" in sys.modules)


print("\n========== Reload Module ==========")

importlib.reload(employee)

print("Employee Module Reloaded")