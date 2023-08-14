class Car {
  constructor() {
    this.carName = this.carName;
  }
}

Car.prototype.color = "red";
Car.prototype.carName = "Mitsubishi Eclipse";

const newCar = new Car();
console.log(`Car Name: ${newCar.carName}\n Car Color: ${newCar.color}`);
