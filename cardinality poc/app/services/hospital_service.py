from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.hospital import Hospital
from app.models.ward import Ward

from app.schemas.hospital_schema import HospitalCreate
from app.schemas.ward_schema import WardCreate


def create_hospital(
    db: Session,
    data: HospitalCreate
):
    existing = (
        db.query(Hospital)
        .filter(
            Hospital.hospital_code == data.hospital_code
        )
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=409,
            detail="Hospital with this hospital code already exists"
        )

    hospital = Hospital(
        **data.model_dump()
    )

    db.add(hospital)
    db.commit()
    db.refresh(hospital)

    return hospital


def get_all_hospitals(db: Session):
    return db.query(Hospital).all()


def get_all_wards(db: Session):
    return db.query(Ward).all()

def get_hospital(
    db: Session,
    hospital_id: int
):
    hospital = db.get(
        Hospital,
        hospital_id
    )

    if not hospital:
        raise HTTPException(
            status_code=404,
            detail="Hospital not found"
        )

    return hospital


def create_ward(
    db: Session,
    data: WardCreate
):
    hospital = db.get(
        Hospital,
        data.hospital_id
    )

    if not hospital:
        raise HTTPException(
            status_code=404,
            detail="Hospital not found"
        )

    existing = (
        db.query(Ward)
        .filter(
            Ward.ward_code == data.ward_code
        )
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=409,
            detail="Ward with this ward code already exists"
        )

    ward = Ward(
        **data.model_dump()
    )

    db.add(ward)
    db.commit()
    db.refresh(ward)

    return ward


def get_hospital_wards(
    db: Session,
    hospital_id: int
):
    get_hospital(
        db,
        hospital_id
    )

    return (
        db.query(Ward)
        .filter(
            Ward.hospital_id
            == hospital_id
        )
        .all()
    )


def delete_hospital(
    db: Session,
    hospital_id: int
):
    hospital = get_hospital(
        db,
        hospital_id
    )

    ward_count = (
        db.query(Ward)
        .filter(
            Ward.hospital_id
            == hospital_id
        )
        .count()
    )

    if ward_count == 0:
        db.delete(hospital)
        db.commit()

        return {
            "message": "Hospital deleted"
        }

    # Demonstrate cascade:
    # Hospital → Wards
    db.delete(hospital)
    db.commit()

    return {
        "message": (
            "Hospital deleted. "
            f"{ward_count} associated ward(s) "
            "were also deleted."
        )
    }
    
    
def delete_ward(
    db: Session,
    ward_id: int
):
    ward = db.get(
        Ward,
        ward_id
    )

    if not ward:
        raise HTTPException(
            status_code=404,
            detail="Ward not found"
        )

    hospital_id = ward.hospital_id

    db.delete(ward)
    db.commit()

    return {
        "message": "Ward deleted successfully",
        "ward_id": ward_id,
        "hospital_id": hospital_id,
        "hospital_preserved": True
    }