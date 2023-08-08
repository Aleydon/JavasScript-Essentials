let user = {
  name: "",
  setName: function (newName) {
    return (this.name = newName);
  },
  getName: function () {
    return console.log(this.name);
  },
};

user.setName("Roberto Aleydon");
user.getName();
