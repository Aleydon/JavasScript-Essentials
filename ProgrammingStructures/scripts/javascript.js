// Variables and Constants

console.log("\nVariables");

let banana = 5;
let square = 4,
  triangle = 3,
  rectangle = 4;

const constants = "Constants";

console.log(banana * banana);
console.log(`You have ${banana} bananas`);
console.log(square * (triangle + rectangle));
console.log(`${constants} do not allow the value to be changed`);

banana = "banana";
console.log(`Do you like ${banana}?`);

// Functions

console.log("\nFunctions");

function functionWithoutParam() {
  return "Without parameter";
}
function functionWithParams(param1, param2) {
  return param1 + param2;
}

console.log(functionWithoutParam());
console.log(functionWithParams("JavaScript", "Essentials"));

let age = prompt("how old are you?");
console.log(`Functions  Built-In ${age}`);

alert("Function Built-In 2");

let higherNumber = Math.max(2, 5, 1, 9);
console.log(
  `Function Built-In 3\n(2, 5, 1, 9): Higher Number = ${higherNumber}`
);

console.log("console.log is also a built-in function");

// Control Structures

console.log("\nControl Structures");

let myName = "Roberto Aleydon";
let numberA = 10;
let numberB = 7;

if (myName === "Roberto Aleydon") {
  console.log("You are Roberto Aleydon!");
} else {
  console.log("You are not Robert Aleydon!");
}

if (numberA <= numberB) {
  console.log("NumberA is less than NumberB");
} else if (numberA >= numberB) {
  console.log("NumberA is greater than NumberB");
}
