class Car {
  carName = "";

  constructor(carName) {
    this.carName = carName;
  }

  get getCarName() {
    return `Car name: ${this.carName}`;
  }

  set setNewCarName(name) {
    this.carName = name;
  }
}

let golf = new Car("Golf GTI");
console.log(golf.getCarName);

let newGolf = (golf.setNewCarName = " TSI COMFORTLINE 12V TOTAL FLEX 4P ");
console.log(`New car name: ${newGolf}`);

console.log(`Set new car name ${golf.getCarName}`);
