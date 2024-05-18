// const prom = new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//         if(random > 0.5) {
//             resolve({title: "fulfilled!!!"});
//         } else {
//             reject({title: "rejected!!!"});
//         }
//     }, 1000)

// });

// prom
//     .then((data) => {
//         console.log("then", data);
//     })
//     .catch(({ title }) => {
//         console.log("catch", title);
//     })
//     .finally(() => console.log("finally"))

const isSuccess = false;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Registering promise callbacks
promise.then(
  value => {
    console.log(value); // "Success! Value passed to resolve function"
  },
  error => {
    console.log(error); // "Error! Error passed to reject function"
  }
);
