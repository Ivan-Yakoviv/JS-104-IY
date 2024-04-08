function filterArray(numbers, value) {
  const newArray = [];

  numbers.forEach(function callback(number) {
    if (number>value) {
      newArray.push(number);
    }
  }
)
  return newArray;
}

console.log(filterArray([12, 21, 3, 6, 5], 5));