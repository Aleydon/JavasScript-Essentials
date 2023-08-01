// Turns all parameters into array

function printNumbers(...nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
  }
}

function printNames(...names) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

printNumbers(2, 4, 1, 6, 7, 4);
printNames("Angela", "Maria", "Bruna", "Felipe", "Mario");
