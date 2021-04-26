// MAP method
const people = [
    {
        name: "Bob",
        age: 20,
        position: "developer",
    },
    {
        name: "Anna",
        age: 25,
        position: "designer",
    },
    {
        name: "Susy",
        age: 30,
        position: "the boss",
    },
    {
        name: "Jhon",
        age: 26,
        position: "intern",
    },
];

// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

const getAges = (person) => person.age;

const ages = people.map(getAges);

const newPeople = people.map((item) => {
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 10,
    }
});

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');
result.innerHTML = names.join("");
// console.log(newPeople);
