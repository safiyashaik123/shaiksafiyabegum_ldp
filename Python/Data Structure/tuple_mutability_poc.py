print("========== Tuple Mutability POC ==========\n")


employee = (
    ["Python", "React"],                  
    {"id": 101, "name": "Safiya"},        
    {"SQL", "Java"},                      
    ("HR", "Finance")                     
)

print("Original Tuple:\n", employee)

print("\n========== Modify List ==========")
employee[0].append("Docker")
print(employee)

print("\n========== Modify Dictionary ==========")
employee[1]["department"] = "Engineering"
employee[1]["id"] = 102
print(employee)

print("\n========== Modify Set ==========")
employee[2].add("Python")
employee[2].remove("Java")
print(employee)

print("\n========== Modify Tuple ==========")


    # employee[3][0] = "Testing"


print("\n========== Replace List ==========")


#  employee[0] = ["C++", "Java"]


print("\n========== Final Tuple ==========")
print(employee)

