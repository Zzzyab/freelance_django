from random import choice

int = 8 #как в луа
float = 4.8 #как в луа

random_strs = ["cock","dick","suck cock"]

test = int + float

boolean = True

print(test)
if boolean == True:
    print( choice(random_strs) + "\n\"really\" nigga " + str(int) + str(float) )
else:
    print("fuck you you")


# Если ты хочешь протестировать сайт то напиши в консоль
# cd *путь к папке myfirst* к примеру у меня вот так будет  cd C:\Users\User\Desktop\python django\myfirst
# потом пишешь C: или какой там у тебя диск
# потом пишишье python manage.py runserver
# заходишь на сайт http://127.0.0.1:8000/
# готово

# если хочешь создать новую страницу то напиши в консоль python manage.py startapp НазваниеСтраницы
# новый сайт нужно прописывать в urls.py и settings.py
#
#
#
