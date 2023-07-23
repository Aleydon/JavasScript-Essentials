let jobs = ["Developer", "Systems Analyst"];

console.log(jobs);

jobs.shift();

console.log(
  `\nShift removes an element to the beginning of the array: ${jobs}`
);

console.log(jobs);

jobs.unshift("Software Engineer");

console.log(`\nUnshift adds an element to the beginning of the array: ${jobs}`);

console.log(jobs);
