// Create variables with the value of the object

const person = {
  name: "Roberto Aleydon",
  job: "Full-Stack Developer",
};

const { name: personName, job: personJob } = person;
console.log(`${personName} ${personJob}`);
