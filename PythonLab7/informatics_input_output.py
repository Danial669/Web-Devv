# Задача A: Гипотенуза
import math
a = int(input())
b = int(input())
print("Гипотенуза:", math.sqrt(a*a + b*b))

# Задача B: Следующее и предыдущее
a = int(input())
print(f"The next number for the number {a} is {a + 1}.")
print(f"The previous number for the number {a} is {a - 1}.")

# Задача C: Дележ яблок
n = int(input())
k = int(input())
print("Яблок каждому:", k // n)
print("Яблок в корзине:", k % n)

# Задача D: Электронные часы
n = int(input())
hours = n // 60
minutes = n % 60
print("Часы:", hours, "Минуты:", minutes)

# Задача E: Hello, Harry!
name = input()
print(f"Hello, {name}!")