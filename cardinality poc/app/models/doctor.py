from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database.database import Base


class Doctor(Base):
    __tablename__ = "doctors"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    doctor_code = Column(
        String(50),
        unique=True,
        nullable=False
    )

    name = Column(
        String(100),
        nullable=False
    )

    specialization = Column(
        String(100),
        nullable=False
    )

    license_number = Column(
        String(100),
        unique=True,
        nullable=False
    )

    # M:1
    # Many Appointments → One Doctor
    appointments = relationship(
    "Appointment",
    back_populates="doctor",
    cascade="all, delete-orphan"
    )
    # M : M
    patients = relationship(
        "Patient",
        secondary="doctor_patient",
        back_populates="doctors"
    )