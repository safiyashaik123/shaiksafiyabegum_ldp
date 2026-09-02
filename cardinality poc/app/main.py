from fastapi import FastAPI

from app.database.init_db import init_db

from app.routers.patient_router import router as patient_router
from app.routers.hospital_router import router as hospital_router
from app.routers.doctor_router import router as doctor_router
from app.routers.appointment_router import router as appointment_router


init_db()


app = FastAPI(
    title="Hospital Cardinality POC",
    version="1.0.0"
)


app.include_router(patient_router)
app.include_router(hospital_router)
app.include_router(doctor_router)
app.include_router(appointment_router)


@app.get("/")
def root():
    return {
        "message": "Hospital Cardinality POC is running"
    }