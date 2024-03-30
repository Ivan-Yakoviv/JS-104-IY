// * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
//  * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
//  * то виводь рядок "14 г.", без хвилин.
//  */

const hours = 14;
const minutes = 20;
let message;


if(minutes > 0) {
    message = `${hours} г. ${minutes} хв.`;
} else {
    message = `${hours} г.`;
}

// const message = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;

console.log(message);

/**
 * Форматування посилання
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

let link = "https://my-site.ua/about";

if(!link.endsWith("/")) {
  console.log("ok");
  link += "/";
}

console.log(link);

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. 
 * Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const deadline = 1;

if(deadline === 0) {
    console.log("Today");
} else if(deadline === 1) {
    console.log("Tomorrow");
} else if(deadline === 2) {
    console.log("Overmorrow");
} else {
    console.log("Date in the future");
}

/**
*? Напишіть код, який запитуватиме
*? логін за допомогою prompt та логувати результат
*? у консоль браузера
    
*? Якщо відвідувач вводить "Адмін",
*? то prompt запитує пароль.
*? Якщо нічого не ввели або натиснуто клавішу Esc
*? вивести рядок "Скасовано"
*? В іншому випадку вивести рядок "Я вас не знаю"
    
*? Пароль перевіряти так:
*? Якщо введено пароль "Я головний",
*? то вивести рядок "Здрастуйте!"
*? інакше виводити рядок "Невірний пароль!"
  */

const userName = prompt("Введіть логін");

if (userName === "Адмін") {
  const userPass = prompt("Введіть пароль");
  console.log(userPass);

  if (!userPass) {
    console.log(userPass, "Скасовано");
  } else {
    if (userPass === "Я головний") {
      console.log("Здрастуйте!");
    } else {
      console.log("Невірний пароль!");
    }
  }
} else {
  console.log("Я вас не знаю");
}
