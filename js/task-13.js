/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = "Jacob,William,Solomon,Artemis";
const phones = "38001234567,38001112233,380055566377,380055566300";

const namesArr = names.split(",");
const phonesArr = phones.split(",");

for(let i = 0; i < namesArr.length; i++) {
    console.log(`${namesArr[i]} - ${phonesArr[i]}`);
}


// HW-3

function slugify(title) {
    let slug = title.toLowerCase();
    slug = slug.split(" ");
    return slug.join("-");
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
  const arrList = message.split(" ");
  const quantityWords = arrList.length;
  const totalPrice = quantityWords*pricePerWord;
  return totalPrice;
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));