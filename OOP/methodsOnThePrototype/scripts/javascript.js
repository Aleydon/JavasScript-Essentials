function car(name, color) {
  this.name = name;
  this.color = color;
}

car.prototype.speedUp = function (speed) {
  this.speedUp = speed;
  return console.log(this.speedUp);
};

let newCar = new car("Toyota Supra", "red", 200);

newCar.speedUp(200);
