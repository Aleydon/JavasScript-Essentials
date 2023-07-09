function sum(a, b) {
  if (a === undefined || b === undefined) {
    console.warn("To add you need two values");
  } else {
    console.log(`The sum  of ${a} and ${b} is ${a + b}\n`);
  }
}

function defaultParams(phrase, n = 4) {
  console.log("\n");
  for (let x = 1; x < n; x++) {
    console.log(`${phrase}: ${x}`);
  }
}

sum(1);
sum(6, 5);
defaultParams("Hello World");
defaultParams("Prhrase", 10);
