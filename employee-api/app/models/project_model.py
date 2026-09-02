from sqlalchemy import Column, Integer, String, Table, ForeignKey
from sqlalchemy.orm import relationship

from app.database.database import Base


# ==================================================
# ASSOCIATION / JUNCTION TABLE
# ==================================================

employee_projects = Table(
    "employee_projects",
    Base.metadata,

    Column(
        "employee_id",
        Integer,
        ForeignKey("employees.id"),
        primary_key=True
    ),

    Column(
        "project_id",
        Integer,
        ForeignKey("projects.id"),
        primary_key=True
    )
)


# ==================================================
# PROJECT MODEL
# ==================================================

class Project(Base):

    __tablename__ = "projects"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String,
        nullable=False,
        unique=True
    )

    employees = relationship(
        "Employee",
        secondary=employee_projects,
        back_populates="projects"
    )