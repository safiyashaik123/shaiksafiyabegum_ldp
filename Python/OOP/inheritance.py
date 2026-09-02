
class Employee:

    company = "Zemoso Technologies"

    def __init__(self, employee_id, name):

        self.employee_id = employee_id
        self.name = name

        print("Employee Constructor Executed")

    def display(self):

        print("\nEmployee Details")
        print("----------------")
        print("ID       :", self.employee_id)
        print("Name     :", self.name)
        print("Company  :", Employee.company)

    def work(self):

        print(self.name, "is working.")


# =====================================================
# Single Inheritance
# Employee -> Developer
# =====================================================

class Developer(Employee):

    def __init__(self, employee_id, name, language):

        super().__init__(employee_id, name)

        self.language = language

        print("Developer Constructor Executed")

    def display(self):

        super().display()

        print("Language :", self.language)

    def work(self):

        print(self.name, "is developing applications.")


# =====================================================
# Multilevel Inheritance
# Employee -> Developer -> SeniorDeveloper
# =====================================================

class SeniorDeveloper(Developer):

    def __init__(self, employee_id, name, language, experience):

        super().__init__(employee_id, name, language)

        self.experience = experience

        print("Senior Developer Constructor Executed")

    def display(self):

        super().display()

        print("Experience :", self.experience, "Years")

    def review_code(self):

        print(self.name, "is reviewing code.")


# =====================================================
# Hierarchical Inheritance
# Employee -> HR
# Employee -> Tester
# =====================================================

class HR(Employee):

    def __init__(self, employee_id, name):

        super().__init__(employee_id, name)

        print("HR Constructor Executed")

    def recruit(self):

        print(self.name, "is recruiting candidates.")


class Tester(Employee):

    def __init__(self, employee_id, name):

        super().__init__(employee_id, name)

        print("Tester Constructor Executed")

    def test_application(self):

        print(self.name, "is testing the application.")


# =====================================================
# Multiple Inheritance
# Coder + Trainer -> TechnicalLead
# =====================================================

class Coder:

    def write_code(self):

        print("Writing Python Code")


class Trainer:

    def conduct_training(self):

        print("Conducting React Training")


class TechnicalLead(Coder, Trainer):

    def lead_team(self):

        print("Leading Development Team")


# =====================================================
# Hybrid Inheritance
#
# Employee
#      |
#  Developer
#      |
#  TeamLead
#      ▲
#      |
# Management
#
# Combination:
# Single + Multiple
# =====================================================

class Management:

    def manage_team(self):

        print("Managing Team")


class TeamLead(Developer, Management):

    def __init__(self, employee_id, name, language, team_size):

        Developer.__init__(self, employee_id, name, language)

        self.team_size = team_size

        print("Team Lead Constructor Executed")

    def display(self):

        super().display()

        print("Team Size :", self.team_size)


# =====================================================
# Single Inheritance Demo
# =====================================================

print("\n========== Single Inheritance ==========\n")

developer = Developer(
    101,
    "Safiya",
    "Python"
)

developer.display()
developer.work()


# =====================================================
# Multilevel Inheritance Demo
# =====================================================

print("\n========== Multilevel Inheritance ==========\n")

senior = SeniorDeveloper(
    102,
    "Rahul",
    "Java",
    6
)

senior.display()
senior.review_code()


# =====================================================
# Hierarchical Inheritance Demo
# =====================================================

print("\n========== Hierarchical Inheritance ==========\n")

hr = HR(
    103,
    "Priya"
)

tester = Tester(
    104,
    "Amit"
)

hr.display()
hr.recruit()

print()

tester.display()
tester.test_application()


# =====================================================
# Multiple Inheritance Demo
# =====================================================

print("\n========== Multiple Inheritance ==========\n")

lead = TechnicalLead()

lead.write_code()
lead.conduct_training()
lead.lead_team()


# =====================================================
# Hybrid Inheritance Demo
# =====================================================

print("\n========== Hybrid Inheritance ==========\n")

team_lead = TeamLead(
    105,
    "Kiran",
    "Python",
    8
)

team_lead.display()
team_lead.work()
team_lead.manage_team()


# =====================================================
# MRO
# =====================================================

print("\n========== Method Resolution Order ==========\n")

for cls in TeamLead.mro():
    print(cls.__name__)