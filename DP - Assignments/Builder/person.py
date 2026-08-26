from dataclasses import dataclass


# ============================================================
# 1. PERSON - CONSTRUCTOR APPROACH
# ============================================================

class ConstructorPerson:

    def __init__(
        self,
        first_name,
        last_name,
        age,
        address,
        city,
        state,
        country,
        phone,
        email,
        occupation
    ):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.address = address
        self.city = city
        self.state = state
        self.country = country
        self.phone = phone
        self.email = email
        self.occupation = occupation


# ============================================================
# 2. PERSON - SETTER APPROACH
# ============================================================

class MutablePerson:

    def __init__(self):
        self.first_name = None
        self.last_name = None
        self.age = None
        self.address = None
        self.city = None
        self.state = None
        self.country = None
        self.phone = None
        self.email = None
        self.occupation = None

    def set_first_name(self, first_name):
        self.first_name = first_name

    def set_last_name(self, last_name):
        self.last_name = last_name

    def set_age(self, age):
        self.age = age

    def set_address(self, address):
        self.address = address

    def set_city(self, city):
        self.city = city

    def set_state(self, state):
        self.state = state

    def set_country(self, country):
        self.country = country

    def set_phone(self, phone):
        self.phone = phone

    def set_email(self, email):
        self.email = email

    def set_occupation(self, occupation):
        self.occupation = occupation


# ============================================================
# 3. PERSON - IMMUTABLE FINAL OBJECT
# ============================================================

@dataclass(frozen=True)
class Person:

    first_name: str
    last_name: str
    age: int
    address: str
    city: str
    state: str
    country: str
    phone: str
    email: str
    occupation: str


# ============================================================
# 4. PERSON BUILDER
# ============================================================

class PersonBuilder:

    def __init__(self):

        self._first_name = None
        self._last_name = None
        self._age = None
        self._address = None
        self._city = None
        self._state = None
        self._country = None
        self._phone = None
        self._email = None
        self._occupation = None

    def first_name(self, value):
        self._first_name = value
        return self

    def last_name(self, value):
        self._last_name = value
        return self

    def age(self, value):
        self._age = value
        return self

    def address(self, value):
        self._address = value
        return self

    def city(self, value):
        self._city = value
        return self

    def state(self, value):
        self._state = value
        return self

    def country(self, value):
        self._country = value
        return self

    def phone(self, value):
        self._phone = value
        return self

    def email(self, value):
        self._email = value
        return self

    def occupation(self, value):
        self._occupation = value
        return self

    def build(self):

        # ----------------------------
        # Required field validation
        # ----------------------------

        if not self._first_name:
            raise ValueError("First name is required.")

        if not self._last_name:
            raise ValueError("Last name is required.")

        if self._age is None:
            raise ValueError("Age is required.")

        # ----------------------------
        # Business validation
        # ----------------------------

        if self._age < 0:
            raise ValueError("Age cannot be negative.")

        if self._age > 120:
            raise ValueError("Age cannot be greater than 120.")

        if self._email and "@" not in self._email:
            raise ValueError("Invalid email address.")

        # ----------------------------
        # Create immutable Person
        # ----------------------------

        return Person(
            first_name=self._first_name,
            last_name=self._last_name,
            age=self._age,
            address=self._address,
            city=self._city,
            state=self._state,
            country=self._country,
            phone=self._phone,
            email=self._email,
            occupation=self._occupation
        )