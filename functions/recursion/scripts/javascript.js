function evenNumber(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even number`);
  } else {
    console.log(`${number} is not even number`);
    evenNumber(number - 1);
  }
}

evenNumber(9);
