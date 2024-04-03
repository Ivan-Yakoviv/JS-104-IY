function makeArray(firstArray, secondArray, maxLength) {
    const array = [];
    const newArray = firstArray.concat(secondArray); 
    for (let i = 0; i < maxLength; i++) {
        array.push(newArray[i]);
    }
    return array;
    }


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


// Оголоси змінну allClients та доповни код таким чином,
//  щоб її значенням було посилання на масив, що складається
//  з усіх елементів масивів oldClients і newClients.
//  Спочатку мають іти елементи з масива oldClients,
// а потім з newClients.

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients);

const propName = "name";
const user = {
  age: 25,
};


user[propName] = "Henry Sibola";
console.log(user); // "Henry Sibola"

// function getAllPropValues(propName) {
//     const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//     ];


//     const values = [];


//     for (const product of products) {
//        if (Object.keys(product).includes(propName)) {
//            values.push(product[propName]);
//         }
//     }return values;
// }
    
// console.log (getAllPropValues("price")) ;

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
    let totalPrice;
   for (const product of products) {
      if (product[propName] === productName) {
        totalPrice = product.price*product.quantity;
       return totalPrice;
      }
    }
    return `"Product ${productName} not found!"`;
}

console.log(calculateTotalPrice("Gri"));

const bookShelf = {
  books: [
		{ title: "The Last Kingdom", rating: 8 }, 
		{ title: "The Mist", rating: 6 }
	],
  getBooks() {
    return this.books;
  },
  addBook(newBook) {
    this.books.push(newBook);
  }
};

bookShelf.addBook({ title: "Dream Guardian", rating: 9 });
console.log(bookShelf);
