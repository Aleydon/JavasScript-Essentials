// Checks if an object is an instance of another object

class CellPhone {
  constructor(name) {
    this.name = name;
  }
}

class CellPhoneRam extends CellPhone {
  ram = 16;

  constructor(ram, name) {
    super(name);
    this.ram = ram;
  }
}

console.log(new CellPhoneRam() instanceof CellPhone);
