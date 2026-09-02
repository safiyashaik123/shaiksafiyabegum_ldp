try:

    employee_id = int(input("Enter Employee ID : "))

    employee_name = input("Enter Employee Name : ")

    employee_salary = float(input("Enter Employee Salary : "))

    bonus_percentage = float(input("Enter Bonus Percentage : "))

    employees = [
        "Rahul",
        "Priya",
        "Kiran"
    ]

    employee = {
        "Department": "Engineering",
        "Location": "Hyderabad"
    }

    employee_index = int(input("Enter Employee Index : "))

    dictionary_key = input("Enter Dictionary Key : ")

    print("\nEmployee :", employees[employee_index])

    print("Value :", employee[dictionary_key])

    total_bonus = employee_salary / bonus_percentage

    print("Bonus :", total_bonus)

    print(employee_salary + employee_name)

except ValueError as error:

    print("\nValueError :", error)

except ZeroDivisionError as error:

    print("\nZeroDivisionError :", error)

except IndexError as error:

    print("\nIndexError :", error)

except KeyError as error:

    print("\nKeyError :", error)

except TypeError as error:

    print("\nTypeError :", error)

except Exception as error:

    print("\nUnexpected Error :", error)

else:

    print("\nEmployee Record Processed Successfully.")

finally:

    print("\nApplication Closed.")