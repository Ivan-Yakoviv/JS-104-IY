for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

for (let i = 20; i >= 0; i -= 5) {
  console.log(i);
}

// Обчислення суми чисел від 1 до 10
 function calculateTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}
console.log(calculateTotal(10));

// Обчислення суми парних чисел від 1 до 10
function sum(min, max) {
  let total = 0;

  for(let i = min; i <= max; i++) {
    if(!(i % 2)) {
      total += i;
    }
  }

  return total;
}

console.log(sum(0, 10));
