from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database.database import Base


class Hospital(Base):
    __tablename__ = "hospitals"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    hospital_code = Column(
        String(50),
        unique=True,
        nullable=False
    )

    name = Column(
        String(100),
        nullable=False
    )

    location = Column(
        String(150),
        nullable=False
    )

    # 1 : M
    wards = relationship(
        "Ward",
        back_populates="hospital",
        cascade="all, delete-orphan"
    )