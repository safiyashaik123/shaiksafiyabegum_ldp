
name = input("Enter your name   : ").strip()
skills = input("Enter your skills : ").strip()

print("\n========== Original Data ==========")
print("Name   :", name)
print("Skills :", skills)

print("\n========== String Operations ==========")
print("Length          :", len(name))
print("First Character :", name[0])
print("Last Character  :", name[-1])
print("First 3 Letters :", name[:3])

print("\n========== String Methods ==========")
print("Upper Case      :", name.upper())
print("Lower Case      :", name.lower())
print("Title Case      :", name.title())
print("Replace         :", name.replace("a", "@"))
print("Contains 'a'    :", "a" in name.lower())
print("Position of 'a' :", name.lower().find("a"))
print("Skills List     :", skills.split())

print("\n========== Concatenation ==========")
print("Hello " + name)

print("\n========== Repetition ==========")
print("*" * 20)


print("\n========== String Formatting ==========")
# Using comma
print("Using Comma        :", name, skills)
# Using concatenation
print("Using Concatenation:", "Name: " + name + ", Skills: " + skills)

# Using format()
print("Using format()     : Name: {} | Skills: {}".format(name, skills))

# Using f-string (Recommended)
print(f"Using f-string     : Name: {name} | Skills: {skills}")

# Expression inside f-string
print(f"Total Characters in Name : {len(name)}")
print(f"First Skill : {skills.split()[0]}")

