from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.database.database import Base


class EmployeeProfile(Base):

    __tablename__ = "employee_profiles"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    employee_id = Column(
        Integer,
        ForeignKey("employees.id"),
        unique=True,
        nullable=False
    )

    phone = Column(
        String,
        nullable=True
    )

    address = Column(
        String,
        nullable=True
    )

    employee = relationship(
        "Employee",
        back_populates="profile"
    )