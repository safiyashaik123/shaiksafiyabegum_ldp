from pydantic import BaseModel, EmailStr, Field, ConfigDict


class EmployeeCreate(BaseModel):

    name: str = Field(
        min_length=2,
        max_length=50
    )

    age: int = Field(
        ge=18,
        le=80
    )

    salary: float = Field(
        gt=20000
    )

    email: EmailStr


class EmployeePut(BaseModel):

    name: str = Field(
        min_length=2,
        max_length=50
    )

    age: int = Field(
        ge=18,
        le=80
    )

    salary: float = Field(
        gt=20000
    )

    email: EmailStr


class EmployeePatch(BaseModel):

    name: str | None = Field(
        default=None,
        min_length=2,
        max_length=50
    )

    age: int | None = Field(
        default=None,
        ge=18,
        le=80
    )

    salary: float | None = Field(
        default=None,
        gt=20000
    )

    email: EmailStr | None = None


class EmployeeResponse(BaseModel):

    id: int
    name: str
    age: int
    salary: float
    email: EmailStr

    model_config = ConfigDict(
        from_attributes=True
    )


class BonusResponse(BaseModel):

    employee_id: int
    salary: float
    bonus_percentage: float
    bonus_amount: float
    total_salary: float