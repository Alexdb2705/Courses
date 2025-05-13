people = [
    {"name": "Cho", "house": "Ravenclaw"},
    {"name": "Harry", "house": "Gryffindor"},
    {"name": "Draco", "house": "Slytherin"},
]

def f(person):
    return person["name"]

people.sort(key=f)

print(people)

people.sort(key=lambda person: person["house"])

print(people)
