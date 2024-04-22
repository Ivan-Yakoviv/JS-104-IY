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