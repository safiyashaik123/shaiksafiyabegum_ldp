from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey
)
from sqlalchemy.orm import relationship

from app.database.database import Base


class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    appointment_number = Column(
        String(50),
        unique=True,
        nullable=False
    )

    appointment_date = Column(
        String(30),
        nullable=False
    )

    reason = Column(
        String(255),
        nullable=False
    )

    status = Column(
        String(30),
        nullable=False,
        default="SCHEDULED"
    )

    doctor_id = Column(
        Integer,
        ForeignKey("doctors.id"),
        nullable=False
    )

    doctor = relationship(
        "Doctor",
        back_populates="appointments"
    )