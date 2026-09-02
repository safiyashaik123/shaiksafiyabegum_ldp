import os

from dotenv import load_dotenv


# Load variables from .env
load_dotenv()


# --------------------------------------------------
# Application Configuration
# --------------------------------------------------

APP_NAME = os.getenv(
    "APP_NAME",
    "Employee Management"
)

APP_ENV = os.getenv(
    "APP_ENV",
    "development"
)


# --------------------------------------------------
# Database Configuration
# --------------------------------------------------

DB_HOST = os.getenv("DB_HOST")

DB_PORT = int(
    os.getenv("DB_PORT", "5432")
)

DB_USER = os.getenv("DB_USER")

DB_PASSWORD = os.getenv("DB_PASSWORD")


# --------------------------------------------------
# API Configuration
# --------------------------------------------------

API_KEY = os.getenv("API_KEY")


# --------------------------------------------------
# Application Limits
# --------------------------------------------------

MAX_EMPLOYEES = int(
    os.getenv("MAX_EMPLOYEES", "100")
)


# --------------------------------------------------
# Debug Configuration
# --------------------------------------------------

DEBUG = os.getenv(
    "DEBUG",
    "False"
).lower() == "true"


def validate_configuration():

    required_values = {
        "DB_HOST": DB_HOST,
        "DB_USER": DB_USER,
        "DB_PASSWORD": DB_PASSWORD,
        "API_KEY": API_KEY
    }

    missing_values = [
        name
        for name, value in required_values.items()
        if not value
    ]

    if missing_values:

        raise ValueError(
            "Missing configuration: "
            + ", ".join(missing_values)
        )


def get_database_configuration():

    return {
        "host": DB_HOST,
        "port": DB_PORT,
        "user": DB_USER,
        "password": DB_PASSWORD
    }


def is_production():

    return APP_ENV.lower() == "production"