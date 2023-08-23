class CellPhone {
  constructor(name) {
    this.name = name;
  }

  chipset() {
    return "Chipset: Snapdragon 860 Qualcomm";
  }
}

class CellPhoneRam extends CellPhone {
  ram = 2;

  constructor(ram, name) {
    super(name);
    this.ram = ram;
  }

  chipset() {
    return super.chipset();
  }
}

const xiaomi = new CellPhoneRam(4, "Poco X3 Pro");

console.log(xiaomi);
console.log(xiaomi.chipset());
