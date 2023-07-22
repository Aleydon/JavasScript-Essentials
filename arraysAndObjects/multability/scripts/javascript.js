let objectA = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
};

let objectB = objectA;

let objectC = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
};

objectB.prop1 = 10;

console.log(objectA === objectB);
console.log(objectB === objectC);
console.log(objectA);
