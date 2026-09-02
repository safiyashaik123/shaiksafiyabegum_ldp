from functools import wraps


# ============================================================
# Decorator 1: Logging
# ============================================================

def log_activity(function):

    @wraps(function)
    def wrapper(*args, **kwargs):

        print("\n--- Activity Started ---")
        print("Function:", view_employee.__name__)

        result = function(*args, **kwargs)

        print("Activity Completed")

        return result

    return wrapper


# ============================================================
# Decorator 2: Authentication
# ============================================================

def requires_login(function):

    @wraps(function)
    def wrapper(*args, **kwargs):

        logged_in = kwargs.get("logged_in", False)

        if not logged_in:
            print("Access Denied: Employee is not logged in.")
            return None

        return function(*args, **kwargs)

    return wrapper


# ============================================================
# Decorator 3: Salary Validation
# ============================================================

def validate_salary(function):

    @wraps(function)
    def wrapper(*args, **kwargs):

        salary = kwargs.get("salary")

        if salary is not None and salary <= 0:
            print("Invalid salary.")
            return None

        return function(*args, **kwargs)

    return wrapper


# ============================================================
# Employee Operations
# ============================================================

@log_activity
@requires_login
def view_employee(employee_id, *, logged_in=False):

    print(f"Employee {employee_id} details displayed.")


@log_activity
@requires_login
@validate_salary
def update_salary(employee_id, *, salary=None, logged_in=False):

    print(
        f"Salary of Employee {employee_id} "
        f"updated to ₹{salary}"
    )

    return salary


# ============================================================
# Program
# ============================================================

print("========== Employee Decorator POC ==========")


print("\n1. View Employee")
view_employee(101, logged_in=True)


print("\n2. View Employee Without Login")
view_employee(102, logged_in=False)


print("\n3. Update Salary")
salary = update_salary(
    101,
    salary=60000,
    logged_in=True
)

print("Returned Salary:", salary)


print("\n4. Invalid Salary")
update_salary(
    103,
    salary=-5000,
    logged_in=True
)