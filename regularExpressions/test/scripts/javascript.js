// Checks if the string has "Test"

const regex = new RegExp("Test");

console.log(regex.test("Test")); //Returns true
console.log(/TestFailed/.test("test")); // returns false
