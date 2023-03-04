const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {getRandomInteger};

function createIdGenerator (a, b) {
  const previousValues = [];

  return function () {
    let currentValue = 1;
    if (previousValues.length >= (b - a + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue ++;
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

export {createIdGenerator};

const getRandomElement = (someArray) =>
  someArray[getRandomInteger(0, someArray.length - 1)];

export {getRandomElement};
