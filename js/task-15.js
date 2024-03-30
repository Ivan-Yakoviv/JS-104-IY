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