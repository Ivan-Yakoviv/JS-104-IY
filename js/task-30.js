// const date = new Date(2024, 4, 17, 22, 45, 0);

// console.log(date);

// const startTime = Date.now();

// // Твій код, виконуваний упродовж деякого часу
// for(let i = 0; i <= 100; i += 1) {
// 	console.log(i);
// }

// const endTime = Date.now();
// const elapsedTime = endTime - startTime;

// console.log(`Elapsed time: ${elapsedTime} ms`);

const date = new Date("March 16, 2030 14:25:00");
console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// Повертає день місяця від 1 до 31
console.log("Day: ", date.getDate()); // 16

// Повертає день тижня від 0 до 6, починається з неділі
console.log("Day of the week: ", date.getDay()); // 6

// Повертає місяць від 0 до 11
console.log("Month: ", date.getMonth()); // 2

// Повертає рік з 4 цифр
console.log("Full year: ", date.getFullYear()); // 2030

// Повертає години
console.log("Hours: ", date.getHours()); // 14

// Повертає хвилини
console.log("Minutes: ", date.getMinutes()); // 25

// Повертає секунди
console.log("Seconds: ", date.getSeconds()); // 0

// Повертає мілісекунди
console.log("Milliseconds: ", date.getMilliseconds()); // 0
