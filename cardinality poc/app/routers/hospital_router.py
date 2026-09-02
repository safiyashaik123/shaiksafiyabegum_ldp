from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.hospital_schema import (
    HospitalCreate,
    HospitalResponse
)

from app.schemas.ward_schema import (
    WardCreate,
    WardResponse
)

from app.services.hospital_service import (
    create_hospital,
    get_all_hospitals,
    get_hospital,
    create_ward,
    get_hospital_wards,
    delete_hospital,
    delete_ward,
    get_all_wards
)


router = APIRouter(
    prefix="/hospitals",
    tags=["Hospitals"]
)


@router.post(
    "",
    response_model=HospitalResponse
)
def create(
    data: HospitalCreate,
    db: Session = Depends(get_db)
):
    return create_hospital(db, data)


@router.get(
    "",
    response_model=list[HospitalResponse]
)
def get_all(
    db: Session = Depends(get_db)
):
    return get_all_hospitals(db)

@router.get(
    "/wards",
    response_model=list[WardResponse]
)
def get_all_wards_records(
    db: Session = Depends(get_db)
):
    return get_all_wards(db)


@router.get(
    "/{hospital_id}",
    response_model=HospitalResponse
)
def get_one(
    hospital_id: int,
    db: Session = Depends(get_db)
):
    return get_hospital(
        db,
        hospital_id
    )


@router.post(
    "/wards",
    response_model=WardResponse
)
def create_ward_record(
    data: WardCreate,
    db: Session = Depends(get_db)
):
    return create_ward(
        db,
        data
    )

@router.get(
    "/{hospital_id}/wards",
    response_model=list[WardResponse]
)
def get_wards(
    hospital_id: int,
    db: Session = Depends(get_db)
):
    return get_hospital_wards(
        db,
        hospital_id
    )




@router.delete("/wards/{ward_id}")
def delete_ward_record(
    ward_id: int,
    db: Session = Depends(get_db)
):
    return delete_ward(
        db,
        ward_id
    )

@router.delete("/{hospital_id}")
def delete(
    hospital_id: int,
    db: Session = Depends(get_db)
):
    return delete_hospital(
        db,
        hospital_id
    )
    
