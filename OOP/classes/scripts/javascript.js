function createCar(carName) {
  let car = Object.create({});
  car.name = carName;

  return car;
}

let newCar = createCar("Nissan Skyline GTR");
console.log(newCar);
