/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */


function calcBMI(weight, height) {
    let numWeight = weight.replace(",", ".");
    numWeight = Number.parseFloat(numWeight);
    const numHeight = Number.parseFloat(height);
    const bmi = numWeight / (numHeight ** 2);
    return bmi.toFixed(1);
}

const bmi = calcBMI("88,3", "1.75");
console.log(bmi);

function getCommonElements(array1, array2) {
  const jointArray = [];
  for (let i = 0; i < array1.length; i+=1) {
    if (array2.includes(array1[i])) {
        jointArray.push(array1[i]);
    }
  } return jointArray;
}
const array1 = [10, 20, 30, 40];
const array2 = [4, 30, 17, 10, 40];
console.log(getCommonElements(array1, array2));