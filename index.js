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


let workers = [
    {name: "Kate", salary: 200
    },
    { name: "John", salary: 300 },
    { name: "Tom", salary: 400 },
    { name: "Sam", salary: 500 }
];
