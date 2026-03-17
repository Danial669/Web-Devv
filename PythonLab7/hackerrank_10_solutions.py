# 1. Say "Hello, World!" With Python
print("\n=== Task 1: Hello World ===")
print("Hello, World!")

# 2. Python If-Else
print("\n=== Task 2: If-Else ===")
n = int(input("Enter a number: "))
if n % 2 != 0:
    print("Weird")
elif n >= 2 and n <= 5:
    print("Not Weird")
elif n >= 6 and n <= 20:
    print("Weird")
else:
    print("Not Weird")

# 3. Arithmetic Operators
print("\n=== Task 3: Arithmetic Operators ===")
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
print(f"Sum: {a + b}")
print(f"Difference: {a - b}")
print(f"Product: {a * b}")

# 4. Division
print("\n=== Task 4: Division ===")
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
print(f"Integer division: {a // b}")
print(f"Float division: {a / b}")

# 5. Loops
print("\n=== Task 5: Loops ===")
n = int(input("Enter n: "))
print("Squares:")
for i in range(n):
    print(i * i)

# 6. Write a function (Leap year)
print("\n=== Task 6: Leap Year Function ===")
def is_leap(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

year = int(input("Enter year: "))
print(f"Is leap year? {is_leap(year)}")

# 7. Print Function
print("\n=== Task 7: Print Function ===")
n = int(input("Enter n: "))
for i in range(1, n + 1):
    print(i, end="")
print()

# 8. List Comprehensions
print("\n=== Task 8: List Comprehensions ===")
x = int(input("Enter x: "))
y = int(input("Enter y: "))
z = int(input("Enter z: "))
n = int(input("Enter n: "))
coordinates = [[i, j, k] for i in range(x+1) for j in range(y+1) for k in range(z+1) if i+j+k != n]
print("Coordinates:", coordinates)

# 9. Find the Runner-Up Score
print("\n=== Task 9: Runner-Up Score ===")
n = int(input("Enter number of scores: "))
arr = list(map(int, input("Enter scores: ").split()))
arr.sort(reverse=True)
for i in range(1, n):
    if arr[i] < arr[0]:
        print(f"Runner-up score: {arr[i]}")
        break

# 10. Nested Lists
print("\n=== Task 10: Nested Lists ===")
students = []
n = int(input("Enter number of students: "))
for _ in range(n):
    name = input("Enter name: ")
    score = float(input("Enter score: "))
    students.append([name, score])

scores = sorted(set([s[1] for s in students]))
second_lowest = scores[1]
names = sorted([s[0] for s in students if s[1] == second_lowest])
print("Students with second lowest score:")
print("\n".join(names))