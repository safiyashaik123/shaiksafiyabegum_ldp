
class Employee:

    def __init__(self, name, salary):

        self.name = name
        self.salary = salary


    def work(self):

        print(self.name, "is working.")


class Developer(Employee):

    def work(self):

        print(self.name, "is developing applications.")


class HR(Employee):

    def work(self):

        print(self.name, "is recruiting candidates.")


class Trainer(Employee):

    def work(self):

        print(self.name, "is conducting training sessions.")


print("========== Method Overriding ==========\n")

developer = Developer("Safiya", 50000)

hr = HR("Rahul", 45000)

trainer = Trainer("Priya", 55000)

developer.work()

hr.work()

trainer.work()



print("\n========== Duck Typing ==========\n")


class Intern:

    def work(self):

        print("Intern is learning new technologies.")


def perform_work(employee):

    employee.work()


perform_work(developer)

perform_work(hr)

perform_work(trainer)

perform_work(Intern())



print("\n========== Operator Overloading ==========\n")


# class Salary:

#     def __init__(self, amount):

#         self.amount = amount


#     def __add__(self, other):

#         return self.amount + other.amount


#     def __eq__(self, other):

#         return self.amount == other.amount


#     def __str__(self):

#         return f"Salary : {self.amount}"


# salary1 = Salary(50000)

# salary2 = Salary(45000)

# salary3 = Salary(50000)

# print("Total Salary :", salary1 + salary2)

# print("Salary1 == Salary2 :", salary1 == salary2)

# print("Salary1 == Salary3 :", salary1 == salary3)

# print(salary1)

class Salary:

    def __init__(self, amount):
        self.amount = amount

    def __str__(self):
        return f"Salary : ₹{self.amount}"

    def __repr__(self):
        return f"Salary(amount={self.amount})"

    def __add__(self, other):

        if not isinstance(other, Salary):
            return NotImplemented

        return Salary(self.amount + other.amount)

    def __eq__(self, other):

        if not isinstance(other, Salary):
            return NotImplemented

        return self.amount == other.amount

    def __lt__(self, other):

        if not isinstance(other, Salary):
            return NotImplemented

        return self.amount < other.amount

    def __len__(self):
        return len(str(self.amount))

    def __bool__(self):
        return self.amount > 0


salary1 = Salary(50000)
salary2 = Salary(45000)
salary3 = Salary(50000)

print("========== __str__ ==========")
print(salary1)

print("\n========== __repr__ ==========")
print(repr(salary1))

print("\n========== __add__ ==========")
print(salary1 + salary2)

print("\n========== __eq__ ==========")
print("Salary1 == Salary2 :", salary1 == salary2)
print("Salary1 == Salary3 :", salary1 == salary3)

print("\n========== __lt__ ==========")
print("Salary2 < Salary1 :", salary2 < salary1)

print("\n========== __len__ ==========")
print("Digits in Salary1 :", len(salary1))

print("\n========== __bool__ ==========")
print("Salary1 :", bool(salary1))



print("\n========== Method Overloading ==========\n")


class EmployeeReport:


    # Default Argument
    def yearly_bonus(self, salary, percentage=10):

        bonus = salary * percentage / 100

        print("Bonus :", bonus)


    # *args
    def total_salary(self, *salaries):

        print("Total Salary :", sum(salaries))


    # **kwargs
    def employee_details(self, **details):

        print("\nEmployee Details")

        for key, value in details.items():

            print(key, ":", value)


report = EmployeeReport()

print("Default Argument")

report.yearly_bonus(50000)

report.yearly_bonus(50000, 15)


print("\n*args")

report.total_salary(50000, 45000)

report.total_salary(50000, 45000, 60000, 70000)


print("\n**kwargs")

report.employee_details(

    id=101,

    name="Safiya",

    department="Engineering",

    salary=50000
)