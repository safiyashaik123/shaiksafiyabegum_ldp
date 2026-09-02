from app.data.employee_data import employees
from app.schemas.employee_schema import (
    EmployeeCreate,
    EmployeePut,
    EmployeePatch
)


def get_all_employees():

    return employees


def get_employee_by_id(employee_id: int):

    for employee in employees:

        if employee["id"] == employee_id:
            return employee

    return None


def create_employee(employee: EmployeeCreate):

    new_id = max(
        (item["id"] for item in employees),
        default=0
    ) + 1

    new_employee = {
        "id": new_id,
        **employee.model_dump()
    }

    employees.append(new_employee)

    return new_employee


def replace_employee(
    employee_id: int,
    employee: EmployeePut
):

    existing_employee = get_employee_by_id(employee_id)

    if existing_employee is None:
        return None

    existing_employee.update(
        employee.model_dump()
    )

    return existing_employee


def patch_employee(
    employee_id: int,
    employee: EmployeePatch
):

    existing_employee = get_employee_by_id(employee_id)

    if existing_employee is None:
        return None

    update_data = employee.model_dump(
        exclude_unset=True
    )

    existing_employee.update(update_data)

    return existing_employee


def calculate_bonus(
    employee_id: int,
    percentage: float
):

    employee = get_employee_by_id(employee_id)

    if employee is None:
        return None

    bonus = employee["salary"] * percentage / 100

    return {
        "employee_id": employee_id,
        "salary": employee["salary"],
        "percentage": percentage,
        "bonus": bonus,
        "message": (
            f"{percentage}% bonus calculated successfully"
        )
    }

    
def get_employees_by_salary(minimum_salary: float):

    filtered_employees = [
        employee
        for employee in employees
        if employee["salary"] >= minimum_salary
    ]

    return filtered_employees


def get_employees_by_age(minimum_age: int):

    filtered_employees = [
        employee
        for employee in employees
        if employee["age"] >= minimum_age
    ]

    return filtered_employees


def filter_by_range(
    data,
    field,
    minimum=None,
    maximum=None
):

    # Invalid range
    if (
        minimum is not None
        and maximum is not None
        and minimum > maximum
    ):
        return None

    filtered_data = [
        item
        for item in data
        if (
            (minimum is None or item[field] >= minimum)
            and
            (maximum is None or item[field] <= maximum)
        )
    ]

    return filtered_data


def filter_employees_by_query(
    minimum_age: int | None = None,
    maximum_age: int | None = None,
    minimum_salary: float | None = None,
    maximum_salary: float | None = None,
    name: str | None = None,
    skill: str | None = None,
    sort_by: str | None = None,
    order: str = "asc",
    page: int = 1,
    limit: int = 10
):

    # ----------------------------------------------
    # Age range
    # ----------------------------------------------

    filtered_employees = filter_by_range(
        employees,
        "age",
        minimum_age,
        maximum_age
    )

    if filtered_employees is None:
        return None

    # ----------------------------------------------
    # Salary range
    # ----------------------------------------------

    filtered_employees = filter_by_range(
        filtered_employees,
        "salary",
        minimum_salary,
        maximum_salary
    )

    if filtered_employees is None:
        return None

    # ----------------------------------------------
    # Name search
    # ----------------------------------------------

    if name is not None:

        filtered_employees = [
            employee
            for employee in filtered_employees
            if name.lower() in employee["name"].lower()
        ]

    # ----------------------------------------------
    # Skill search
    # ----------------------------------------------

    if skill is not None:

        filtered_employees = [
            employee
            for employee in filtered_employees
            if any(
                skill.lower() == employee_skill.lower()
                for employee_skill in employee["skills"]
            )
        ]

    # ----------------------------------------------
    # Sorting
    # ----------------------------------------------

    if sort_by is not None:

        reverse = order == "desc"

        filtered_employees = sorted(
            filtered_employees,
            key=lambda employee: employee[sort_by],
            reverse=reverse
        )
    #     # ----------------------------------------------
    # # Pagination
    # # ----------------------------------------------

    # start = (page - 1) * limit
    # end = start + limit

    # filtered_employees = filtered_employees[start:end]

    # return filtered_employees
    # ----------------------------------------------
# Total count before pagination
# ----------------------------------------------

    total_count = len(filtered_employees)


# ----------------------------------------------
# Pagination
# ----------------------------------------------

    start = (page - 1) * limit
    end = start + limit

    paginated_employees = filtered_employees[start:end]


    return {
        "employees": paginated_employees,
        "total_count": total_count
    }