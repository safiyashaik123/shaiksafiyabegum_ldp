print("========== Employee Profile ==========\n")

# Dictionary
employee = {
    "id": 101,
    "name": "Safiya",
    "department": "Engineering"
}

print("Employee Details :", employee)

# Access
print("\nEmployee Name :", employee["name"])

# Add
employee["salary"] = 50000

# Update
employee.update({"department": "AI Team"})

print("\nUpdated Employee :", employee)

# Dictionary Methods
print("\nKeys   :", employee.keys())
print("Values :", employee.values())
print("Items  :", employee.items())
print("Salary :", employee.get("salary"))

# Remove
employee.pop("id")

print("\nAfter Removing ID :", employee)

print("Total Fields :", len(employee))

print("\n========== Employee Skills ==========\n")

# Set
skill = {"Python", "React", "SQL", "Python"}

print("Skills :", skill)

skill.add("Java")
skill.update(["Docker", "AWS"])

print("After Adding :", skill)

skill.remove("React")
skill.discard("Angular")

removed_skill = skill.pop()

print("Removed Skill :", removed_skill)
print("Current Skills:", skill)

print("Contains SQL  :", "SQL" in skill)

backend = {"Python", "SQL", "MongoDB"}

print("\nUnion        :", skill.union(backend))
print("Intersection :", skill.intersection(backend))
print("Difference   :", skill.difference(backend))

print("Total Skills :", len(skill))



