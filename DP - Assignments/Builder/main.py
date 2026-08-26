from person import (
    ConstructorPerson,
    MutablePerson,
    PersonBuilder,
)

from payslip import PayslipBuilder


# ============================================================
# 1. CONSTRUCTOR APPROACH
# ============================================================

def demonstrate_constructor():

    print("\n" + "=" * 60)
    print("1. CONSTRUCTOR APPROACH")
    print("=" * 60)

    person = ConstructorPerson(
        "John",
        "Doe",
        25,
        "Street 1",
        "Hyderabad",
        "Telangana",
        "India",
        "9999999999",
        "john@example.com",
        "Software Engineer"
    )

    print("First Name:", person.first_name)
    print("Last Name:", person.last_name)
    print("Age:", person.age)
    print("Occupation:", person.occupation)


# ============================================================
# 2. SETTER APPROACH
# ============================================================

def demonstrate_setters():

    print("\n" + "=" * 60)
    print("2. SETTER APPROACH - MUTABLE PERSON")
    print("=" * 60)

    person = MutablePerson()

    person.set_first_name("John")
    person.set_last_name("Doe")
    person.set_age(25)
    person.set_address("Street 1")
    person.set_city("Hyderabad")
    person.set_state("Telangana")
    person.set_country("India")
    person.set_phone("9999999999")
    person.set_email("john@example.com")
    person.set_occupation("Software Engineer")

    print("Before modification:")
    print("Age:", person.age)

    # Demonstrating mutability
    person.set_age(30)

    print("After modification:")
    print("Age:", person.age)

    print("Person is mutable because setters can change its state.")


# ============================================================
# 3. BUILDER APPROACH
# ============================================================

def demonstrate_builder():

    print("\n" + "=" * 60)
    print("3. BUILDER APPROACH")
    print("=" * 60)

    person = (
        PersonBuilder()
        .first_name("John")
        .last_name("Doe")
        .age(25)
        .address("Street 1")
        .city("Hyderabad")
        .state("Telangana")
        .country("India")
        .phone("9999999999")
        .email("john@example.com")
        .occupation("Software Engineer")
        .build()
    )

    print("Person created successfully.")

    print("First Name:", person.first_name)
    print("Last Name:", person.last_name)
    print("Age:", person.age)
    print("City:", person.city)
    print("Occupation:", person.occupation)


# ============================================================
# 4. IMMUTABILITY DEMONSTRATION
# ============================================================

def demonstrate_immutability():

    print("\n" + "=" * 60)
    print("4. IMMUTABLE PERSON")
    print("=" * 60)

    person = (
        PersonBuilder()
        .first_name("John")
        .last_name("Doe")
        .age(25)
        .address("Street 1")
        .city("Hyderabad")
        .state("Telangana")
        .country("India")
        .phone("9999999999")
        .email("john@example.com")
        .occupation("Software Engineer")
        .build()
    )

    print("Original age:", person.age)

    try:
        person.age = 30

    except Exception as error:
        print("Modification failed.")
        print("Reason:", error)

    print("Final age:", person.age)


# ============================================================
# 5. BUILDER VALIDATION
# ============================================================

def demonstrate_validation():

    print("\n" + "=" * 60)
    print("5. BUILDER VALIDATION")
    print("=" * 60)

    try:

        person = (
            PersonBuilder()
            .first_name("John")
            .last_name("Doe")
            .age(-10)
            .email("invalid-email")
            .build()
        )

    except ValueError as error:

        print("Person creation failed.")
        print("Reason:", error)


# ============================================================
# 6. PAYSLIP BUILDER
# ============================================================

def demonstrate_payslip():

    print("\n" + "=" * 60)
    print("6. PAYSLIP BUILDER")
    print("=" * 60)

    payslip = (
        PayslipBuilder()
        .basic(50000)
        .hra(15000)
        .da(5000)
        .ta(3000)
        .bonus(5000)
        .pf(5000)
        .tax(7000)
        .insurance(2000)
        .build()
    )

    print("Basic Salary:", payslip.basic)
    print("HRA:", payslip.hra)
    print("DA:", payslip.da)
    print("TA:", payslip.ta)
    print("Bonus:", payslip.bonus)

    print("\nGross Salary:", payslip.gross_salary)

    print("\nPF:", payslip.pf)
    print("Tax:", payslip.tax)
    print("Insurance:", payslip.insurance)

    print("\nTotal Deductions:", payslip.total_deductions)

    print("\nNet Salary:", payslip.net_salary)


# ============================================================
# MAIN
# ============================================================

def main():

    demonstrate_constructor()

    demonstrate_setters()

    demonstrate_builder()

    demonstrate_immutability()

    demonstrate_validation()

    demonstrate_payslip()


if __name__ == "__main__":
    main()