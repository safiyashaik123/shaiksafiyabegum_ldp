from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey
)
from sqlalchemy.orm import relationship

from app.database.database import Base


class Ward(Base):
    __tablename__ = "wards"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    ward_code = Column(
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

    hospital_id = Column(
        Integer,
        ForeignKey("hospitals.id"),
        nullable=False
    )

    hospital = relationship(
        "Hospital",
        back_populates="wards"
    )