(function () {
  console.log("1 - Automatic function");
})();

function showOnConsole() {
  console.log("2 - Show on console");
}

const textOnConsole = function () {
  console.log("3 - Text on console");
};

const funtionWithParam = function (text) {
  console.log("4 - " + text);
};

const functioWithReturn = function () {
  return "5 - Function with return";
};

const arrowFunction = () => console.log("6 - Arrow function");

showOnConsole();
textOnConsole();
funtionWithParam("Function with parameter");
console.log(functioWithReturn());
arrowFunction();
