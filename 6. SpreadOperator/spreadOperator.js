// Spread Operator ...
// Allows and Iterable to spread/expand individually inside receiver
// Split into single items and COPY them

const udemy = "udemy";
const letters = [...udemy];
// console.log(letters);

const boys = ["Santosh", "Silvan", "Sonu"];
const girls = ["Susy", "katherine"];

const bestFriend = "Tom";

const friends = [...boys, bestFriend, ...girls];
// console.log(friends);

// reference
// const newFriends = friends;

// copy
const newFriends = [...friends, "Susan"];
newFriends[0] = "Robert";
console.log(friends);
console.log(newFriends);


// ES2018 - ES8 Objects

const person = {name: "Santosh", job: "developer"};
const newPerson = {...person, city: "London", name: "Tom"};
console.log(person);
console.log(newPerson);
