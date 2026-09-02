from constants import COMPANY_NAME


def display_employee(employee_id, name):

    print("\nEmployee Details")
    print("----------------")
    print("ID         :", employee_id)
    print("Name       :", name)
    print("Company    :", COMPANY_NAME)


if __name__ == "__main__":

    print("Employee Module Executed Directly")

    display_employee(
        101,
        "Safiya"
    )