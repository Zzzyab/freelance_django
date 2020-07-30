from random import choice
import time

name = ["Валеряшка", "Семеняшка", "Алихашка", "Даниляшка", "Цоляшка", "Дауряшка", "Вовяшка"]
status = ["Басота", "Урод", "Мужик", "Пробитый", "Лох", "Опущенный", "Валет", "Туз", "Смотрящий"]

for namestatus in name:
    print( str( namestatus ) + " - " + str( choice(status) ) )
    time.sleep(0.5)
