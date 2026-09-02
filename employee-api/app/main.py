from fastapi import FastAPI, Path, Query, HTTPException, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from app.routers.employee_db_router import router as employee_db_router
from app.routers.employee_profile_router import router as employee_profile_router
from app.routers.department_router import router as department_router
from app.routers.project_router import router as project_router

from app.schemas.employee_schema import (
    EmployeeCreate,
    EmployeePut,
    EmployeePatch,
    EmployeeResponse,
    BonusResponse
)

from app.services.employee_service import (
    get_all_employees,
    get_employee_by_id,
    create_employee,
    replace_employee,
    patch_employee,
    calculate_bonus,
    get_employees_by_salary,
    get_employees_by_age,
    filter_employees_by_query
)


app = FastAPI(
    title="Employee Management API",
    version="1.0.0"
)

app.include_router(employee_db_router)
app.include_router(employee_profile_router)
app.include_router(department_router)
app.include_router(
    project_router
)

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(
    request: Request,
    exc: RequestValidationError
):

    errors = exc.errors()

    body_missing = any(
        error["loc"] == ("body",)
        and error["type"] in ["missing", "json_invalid"]
        for error in errors
    )

    if body_missing:
        return JSONResponse(
            status_code=422,
            content={
                "error": "Request Body Missing",
                "message": "Employee data is required"
            }
        )

    return JSONResponse(
        status_code=422,
        content={
            "error": "Validation Error",
            "details": errors
        }
    )

# --------------------------------------------------
# GET - Get all employees
# --------------------------------------------------

# @app.get(
#     "/employees",
#     response_model=list[EmployeeResponse]
# )
# def get_employees():

#     return get_all_employees()
# --------------------------------------------------
# GET - Employees with Query Parameters
# --------------------------------------------------

@app.get(
    "/employees",
    response_model=list[EmployeeResponse]
)
def get_employees(
    minimum_age: int | None = Query(
        default=None,
        ge=18,
        le=80,
        description="Minimum age must be between 18 and 80"
    ),

    maximum_age: int | None = Query(
        default=None,
        ge=18,
        le=80,
        description="Maximum age must be between 18 and 80"
    ),

    minimum_salary: float | None = Query(
        default=None,
        gt=20000,
        description="Minimum salary must be greater than 20000"
    ),

    maximum_salary: float | None = Query(
        default=None,
        gt=0,
        description="Maximum salary must be greater than 0"
    ),

    name: str | None = Query(
        default=None,
        min_length=2,
        max_length=50,
        description="Search employee by name"
    ),

    skill: str | None = Query(
        default=None,
        min_length=2,
        max_length=30,
        description="Filter employees by skill"
    ),
    sort_by: str | None = Query(
    default=None,
    pattern="^(name|age|salary|email)$",
    description="Sort employees by name, age, salary or email"
    ),

    order: str = Query(
    default="asc",
    pattern="^(asc|desc)$",
    description="Sort order: ascending or descending"
    ),
    page: int = Query(
    default=1,
    ge=1,
    description="Page number must be at least 1"
    ),

    limit: int = Query(
    default=10,
    ge=1,
    le=100,
    description="Number of employees per page must be between 1 and 100"
    )
):

    result = filter_employees_by_query(
        minimum_age=minimum_age,
        maximum_age=maximum_age,
        minimum_salary=minimum_salary,
        maximum_salary=maximum_salary,
        name=name,
        skill=skill,
        sort_by=sort_by,
        order=order,
        page=page,
        limit=limit
    )

    # if result is None:

    #     raise HTTPException(
    #         status_code=400,
    #         detail=(
    #             "Invalid range. "
    #             "Minimum value cannot be greater than maximum value."
    #         )
    #     )

    # if not result:

    #     raise HTTPException(
    #         status_code=404,
    #         detail=(
    #             "No employees found matching "
    #             "the given filters."
    #         )
    #     )

    # return result
    # ----------------------------------------------
# Invalid range
# ----------------------------------------------

    if result is None:

        raise HTTPException(
          status_code=400,
          detail=(
              "Invalid range. "
             "Minimum value cannot be greater than maximum value."
            )
        )


    employees_result = result["employees"]
    total_count = result["total_count"]


# ----------------------------------------------
# No employees match the filters
# ----------------------------------------------

    if total_count == 0:

        raise HTTPException(
            status_code=404,
            detail=(
                "No employees found matching "
             "the given filters."
            )
        )


# ----------------------------------------------
# Page does not contain employees
# ----------------------------------------------

    if not employees_result:

     raise HTTPException(
        status_code=404,
        detail=(
            f"Page {page} does not contain any employees. "
            f"There are only {total_count} matching employees."
        )
    )


    return employees_result


# --------------------------------------------------
# GET - Filter employees by salary
# --------------------------------------------------

@app.get(
    "/employees/salary/{minimum_salary}",
    response_model=list[EmployeeResponse]
)
def employees_by_salary(
    minimum_salary: float = Path(
        gt=0,
        description="Minimum salary must be greater than 0"
    )
):

    result = get_employees_by_salary(
        minimum_salary
    )

    if not result:

        raise HTTPException(
            status_code=404,
            detail=(
                f"No employees found with salary "
                f"greater than or equal to {minimum_salary}"
            )
        )

    return result


# --------------------------------------------------
# GET - Filter employees by age
# --------------------------------------------------

@app.get(
    "/employees/age/{minimum_age}",
    response_model=list[EmployeeResponse]
)
def employees_by_age(
    minimum_age: int = Path(
        ge=18,
        description="Minimum age must be at least 18"
    )
):

    result = get_employees_by_age(
        minimum_age
    )

    if not result:

        raise HTTPException(
            status_code=404,
            detail=(
                f"No employees found with age "
                f"greater than or equal to {minimum_age}"
            )
        )

    return result


# --------------------------------------------------
# GET - Calculate employee bonus
# --------------------------------------------------

@app.get(
    "/employees/{employee_id}/bonus/{percentage}",
    response_model=BonusResponse
)
def employee_bonus(
    employee_id: int = Path(
        gt=0,
        description="Employee ID must be greater than 0"
    ),
    percentage: float = Path(
        gt=0,
        le=100,
        description="Bonus percentage must be between 0 and 100"
    )
):

    result = calculate_bonus(
        employee_id,
        percentage
    )

    if result is None:

        raise HTTPException(
            status_code=404,
            detail=(
                f"Cannot calculate bonus. "
                f"Employee with ID {employee_id} was not found"
            )
        )

    return result


# --------------------------------------------------
# GET - Get employee by ID
# --------------------------------------------------

@app.get(
    "/employees/{employee_id}",
    response_model=EmployeeResponse
)
def get_employee(
    employee_id: int = Path(
        gt=0,
        description="Employee ID must be greater than 0"
    )
):

    employee = get_employee_by_id(employee_id)

    if employee is None:

        raise HTTPException(
            status_code=404,
            detail=(
                f"Employee with ID {employee_id} "
                f"was not found"
            )
        )

    return employee


# --------------------------------------------------
# POST - Create employee
# --------------------------------------------------

@app.post(
    "/employees",
    response_model=EmployeeResponse,
    status_code=201,
    summary="Create a new employee",
    description="Creates a new employee after validating the request data."
)
def create_new_employee(
    employee: EmployeeCreate
):

    return create_employee(employee)


# --------------------------------------------------
# PUT - Replace complete employee
# --------------------------------------------------

@app.put(
    "/employees/{employee_id}",
    response_model=EmployeeResponse,
    summary="Replace an employee",
    description="Replaces the complete employee information."
)
def replace_employee_data(
    employee: EmployeePut,
    employee_id: int = Path(
        gt=0,
        description="Employee ID must be greater than 0"
    )
):

    updated_employee = replace_employee(
        employee_id,
        employee
    )

    if updated_employee is None:

        raise HTTPException(
            status_code=404,
            detail=(
                f"Cannot replace employee. "
                f"Employee with ID {employee_id} "
                f"was not found"
            )
        )

    return updated_employee


# --------------------------------------------------
# PATCH - Partially update employee
# --------------------------------------------------

@app.patch(
    "/employees/{employee_id}",
    response_model=EmployeeResponse,
    summary="Partially update an employee",
    description="Updates only the fields provided in the request."
)
def patch_employee_data(
    employee: EmployeePatch,
    employee_id: int = Path(
        gt=0,
        description="Employee ID must be greater than 0"
    )
):

    updated_employee = patch_employee(
        employee_id,
        employee
    )

    if updated_employee is None:

        raise HTTPException(
            status_code=404,
            detail=(
                f"Cannot update employee. "
                f"Employee with ID {employee_id} "
                f"was not found"
            )
        )

    return updated_employee

@app.exception_handler(405)
async def method_not_allowed_handler(
    request: Request,
    exc
):
    return JSONResponse(
        status_code=405,
        content={
            "error": "Method Not Allowed",
            "message": (
                f"{request.method} method is not allowed "
                f"for {request.url.path}"
            )
        }
    )
    
