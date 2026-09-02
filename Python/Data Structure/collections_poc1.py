print("========== Employee Collections ==========\n")

# List 
skills = ["Python", "React", "SQL"]

print("Original Skills :", skills)

# Add Elements
skills.append("Java")
skills.extend(["Docker", "AWS"])
skills.insert(1, "TypeScript")

print("After Adding    :", skills)

# Remove Elements
skills.remove("React")
removed_skill = skills.pop()

print("Removed Skill   :", removed_skill)
print("Current Skills  :", skills)

# Accessing Elements
print("First Skill     :", skills[0])
print("Last Skill      :", skills[-1])
print("Top 3 Skills    :", skills[:3])

# Searching
print("Contains SQL    :", "SQL" in skills)

# Sorting
skills.sort()
print("Sorted Skills   :", skills)

# Reverse
skills.reverse()
print("Reverse Skills  :", skills)

print("Total Skills    :", len(skills))


print("\n========== Employee Departments ==========\n")


# Tuple (Immutable)
departments = (
    "Engineering",
    "HR",
    "Finance",
    "HR",
    "Testing"
)

print("Departments      :", departments)

# Accessing Elements
print("First Department :", departments[0])
print("Last Department  :", departments[-1])
print("First 3          :", departments[:3])

# Membership
print("Contains HR      :", "HR" in departments)

# Tuple Methods
print("Finance Index    :", departments.index("Finance"))
print("HR Count         :", departments.count("HR"))

# Length
print("Department Count :", len(departments))

