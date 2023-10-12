const reg = /[123]/;

console.log(reg.test("Has the number 3"));
console.log(reg.test("Has the number 6"));

// Checks if the sentence has numbers
console.log(/[0-9]/.test("Has the number 9"));
