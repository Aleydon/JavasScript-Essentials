// Copy properties from one object to another object

let people = {
  name: "Roberto Aleydon",
  job: "Developer",
};

let skill = {
  skills: "Javascript/Typescript",
};

console.log(people);
console.log(skill);

const copy = Object.assign(people, skill);
console.log(copy);
