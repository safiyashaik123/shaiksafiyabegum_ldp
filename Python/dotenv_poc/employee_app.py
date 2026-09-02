import config


def connect_database():

    db_config = config.get_database_configuration()

    print("Connecting to database...")

    print("Host:", db_config["host"])
    print("Port:", db_config["port"])
    print("User:", db_config["user"])

    # Never expose sensitive information
    print("Password: ********")
    # print(db_config["password"])
    print("Database connection configured.")


def create_employee(employee_count):

    print("Current employees:", employee_count)
    print("Maximum employees:", config.MAX_EMPLOYEES)

    if employee_count >= config.MAX_EMPLOYEES:

        print("Employee limit reached.")

        return False

    print("Employee can be created.")

    return True


def show_environment_details():

    print("Application:", config.APP_NAME)
    print("Environment:", config.APP_ENV)
    print("Debug:", config.DEBUG)

    if config.is_production():

        print("Running in production mode.")

    else:

        print("Running in development mode.")


def main():

    # Validate configuration before starting application
    config.validate_configuration()

    print("===== APPLICATION CONFIGURATION =====")

    show_environment_details()

    print()

    print("===== DATABASE =====")

    connect_database()

    print()

    print("===== EMPLOYEE MANAGEMENT =====")

    create_employee(50)


if __name__ == "__main__":

    main()