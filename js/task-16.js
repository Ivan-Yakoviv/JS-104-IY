// Функція getSlice(array, value) приймає два параметра:
// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:
// порожній масив, якщо в array немає елемента зі значенням value

function getSlice(array, value) {
  const indexValue = array.indexOf(value);
  if (indexValue>=0) {
    return array.slice(0, indexValue+1)
  } else {
    return array = [];
  }
}

console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));