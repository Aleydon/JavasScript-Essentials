function valueOfX(x) {
  console.log(x);

  return function (y) {
    return x + y;
  };
}

function count(i) {
  let c = i;
  let increment = () => {
    console.log(c);
    c++;
  };

  return increment;
}

const x = valueOfX(4);
const y = x(8);
console.log(x);
console.log(y);

console.log("\n");
const value = count(1);
value();
value();
value();
