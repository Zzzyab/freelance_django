from random import choice

name = ["Валеряшка", "Семеняшка", "Алихашка", "Даниляшка", "Цоляшка", "Дауряшка", "Вовяшка"]
status = ["Басота", "Урод", "Мужик", "Пробитый", "Лох", "Опущенный", "Валет", "Туз", "Смотрящий"]

for namestatus in name:
    print( str( choice(name) ) + " - " + str( choice(status) ) )
