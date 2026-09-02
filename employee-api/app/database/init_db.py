# from app.database.database import Base, engine
# from app.models.employee_model import Employee


# Base.metadata.create_all(
#     bind=engine
# )

from app.database.database import Base, engine

from app.models.employee_model import Employee
from app.models.employee_profile_model import EmployeeProfile
from app.models.department_model import Department
from app.models.project_model import Project


Base.metadata.create_all(
    bind=engine
)