from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.patient_schema import (
    PatientCreate,
    PatientResponse
)

from app.schemas.national_health_id_schema import (
    NationalHealthIDCreate,
    NationalHealthIDResponse
)

from app.services.patient_service import (
    create_patient,
    get_all_patients,
    get_patient,
    create_health_id,
    get_health_id,
    get_all_health_ids,
    delete_patient,
    delete_health_id,
    delete_all_patients
)


router = APIRouter(
    prefix="/patients",
    tags=["Patients"]
)


# --------------------------------------------------
# PATIENT
# --------------------------------------------------

@router.post(
    "",
    response_model=PatientResponse
)
def create(
    data: PatientCreate,
    db: Session = Depends(get_db)
):
    return create_patient(
        db,
        data
    )


@router.get(
    "",
    response_model=list[PatientResponse]
)
def get_all(
    db: Session = Depends(get_db)
):
    return get_all_patients(db)


# --------------------------------------------------
# NATIONAL HEALTH ID
# --------------------------------------------------

# IMPORTANT:
# Static /health-id route must come
# BEFORE /{patient_id}

@router.get(
    "/health-id",
    response_model=list[NationalHealthIDResponse]
)
def get_all_health_id_records(
    db: Session = Depends(get_db)
):
    return get_all_health_ids(db)


@router.post(
    "/health-id",
    response_model=NationalHealthIDResponse
)
def create_health_id_record(
    data: NationalHealthIDCreate,
    db: Session = Depends(get_db)
):
    return create_health_id(
        db,
        data
    )


@router.delete(
    "/health-id/{health_id_id}"
)
def delete_health_id_record(
    health_id_id: int,
    db: Session = Depends(get_db)
):
    return delete_health_id(
        db,
        health_id_id
    )

@router.delete("/all")
def delete_all(
    db: Session = Depends(get_db)
):
    return delete_all_patients(db)



# --------------------------------------------------
# PATIENT + NATIONAL HEALTH ID
# --------------------------------------------------

@router.get(
    "/{patient_id}/health-id",
    response_model=NationalHealthIDResponse
)
def get_patient_health_id(
    patient_id: int,
    db: Session = Depends(get_db)
):
    return get_health_id(
        db,
        patient_id
    )


# --------------------------------------------------
# SINGLE PATIENT
# --------------------------------------------------

@router.get(
    "/{patient_id}",
    response_model=PatientResponse
)
def get_one(
    patient_id: int,
    db: Session = Depends(get_db)
):
    return get_patient(
        db,
        patient_id
    )


@router.delete(
    "/{patient_id}"
)
def delete(
    patient_id: int,
    db: Session = Depends(get_db)
):
    return delete_patient(
        db,
        patient_id
    )
    
    
