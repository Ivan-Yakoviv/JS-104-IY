const flist = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
flist.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
flist.prepend(firstItem);

const article = document.querySelector(".article");
console.log(article.innerHTML);

const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';
console.log(title.innerHTML);

const text = document.querySelector(".article .text");
console.log(text.innerHTML);

const link = document.querySelector(".article .link");
console.log(link.innerHTML);

// text.remove();
// text.innerHTML = 'The best';

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
// list.innerHTML = markup;
// list.insertAdjacentHTML("beforeend", markup);

// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

// const addListenerBtn = document.querySelector('.js-add');
// const removeListenerBtn = document.querySelector('.js-remove');
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });
// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);

// document.addEventListener("keydown", event => {
//   console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", event => {
//   console.log("Keyup: ", event);
// });

const clearLogBtn = document.querySelector(".js-clear");
const logList = document.querySelector(".log-list");
let keypressCounter = 1;

console.log(clearLogBtn)

document.addEventListener("keydown", logMessage);
document.addEventListener("keyup", logMessage);
clearLogBtn.addEventListener("click", reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentHTML("afterbegin", markup);

  if (type === "keyup") {
    incrementKeypressCounter();
  }
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = "";
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}