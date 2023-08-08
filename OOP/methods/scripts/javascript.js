let user = {
  name: "",
  setName: (newName) => (this.name = newName),
  getName: () => console.log(this.name),
};

user.setName("Roberto Aleydon");
user.getName();
