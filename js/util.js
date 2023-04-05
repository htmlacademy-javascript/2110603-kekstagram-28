export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const createIdGenerator = () => {
  let currentValue = 0;
  return function() {
    currentValue += 1;
    return currentValue;
  };
};

export const getRandomElement = (someArray) =>
  someArray[getRandomInteger(0, someArray.length - 1)];


// export const getRandomUniqueArray = (arr, number) => {
//   const newArr = [];
//   while (newArr.length === number) {
//     const a = getRandomElement(arr);
//     if (!newArr.includes(a)) {
//       newArr.push(a);
//       newArr.length += 1;
//       console.log(newArr);
//     }
//   }
//   return newArr;
// };


export const getRandomUniqueArray = (arr,length) => {
  const newArr = [];
  for (let i = 0; i < length; i++) {
    const a = getRandomElement(arr);
    if (!newArr.includes(a)) {
      newArr.push(a);
    }
  }
  return newArr;
};
