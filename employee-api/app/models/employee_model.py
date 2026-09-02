from sqlalchemy import Column, Integer, String, Float,ForeignKey
from sqlalchemy.orm import relationship

from app.database.database import Base


class Employee(Base):

    __tablename__ = "employees"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String,
        nullable=False
    )

    age = Column(
        Integer,
        nullable=False
    )

    salary = Column(
        Float,
        nullable=False
    )

    email = Column(
        String,
        unique=True,
        nullable=False
    )

    phone = Column(
    String,
    nullable=True
    )
    
    location = Column(
    String,
    nullable=False
    )
    
    profile = relationship(
        "EmployeeProfile",
        back_populates="employee",
        uselist=False,
        # cascade="all, delete-orphan"
    )
    
    department_id = Column(
    Integer,
    ForeignKey("departments.id"),
    nullable=True
    )

    department = relationship(
    "Department",
    back_populates="employees"
    )
    
    projects = relationship(
    "Project",
    secondary="employee_projects",
    back_populates="employees"
    )
    