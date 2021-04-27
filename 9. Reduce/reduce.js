// Reduce
// Iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter "acc" - total of all calculations (accumulator)
// 2nd parameter "curr" - current iteration/value

const staff = [
    {name: "santosh", age: 23, job: "developer", salary: 500},
    {name: "daisy", age: 25, job: "designer", salary: 400},
    {name: "tom", age: 24, job: "tester", salary: 300},
    {name: "zack", age: 35, job: "the boss", salary: 1000},
];

const dailySalary = staff.reduce((total, person) => {
    // console.log(total);
    // console.log(person.salary);
    total += person.salary;
    return total; // very very important to return the accumulator 
}, 0);

console.log(dailySalary);
