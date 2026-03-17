import math

# Считываем два числа
a = int(input())
b = int(input())

# Вычисляем гипотенузу по теореме Пифагора: c = √(a² + b²)
c = math.sqrt(a ** 2 + b ** 2)

# Выводим результат
print(c)