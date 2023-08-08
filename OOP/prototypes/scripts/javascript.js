// Propotype is a fallback of another object

let people = {
  name: "Aleydon",
};

console.log(Object.getPrototypeOf(people));
console.log(Object.getPrototypeOf(people) === Object.prototype);
console.log(people.hasOwnProperty("name"));

// Inherits methods and properties and other

console.log("\n");
let newPeople = Object.create(people);

console.log(newPeople.name);
console.log(newPeople.hasOwnProperty("name"));
console.log(Object.getPrototypeOf(newPeople) === people);
