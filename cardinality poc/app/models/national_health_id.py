from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey
)
from sqlalchemy.orm import relationship

from app.database.database import Base


class NationalHealthID(Base):
    __tablename__ = "national_health_ids"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    health_id = Column(
        String(50),
        unique=True,
        nullable=False
    )

    patient_id = Column(
        Integer,
        ForeignKey("patients.id"),
        unique=True,
        nullable=False
    )

    issued_date = Column(
        String(20),
        nullable=False
    )

    status = Column(
        String(20),
        nullable=False,
        default="ACTIVE"
    )

    patient = relationship(
        "Patient",
        back_populates="health_id"
    )