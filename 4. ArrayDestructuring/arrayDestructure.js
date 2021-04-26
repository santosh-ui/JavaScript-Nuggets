// Array Destructuring
// faster/easier way to access/unpack variables from arrays, objects (later videos): I mean files

const fruits = ["oranges", "bananas", "grapes", "apples"];
const friends = ["Babba", "Sonu", "Puppy", "Tirumal", "Akhil", "Srikanth", "Sairam"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);
const [babba, sonu, , enemy, akhil, , sai, mahesh] = friends;
console.log(babba, sonu, enemy, akhil, sai, mahesh);

let first = "Susy";
let second = "Santosh";

// let temp = first;
// first = second;
// second = temp;
[second, first] = [first, second];

console.log(first, second);
