// Filter - returns a new array, can manipulate the size of new array (unlike map)
// returns based on condition
// Find - returns a single instance (Object), returns first match, if no match -undefined

const people = [
    {name: "Santosh", age: 23, position: "developer"},
    {name: "Daisy", age: 25, position: "designer"},
    {name: "Tom", age: 24, position: "tester"},
    {name: "Zack", age: 35, position: "the boss"},
];
const fruits = ["apples", "mangoes", "grapes"];

// filter
const youngPeople = people.filter((person) => {
    // if (person.age < 30) {
    //     return person
    // }
    return person.age < 30;
})
// console.log(youngPeople);
const developers = people.filter((item) => item.position === "developer");
// console.log(developers);

// no match
const seniorDevs = people.filter((person) => person.position === "senior dev");
// console.log(seniorDevs);

// find
const tom = people.find((person) => person.name === "Tom");
// console.log(tom);
const fruit = fruits.find((fruit) => fruit === "grapes");
// console.log(fruit);

// no match
const oldPerson = people.find((person) => person.age > 35);
// console.log(oldPerson);

// multiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

console.log(tom.position); // find

const daisy = people.filter((person) => person.name === "Daisy");
console.log(daisy[0].position); // filter
