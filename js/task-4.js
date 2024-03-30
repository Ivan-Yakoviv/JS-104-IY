/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

const sub = "free";
let canConnect;
                    
canConnect = sub === "pro" || sub === "vip";


if(sub === "pro" || sub === "vip") {
    canConnect = true;
} else {
    canConnect = false;
}

console.log("дозволено доступ?", canConnect);






/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */


// const isOnline = true;
// const isFriend = true;
// const isDnd = true;

// const canChat = isFriend && isOnline && !isDnd;

// console.log("can chat?", canChat);

/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = "free";
// let canConnect;
                    
// const canConnect = sub === "pro" || sub === "vip";


// if(sub === "pro" || sub === "vip") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }

// console.log("дозволено доступ?", canConnect);

/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */


const isOnline = true;
const isFriend = true;
const isDnd = true;

const canChat = isFriend && isOnline && !isDnd;

console.log("can chat?", canChat);