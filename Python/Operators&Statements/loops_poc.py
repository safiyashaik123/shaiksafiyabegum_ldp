

skills = ["Python", "React", "SQL", "Java", "Docker"]


print("========== For Loop ==========\n")

for skill in skills:
    print(skill)


print("\n========== Range Function ==========\n")

print("range(stop)")
for number in range(5):
    print(number, end=" ")

print("\n")

print("range(start, stop)")
for number in range(1, 6):
    print(number, end=" ")

print("\n")

print("range(start, stop, step)")
for number in range(2, 11, 2):
    print(number, end=" ")


print("\n\n========== While Loop ==========\n")

count = 0

while count < len(skills):
    print(skills[count])
    count += 1


print("\n========== Break ==========\n")

for skill in skills:

    if skill == "SQL":
        print("SQL Found")
        break

    print(skill)


print("\n========== Continue ==========\n")

for skill in skills:

    if skill == "SQL":
        continue

    print(skill)


print("\n========== Pass ==========\n")

for skill in skills:

    if skill == "SQL":
        pass

    print(skill)



print("\n========== Nested Loop ==========\n")

levels = ["Beginner", "Intermediate"]

for level in levels:

    print(level)

    for skill in skills[:2]:
        print("-", skill)



print("\n========== Loop Else ==========\n")

for skill in skills:

    if skill == "AWS":
        print("AWS Found")
        break

else:
    print("AWS Not Found")
    
print("\n========== Infinite Loop ==========\n")

count = 1

while True:

    print("Iteration :", count)

    if count == 5:
        print("Stopping Infinite Loop...")
        break

    count += 1
print("Program Continues...")