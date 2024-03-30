// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином,
// щоб вона повертала масив усіх цілих чисел від значення min до max включно.

function createArrayOfNumbers(min, max) {
  const arr = [];
for(let i = min; i <= max; i += 1) {
	arr.push(i);
}
  return arr;
}

console.log(createArrayOfNumbers(29, 34));