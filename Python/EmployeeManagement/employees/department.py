from .employee import display_employee

from constants import DEFAULT_DEPARTMENT


def display_department():

    print("\nDepartment")
    print("----------")
    print(DEFAULT_DEPARTMENT)


def employee_information():

    display_employee(
        101,
        "Safiya"
    )

    display_department()