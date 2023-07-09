let x = 5;

const multiply = function (n) {
  let x = n * 2;
  console.log(`Function scope: ${x}`);

  if (x > 10) {
    let x = 50;
    console.log(`If scope: ${x}`);
  } else {
    let x = 30;
    console.log(`Else scope: ${x}`);
  }
};

multiply(10);
console.log(`Global scope: ${x}`);
