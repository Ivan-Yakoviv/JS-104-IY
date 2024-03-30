/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string = "Welcome  to  the future";
const arr = string.split(" ")
const result = arr.slice(1, arr.length - 1).join(" ").trim();
console.log(result);


