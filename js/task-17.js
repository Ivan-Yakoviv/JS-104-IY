// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином,
// щоб вона повертала масив усіх цілих чисел від значення min до max включно.

function createArrayOfNumbers(min, max) {
  const arr = [];
for(let i = min; i <= max; i += 1) {
	arr.push(i);
}
  return arr;
}

console.log(createArrayOfNumbers(29, 34));

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// console.log(lastTag);
// console.log(numberOfTags);

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = [];
for (const key of keys) {
  values.push(apartment[key]);
}
console.log(keys);
console.log(values);

function countProps(object) {
  let propCount = 0;
const keys = Object.keys(object);
  for (const key of keys) {
    // if (object.hasOwnProperty(key)) {
      propCount += 1;
    // }
  }

  return propCount;
}
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));