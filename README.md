[![Build status](https://ci.appveyor.com/api/projects/status/41xwrw9c4s2civ2p?svg=true)](https://ci.appveyor.com/project/MKSInc/ajs-hw-5-oop-1-class)

# 5. Домашнее задание к лекции «Прототипы, конструкторы, классы и наследование»

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: код должен проходить ESLint без ошибок.

**Важно**: тесты должны обеспечивать 100% покрытие тестируемых функций по строкам.

**Важно**: решения должны быть построены на базе [шаблона Webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

---

## 5.1 Классы, наследование

### Легенда

Вы решили перейти на классы и реализовать иерархию, выделив в качестве базового класса класс `Character`, а для остальных персонажей создать классы, наследующиеся от него.

### Описание

Реализуйте описанную иерархию классов: класс `Character` является родительским для всех остальных, 6 дочерних классов `Bowerman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie` от него наследуются, сами задавая свои характеристики.

Свойства, которые должны быть у объектов класса `Character`:
1. `name` - имя
1. `type` - тип
1. `health` - уровень жизни
1. `level` - уровень персонажа
1. `attack` - атака
1. `defence` - защита

Конструктор класса должен соответствовать следующим требованиям:
1. `name` - строка, min - 2 символа, max - 10
1. `type` - один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie

В случае, если передаются некорректные значения, должна выбрасываться ошибка (`throw new Error(...)`).

В вашей функции автоматически должны устанавливаться значения следующих полей:
1. health: 100
1. level: 1
1. Атака/защита:
    1. Bowman: 25/25
    1. Swordsman: 40/10
    1. Magician: 10/40
    1. Undead: 25/25
    1. Zombie: 40/10
    1. Daemon: 10/40
