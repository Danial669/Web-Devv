# Задача A: Максимум из двух
a = int(input())
b = int(input())
print("Максимум:", max(a, b))

# Задача B: Какое число больше?
a = int(input())
b = int(input())
if a > b:
    print(1)
elif a < b:
    print(2)
else:
    print(0)

# Задача C: Високосный год
year = int(input())
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")

# Задача D: Знак числа
x = int(input())
if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)

# Задача E: Камень-ножницы-бумага
a = input().lower()
b = input().lower()

if a == b:
    print("TIE")
elif (a == "rock" and b == "scissors") or \
     (a == "scissors" and b == "paper") or \
     (a == "paper" and b == "rock"):
    print("First player wins")
else:
    print("Second player wins")
    