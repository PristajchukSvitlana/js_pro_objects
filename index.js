const inputValue = Number(document.querySelector('.input')).value;
console.log(inputValue);
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.addEventListener('click', () => {
    console.log(inputValue);
});
const users = [
    { name: "Anna", age: 25 },
    { name: "Bob", age: 32 },
    { name: "Clara", age: 40 },
    { name: "David", age: 29 }
];
