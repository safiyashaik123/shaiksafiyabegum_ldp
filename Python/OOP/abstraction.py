from abc import ABC, abstractmethod

class Employee(ABC):

    company = "Zemoso Technologies"

    def __init__(self, employee_id, name, base_salary):

        self.employee_id = employee_id
        self.name = name
        self.base_salary = base_salary

        print("Employee Constructor Executed")


    @abstractmethod
    def work(self):
        pass


    @abstractmethod
    def calculate_salary(self):
        pass


    def display(self):

        print("\nEmployee Details")
        print("----------------")
        print("ID           :", self.employee_id)
        print("Name         :", self.name)
        print("Company      :", Employee.company)
        print("Base Salary  :", self.base_salary)


    def login(self):

        print(self.name, "logged into Employee Portal.")


# =====================================================
# Developer
# =====================================================

class Developer(Employee):

    def __init__(self, employee_id, name, base_salary, project_bonus):

        super().__init__(employee_id, name, base_salary)

        self.project_bonus = project_bonus

        print("Developer Constructor Executed")


    def work(self):

        print(self.name, "is developing applications.")


    def calculate_salary(self):

        total_salary = self.base_salary + self.project_bonus

        print("\nDeveloper Salary Calculation")
        print("----------------------------")
        print("Base Salary   :", self.base_salary)
        print("Project Bonus :", self.project_bonus)
        print("Total Salary  :", total_salary)


# =====================================================
# HR
# =====================================================

class HR(Employee):

    def __init__(self, employee_id, name, base_salary, recruitment_bonus):

        super().__init__(employee_id, name, base_salary)

        self.recruitment_bonus = recruitment_bonus

        print("HR Constructor Executed")


    def work(self):

        print(self.name, "is recruiting candidates.")


    def calculate_salary(self):

        total_salary = self.base_salary + self.recruitment_bonus

        print("\nHR Salary Calculation")
        print("---------------------")
        print("Base Salary         :", self.base_salary)
        print("Recruitment Bonus   :", self.recruitment_bonus)
        print("Total Salary        :", total_salary)


# =====================================================
# Trainer
# =====================================================

class Trainer(Employee):

    def __init__(self, employee_id, name, base_salary, training_bonus):

        super().__init__(employee_id, name, base_salary)

        self.training_bonus = training_bonus

        print("Trainer Constructor Executed")


    def work(self):

        print(self.name, "is conducting React training.")


    def calculate_salary(self):

        total_salary = self.base_salary + self.training_bonus

        print("\nTrainer Salary Calculation")
        print("--------------------------")
        print("Base Salary      :", self.base_salary)
        print("Training Bonus   :", self.training_bonus)
        print("Total Salary     :", total_salary)



print("\n========== Developer ==========\n")

developer = Developer(
    101,
    "Safiya",
    50000,
    10000
)

developer.display()

developer.login()

developer.work()

developer.calculate_salary()



print("\n========== HR ==========\n")

hr = HR(
    102,
    "Rahul",
    45000,
    5000
)

hr.display()

hr.login()

hr.work()

hr.calculate_salary()


print("\n========== Trainer ==========\n")

trainer = Trainer(
    103,
    "Priya",
    55000,
    8000
)

trainer.display()

trainer.login()

trainer.work()

trainer.calculate_salary()



print("\n========== Runtime Polymorphism ==========\n")

employees = [
    developer,
    hr,
    trainer
]

for employee in employees:

    employee.work()

    employee.calculate_salary()

    print()


print("\n========== Abstract Class ==========\n")

# employee = Employee(100, "Amit", 40000)
