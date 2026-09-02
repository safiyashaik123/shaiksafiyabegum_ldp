from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database.database import Base


class Patient(Base):
    __tablename__ = "patients"

    id= Column(
        Integer,
        primary_key=True,
        index=True
    )

    patient_number = Column(
        String(50),
        unique=True,
        nullable=False
    )

    name = Column(
        String(100),
        nullable=False
    )

    date_of_birth = Column(
        String(20),
        nullable=False
    )

    phone = Column(
        String(20),
        nullable=False
    )

    # 1 : 1
    health_id = relationship(
        "NationalHealthID",
        back_populates="patient",
        uselist=False,
        cascade="all, delete-orphan"
    )

    # M : M
    doctors = relationship(
        "Doctor",
        secondary="doctor_patient",
        back_populates="patients"
    )