print("========== Employee Salary Calculation ==========\n")

basic_salary = 50000
bonus = 5000
tax = 4000
working_days = 22
hours_per_day = 8

print("Basic Salary :", basic_salary)
print("Bonus        :", bonus)
print("Tax          :", tax)

print("\n========== Arithmetic Operators ==========")

print("Total Salary      :", basic_salary + bonus)
print("Salary After Tax  :", basic_salary - tax)
print("Working Hours     :", working_days * hours_per_day)
print("Daily Salary      :", basic_salary / working_days)
print("Hours Per Half Day:", hours_per_day // 2)
print("Remaining Hours   :", working_days % 7)
print("Salary Square     :", 5 ** 2)

print("\n========== Assignment Operators ==========\n")

salary = 50000

print("Original Salary :", salary)

salary += 5000
print("After += 5000   :", salary)

salary -= 2000
print("After -= 2000   :", salary)

salary *= 2
print("After *= 2      :", salary)

salary /= 4
print("After /= 4      :", salary)

salary //= 2
print("After //= 2     :", salary)

salary %= 3
print("After %= 3      :", salary)

salary **= 2
print("After **= 2     :", salary)