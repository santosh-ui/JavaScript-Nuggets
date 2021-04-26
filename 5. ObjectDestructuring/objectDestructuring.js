// faster/easier way to access/unpack variables from arrays, objects 

const bob = {
    first: "bob",
    last: "sanders",
    city: "chicago",
    siblings: {
        sister: "Siri",
    },
};

const {first: king, last, city, state, siblings: {sister: favoriteSibling}} = bob;
console.log(king, last, city, state, favoriteSibling);

// const printPerson = (person) => {
//     const {first, last} = person
//     console.log(first, last);
// }
const printPerson = ({first, last, siblings:{sister}}) => {
    console.log(first, last, sister);
}
printPerson(bob);

// first: king --> king is an alias name & first is accessed only using king

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);
