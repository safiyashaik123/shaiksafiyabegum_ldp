from app.database.database import Base, engine

from app.models.patient import Patient
from app.models.national_health_id import NationalHealthID
from app.models.hospital import Hospital
from app.models.ward import Ward
from app.models.doctor import Doctor
from app.models.appointment import Appointment
from app.models.doctor_patient import DoctorPatient


def init_db():
    Base.metadata.create_all(bind=engine)