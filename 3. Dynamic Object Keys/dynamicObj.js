// dot Notation

const person = {
    name: "Santosh",
};
// console.log(person);
person.age = 23;
// console.log(person);

// Square bracket Notation

const items = {
    "featured-items": ["item1", "item2"],
}
// console.log(items["featured-items"]);
// console.log(person["name"]);

let appState = "loading";
// appState = "error";
let keyName = "computer";
const app = {
    [appState]: true,
}
// console.log(app);
app[keyName] = "apple";
// console.log(app);

const state = {
    loading: true,
    name: "",
    job: "",
}

let updateState = (key, value) => {
    state[key] = value;
}

updateState("name", "Santosh");
updateState("job", "developer");
updateState("products", []);
updateState("name", "Tony Stark")
state["products"].push("vegan food truck");
updateState("loading", false);
// console.log(state);
// const details = state.map((item) => `${item.name}`);
const result = document.querySelector("#result");
result.innerHTML = `<h3>${Object.values(state).join("<br>")}</h3>`;

// console.log(details);

// That's how we can change keys of an object using square bracket notation