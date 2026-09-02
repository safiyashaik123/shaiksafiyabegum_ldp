
name = "safiya shaik"

print("Original String   :", name)

print("capitalize()      :", name.capitalize())
print("swapcase()        :", name.swapcase())
print("casefold()        :", name.casefold())
print("center()          :", name.center(25, "*"))
print("ljust()           :", name.ljust(20, "-"))
print("rjust()           :", name.rjust(20, "-"))
print("zfill()           :", "25".zfill(5))
print("startswith()      :", name.startswith("saf"))
print("endswith()        :", name.endswith("shaik"))
print("isalpha()         :", "Python".isalpha())
print("isdigit()         :", "12345".isdigit())
print("isalnum()         :", "Python123".isalnum())
print("isspace()         :", "   ".isspace())
print("join()            :", "-".join(["Python", "React", "SQL"]))
print("partition()       :", name.partition(" "))


print("\n========== List Methods ==========\n")

numbers = [40, 10, 30, 20]

print("Original List     :", numbers)

copied_list = numbers.copy()
print("copy()            :", copied_list)

numbers.sort()
print("sort()            :", numbers)

numbers.reverse()
print("reverse()         :", numbers)

result = numbers.clear()
print("clear() Return    :", result)
print("After clear()     :", numbers)



print("\n========== Tuple Methods ==========\n")

marks = (80, 90, 85, 90, 95)

print("Tuple             :", marks)
print("count(90)         :", marks.count(90))
print("index(85)         :", marks.index(85))


print("\n========== Dictionary Methods ==========\n")

employee = {
    "id": 101,
    "name": "Safiya",
    "department": "Engineering"
}

print("Original Dictionary :", employee)

print("\nget()")
print(employee.get("name"))

print("\nsetdefault()")
employee.setdefault("location", "Hyderabad")
print(employee)

print("\ncopy()")
copied_dict = employee.copy()
print(copied_dict)

print("\npop()")
removed_value = employee.pop("department")
print("Removed Value      :", removed_value)
print("Dictionary         :", employee)

print("\npopitem()")
removed_item = employee.popitem()
print("Removed Pair       :", removed_item)
print("Dictionary         :", employee)

print("\nfromkeys()")
keys = ["id", "name", "salary"]
new_dict = dict.fromkeys(keys, "Not Available")
print(new_dict)

print("\nclear()")
employee.clear()
print(employee)


print("\n========== Set Methods ==========\n")

backend = {"Python", "Java", "SQL"}
frontend = {"React", "JavaScript", "Python"}

print("Backend           :", backend)
print("Frontend          :", frontend)

print("\nunion()")
print(backend.union(frontend))

print("\nintersection()")
print(backend.intersection(frontend))

print("\ndifference()")
print(backend.difference(frontend))

print("\nsymmetric_difference()")
print(backend.symmetric_difference(frontend))

print("\nissubset()")
print({"Python"}.issubset(backend))

print("\nissuperset()")
print(backend.issuperset({"Python"}))

print("\ncopy()")
copied_set = backend.copy()
print(copied_set)

print("\nclear()")
backend.clear()
print(backend)