// Objects = {}

let person = {
  name: "Roberto Aleydon",
  job: "Developer",
  age: 28,
  skills: (skill) => skill,
};

console.log(person);
console.log(typeof person);

console.log(person.skills("\nJavascript/Typescript"));
console.log(typeof person.skills);

console.log(`\nName: ${person.name} Job: ${person.job} Age:${person.age}`);
