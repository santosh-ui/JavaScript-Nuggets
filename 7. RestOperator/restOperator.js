// REST OPERATOR...
// gathers/collects items
// Destructuring, functions
// Placement important, careful about the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ["apple", "orange", "mango", "banana"];
const [first, ...restOfTheFruits] = fruits;
// console.log(first, restOfTheFruits);
const specificFruit = restOfTheFruits.find((fruit) => fruit === "mango");
// console.log(specificFruit);

// Objects 
const person = {name: "Santosh", lastName: "Raju", job: "developer"};
// const {...rest, job} = person;
// rest operator must be at the end
const {job, ...rest} = person;
// console.log(job, rest);

// functions
// Using rest operator in parameters of the function to get rest of the elements
const getAverage = (name, ...scores) => { 
    console.log(name);
    console.log(scores);
    const average = scores.reduce((total, score) =>{return total += score}, 0) / scores.length;
    console.log(average);
}
// Using spread operator during invokation of the function to split the array elements individually
let testScores = [87, 98, 85, 88, 82]
console.log(getAverage("Santosh", ...testScores));
