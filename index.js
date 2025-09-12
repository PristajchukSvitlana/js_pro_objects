//const inputValue = Number(document.querySelector('.age')).value;
//console.log(inputValue);
//const btn = document.querySelector('.btn');
//const list = document.querySelector('.list');

//btn.addEventListener('click', () => {
//  console.log(inputValue);
//});
const users = [
    { name: "Anna", age: 25 },
    { name: "Bob", age: 32 },
    { name: "Clara", age: 40 },
    { name: "David", age: 29 }
];
function filterByAge(arr, value) {
    return arr.filter(item => item.age > value)

}

function renderUserCard(data) {
    let result = document.querySelector(".result");
    result.innerHTML = "";
    data.forEach(element => {
        let li = document.createElement("li");
        li.textContent = `${element.name},${element.age}`;
        result.appendChild(li);
    });
}




function render() {
    console.log("render");
    const inputValue = Number(document.querySelector(".age").value);
    const filterData = filterByAge(users, inputValue);
    console.log(filterData);
    renderUserCard(filterData);
}

document.querySelector(".btn").addEventListener("click", render)
//Задание 2

//Задача: Фильтр по жанру + подсчёт количества книг

//Задание:
//Вывести список всех книг на страницу.
//Добавить <select> с жанрами (Fantasy, Sci-Fi, Mystery).
//При выборе жанра показывать только книги этого жанра.
//Под списком показывать, сколько всего книг в этом жанре.

const books = [
    { title: "Гарри Поттер", author: "Дж. К. Роулинг", year: 1997, genre: "Fantasy" },
    { title: "Властелин колец", author: "Дж. Р. Р. Толкин", year: 1954, genre: "Fantasy" },
    { title: "Дюна", author: "Фрэнк Герберт", year: 1965, genre: "Sci-Fi" },
    { title: "Шерлок Холмс", author: "Артур Конан Дойл", year: 1892, genre: "Mystery" },
    { title: "1984", author: "Джордж Оруэлл", year: 1949, genre: "Sci-Fi" }
];
function filterBooks(arr, value) {
    return arr.filter(book => book.genre === value || value === "all");
}
function renderList(data) {
    let result = document.querySelector(".books-list");
    result.innerHTML = "";
    data.forEach(book => {
        let li = document.createElement("li");
        li.textContent = `${book.title} (${book.year}) - ${book.author}, ${book.genre}`;
        result.appendChild(li);
    });
}
function render() {
    const genre = document.querySelector('#genreSelect').value;
    const filteredBooks = filterBooks(books, genre);
    renderList(filteredBooks);
}

document.querySelector('#genreSelect').addEventListener('change', render);

//Task 3

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person1 = new Person("Alice", 30);
console.log(person1.name); // Alice
console.log(person1.age);  // 30

class Math {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
}
console.log(Math.add(5, 3));      // 8
console.log(Math.subtract(5, 3)); // 2
Math.multiply = function (a, b) {
    return a * b;
};

Math.divide = function (a, b) {
    if (b === 0) {
        return "Division by zero error";
    }
    return a / b;
};

//Task4
class Hero {
    constructor(name = "Hero", health = 100, countHeal = 1) {
        this.name = name;
        this.health = health;
        this.countHeal = countHeal;
    }

    attack(target) {
        console.log(`${this.name} attacks ${target.name}`);
        target.health -= 10;
        console.log(`${target.name}'s health is now ${target.health}`);
        console.log(`${this.name}'s health is now ${this.health}`);
    }

    heal(amount) {
        this.health += amount;
        this.countHeal += 1;
        console.log(`${this.name} heals = ${amount}.`);
        console.log(`${this.name}'s health is now ${this.health}`);
        if (this.countHeal > 3) {
            console.log(`${this.name} cannot heal anymore.`);
            return
        }
    }
}


class Treasure {
    constructor(value = "1000", type = "gold", isCollected = false) {
        this.value = value;
        this.type = type;
        this.isCollected = isCollected;
    }
    collect(target) {
        if (!this.isCollected) {
            this.isCollected = true;
            console.log(`Treasure collected by ${target.name}`);
        }
    }
}

const hero1 = new Hero("Hero1", 150);
const hero2 = new Hero("Hero2", 120);
const treasure = new Treasure(500, "gold", false);
console.log(hero1);
console.log(hero2);
console.log(treasure);

//hero1.attack(hero2);
//hero2.attack(hero1);
//hero2.heal(20);
//hero1.heal(15);
//hero1.heal(10);
//hero2.heal(5);
//hero1.heal(10);
//hero2.heal(15);
//hero2.heal(10);

//treasure.collect(hero1);
//treasure.collect(hero2);
//console.log(treasure);

document.querySelector("body").addEventListener("keypress", function (event) {
    console.log(event);
    if (event.key === "a" || event.key === "A") {
        hero1.attack(hero2);
        console.log("Attack!");
    } else if (event.key === "h" || event.key === "H") {
        hero1.heal(10);
        console.log("Heal!");
    }
});

class Book {
    constructor(title = "Unknown", author = "Unknown", year = 2000, genre = "Unknown") {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }
    getInfo() {
        return ` ${this.author},${this.year},${this.genre}`;
    }
}

const book1 = new Book("Гарри Поттер", "Дж. К. Роулинг", 1997, "Fantasy");
const book2 = new Book("Дюна", "Фрэнк Герберт", 1965, "Sci-Fi");

console.log(book1.getInfo());
console.log(book2.getInfo());


class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        return this.books.push(book);
    }

    getAllBooks() {
        return this.books;
    }
    findByTitle(query) {
        return this.books.find(book => book.title.includes(query))
    }
}

const library1 = new Library();
library1.addBook(book1);
library1.addBook(book2);
console.log(library1.getAllBooks());

library1.findByTitle("tztztz")
console.log(library1.findByTitle("tztztz"));


class Transport {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    accelerate() {
        console.log(`${this.name} is accelerating to ${this.speed} km/h`);
    }
    stop() {
        console.log(`${this.name} has stopped.`);
    }
}

//let car = new Transport("BMW", 120);
//car.accelerate();
//car.stop();

class Car extends Transport {
    constructor(name, speed, fuelType) {
        super(name, speed);
        this.fuelType = fuelType;
    }data:image/jpeg;base64,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
    refuel() {
        console.log(`${this.name} is refueling with ${this.fuelType}.`);
    }
}

console.log("Car");
let car = new Car("BMW", 120, "Gasoline");
car.accelerate();
car.stop();
car.refuel();

//Нужно создать класс Motorcycle тоже наследуется от Transport, имеет такие же поле. Также добавить метод wheelie - //         console.log(`${this.name} делает вилли.`); // велосипед движется лишь на заднем колесе
class Motorcycle extends Transport {
    constructor(name, speed) {
        super(name, speed);
    }
    wheelie() {
        console.log(`${this.name} делает вилли.`);
    }
}
console.log("Motorcycle");
let motorcycle = new Motorcycle("Harley", 100,);
motorcycle.accelerate();
motorcycle.stop();
motorcycle.wheelie();


class BankAccount {
    #balance;
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.#balance = balance;
    }
    getBalance() {
        if (this.#balance > 0) {
            return this.#balance;
        } else {
            return "Account is empty.";
        }
    }}
const account = new BankAccount("12456", "John Doe", 500);
console.log(account.getBalance()); 
account.balance = -1500;
console.log(account.getBalance());