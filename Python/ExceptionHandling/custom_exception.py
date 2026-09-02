class InvalidAgeError(Exception):

    pass


class InvalidSalaryError(Exception):

    pass


class InvalidExperienceError(Exception):

    pass


print("========== Employee Registration ==========\n")

try:

    employee_name = input("Enter Employee Name : ")

    employee_age = int(input("Enter Employee Age : "))

    employee_salary = float(input("Enter Employee Salary : "))

    experience = int(input("Enter Experience : "))


    if employee_age < 18:

        raise InvalidAgeError(
            "Employee must be at least 18 years old."
        )


    if employee_salary <= 0:

        raise InvalidSalaryError(
            "Salary must be greater than zero."
        )


    if experience < 0:

        raise InvalidExperienceError(
            "Experience cannot be negative."
        )


except InvalidAgeError as error:

    print("\nInvalidAgeError :", error)

except InvalidSalaryError as error:

    print("\nInvalidSalaryError :", error)

except InvalidExperienceError as error:

    print("\nInvalidExperienceError :", error)

except ValueError as error:

    print("\nValueError :", error)

else:

    print("\nEmployee Registered Successfully.")

    print("------------------------------")

    print("Name :", employee_name)

    print("Age :", employee_age)

    print("Salary :", employee_salary)

    print("Experience :", experience)

finally:

    print("\nThank You For Using Employee Registration System.")