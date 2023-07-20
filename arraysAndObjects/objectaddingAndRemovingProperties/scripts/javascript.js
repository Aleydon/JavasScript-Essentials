let myObject = {
  name: "Roberto Aleydon",
  job: "Developer",
  age: 28,
};

delete myObject.age;
console.log(myObject);

myObject["age"] = 30;
console.log(myObject);

myObject.age = 29;
console.log(myObject);
