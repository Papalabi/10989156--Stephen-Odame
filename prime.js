const lowerNumber = 2;

const primeNumbers = (higherNumber) => {
  for (let i = lowerNumber; i < higherNumber; i++) {
    let num = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        num = 1;
        break;
      }
    }

    if (i > 1 && num == 0) {
      console.log(i);
    }
  }
};

primeNumbers();
