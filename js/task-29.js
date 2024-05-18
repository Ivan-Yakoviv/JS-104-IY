// const setBtn = document.querySelector(".js-set");
// const clearBtn = document.querySelector(".js-clear");
// let timeoutId;


// setBtn.addEventListener("click", () => {
//   timeoutId = setTimeout(() => {
//     console.log("I love async JS!");
//   }, 2000);
// });


// clearBtn.addEventListener("click", () => {
//   clearTimeout(timeoutId);
//   console.log(`Timeout with id ${timeoutId} has stopped!`);
// });

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let intervalId;


startBtn.addEventListener("click", () => {
    const intervalId = setInterval(() => {
        console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
    }, 1000);
     clearInterval(intervalId);
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
}); 

