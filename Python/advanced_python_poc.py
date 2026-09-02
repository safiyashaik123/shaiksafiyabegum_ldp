from dataclasses import dataclass, field
from enum import Enum
from collections import defaultdict, Counter, deque, namedtuple, ChainMap
import heapq


# ============================================================
# 1. ENUM
# ============================================================

class Department(Enum):
    ENGINEERING = "Engineering"
    HR = "HR"
    FINANCE = "Finance"


# ============================================================
# 2. DATACLASS
# ============================================================

@dataclass(order=True)
class Employee:

    # Used for sorting employees by salary
    salary: int

    # Other fields don't participate in sorting
    name: str = field(compare=False)
    employee_id: int = field(compare=False)
    department: Department = field(compare=False)

    skills: list[str] = field(
        default_factory=list,
        compare=False
    )

    def __post_init__(self):
        if self.salary <= 0:
            raise ValueError("Salary must be positive")

        self.skills = [
            skill.lower()
            for skill in self.skills
        ]

    @property
    def annual_salary(self):
        return self.salary * 12

    def add_skill(self, skill):
        skill = skill.lower()

        if skill not in self.skills:
            self.skills.append(skill)


# ============================================================
# 3. CREATE EMPLOYEES
# ============================================================

employees = [

    Employee(
        name="Alice",
        employee_id=101,
        salary=70000,
        department=Department.ENGINEERING,
        skills=["Python", "React"]
    ),

    Employee(
        name="Bob",
        employee_id=102,
        salary=50000,
        department=Department.HR,
        skills=["Excel", "Communication"]
    ),

    Employee(
        name="Charlie",
        employee_id=103,
        salary=90000,
        department=Department.ENGINEERING,
        skills=["Python", "Docker"]
    ),

    Employee(
        name="David",
        employee_id=104,
        salary=60000,
        department=Department.FINANCE,
        skills=["Excel", "Python"]
    )
]


# ============================================================
# 4. DEFAULTDICT
# Group employees by department
# ============================================================

employees_by_department = defaultdict(list)

for employee in employees:
    employees_by_department[
        employee.department.value
    ].append(employee)

print("\n--- Employees by Department ---")

for department, employee_list in employees_by_department.items():

    print(department)

    for employee in employee_list:
        print("  ", employee.name)


# ============================================================
# 5. COUNTER
# Count employee skills
# ============================================================

skill_count = Counter()

for employee in employees:
    skill_count.update(employee.skills)

print("\n--- Skill Count ---")

for skill, count in skill_count.items():
    print(skill, "->", count)

print("\n--- Most Common Skills ---")

for skill, count in skill_count.most_common(-1):
    print(skill, "->", count)

# ============================================================
# 6. DEQUE
# Process tasks
# ============================================================

# tasks = deque()

# tasks.append("Generate salary report")
# tasks.append("Update employee records")
# tasks.appendleft("Urgent payroll task")

# print("\n--- Task Processing ---")

# while tasks:

#     task = tasks.popleft()

#     print("Processing:", task)

# print("Max Length")

# recent_activities = deque(maxlen=3)

# recent_activities.append("Alice logged in")
# recent_activities.append("Bob updated profile")
# recent_activities.append("Charlie changed password")

# print(recent_activities)

# recent_activities.append("Alice downloaded report")

# print(recent_activities)

from collections import deque

# ============================================================
# DEQUE - TASK QUEUE
# ============================================================

tasks = deque()

tasks.append(10)
tasks.append(20)
tasks.appendleft(5)

print("\n--- Task Queue ---")
print(tasks)

while tasks:
    task = tasks.popleft()
    print("Processing:", task)


# ============================================================
# DEQUE - FIXED SIZE
# ============================================================

recent_activities = deque(maxlen=3)

recent_activities.append(10)
recent_activities.append(20)
recent_activities.append(30)

print("\n--- Recent Activities ---")
print(recent_activities)

recent_activities.append(40)

print("After adding 40:")
print(recent_activities)

# ============================================================
# 7. NAMEDTUPLE
# Simple employee summary
# ============================================================

EmployeeSummary = namedtuple(
    "EmployeeSummary",
    ["name", "department", "annual_salary"]
)

summary = EmployeeSummary(
    employees[0].name,
    employees[0].department.value,
    employees[0].annual_salary
)

print("\n--- Employee Summary ---")

print("Name:", summary.name)
print("Department:", summary.department)
print("Annual Salary:", summary.annual_salary)


# ============================================================
# 8. CHAINMAP
# Configuration
# ============================================================

default_config = {
    "work_mode": "Hybrid",
    "max_employees": 100
}

company_config = {
    "work_mode": "Remote"
}

config = ChainMap(
    company_config,
    default_config
)

print("\n--- Configuration ---")

print("Work Mode:", config["work_mode"])
print("Max Employees:", config["max_employees"])


# ============================================================
# 9. HEAPQ
# Find highest-paid employees
# ============================================================

# salary_heap = []

# for employee in employees:

#     heapq.heappush(
#         salary_heap,
#         (-employee.salary, employee.name)
#     )

# print("\n--- Highest Paid Employees ---")

# for _ in range(2):

#     salary, name = heapq.heappop(salary_heap)

#     print(name, "->", -salary)
    
from operator import attrgetter    
    
import heapq

print("\n--- Employee Salaries (Original Order) ---")

for employee in employees:
    print(employee.name, "->", employee.salary)

print("\n--- Highest Paid Employees ---")

highest_paid = heapq.nlargest(
    3,
    employees,
    key=lambda employee: employee.salary
    # key=attrgetter("salary")
)

for employee in highest_paid:
    print(employee.name, "->", employee.salary)


# ============================================================
# 10. PROPERTY + METHOD
# ============================================================

employee = employees[0]

print("\n--- Employee Details ---")

print("Name:", employee.name)

print(
    "Annual Salary:",
    employee.annual_salary
)

employee.add_skill("SQL")

print(
    "Skills after adding SQL:",
    employee.skills
)


# ============================================================
# 11. DATACLASS SORTING
# ============================================================

print("\n--- Employees Sorted by Salary ---")

sorted_employees = sorted(employees)

for employee in sorted_employees:

    print(
        employee.name,
        "->",
        employee.salary
    )


# ============================================================
# 12. FROZEN DATACLASS
# ============================================================

@dataclass(frozen=True)
class CompanyPolicy:

    max_leave_days: int
    retirement_age: int


policy = CompanyPolicy(
    max_leave_days=30,
    retirement_age=60
)

print("\n--- Company Policy ---")

print(policy)

try:

    policy.max_leave_days = 40

except Exception as error:

    print(
        "Cannot modify policy:",
        type(error).__name__
    )