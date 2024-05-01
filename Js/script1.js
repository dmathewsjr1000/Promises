const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Guess this worked!");
    }, 1000);
  });
  
  myPromise // returns Guess this worked
//   Promise is close to a Asynchronous if statement but still go off but still return a value
      // x is a representation of the returned value from the previous Promise
    .then((x) => x + " Again?") // x = Guess this worked!
    .then((x) => x + " Third time!") // x = Guess this worked! Again?
    .then((x) => x + " Promises are cool.")
    .then(x => console.log(x))
    .catch((err) => {
      console.error(err);
      })
  
  console.log(myPromise)

  // const myPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject("nope not today");
  //   }, 1000);
  // });
  
  // myPromise // returns Guess this worked
  //     // x is a representation of the returned value from the previous Promise
  //   .then((x) => x + " Again?") // x = Guess this worked!
  //   .then((x) => x + " Third time!") // x = Guess this worked! Again?
  //   .then((x) => x + " Promises are cool.")
  //   .then(x => console.log(x))
  //   .catch((err) => {
  //     console.error(`Hi Heba, ${err}!`);
  //     })
  
  // console.log(myPromise)
  // const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("nope not today");
//   }, 1000);
// });

// myPromise // returns Guess this worked
//     // x is a representation of the returned value from the previous Promise
//   .then((x) => x + " Again?") // x = Guess this worked!
//   .then((x) => x + " Third time!") // x = Guess this worked! Again?
//   .then((x) => x + " Promises are cool.")
//   .then(x => console.log(x))
//   .catch((err) => {
//     console.error(`Hi Heba, ${err}!`);
//     })
//   .then(() => console.log('We are calling then() even after breaking!'))


// console.log(myPromise)

// ====== Cleaner example of nesting promises =====
// new Promise((resolve, reject) => {
//   console.log("Initial");

//   resolve();
// })
//   .then(() => {
//     throw new Error("Something failed");

//     console.log("Do this");
//   })
//   .catch((error) => {
//     console.log(error)
//     console.error("Do that");
//   })
//   .then(() => {
//     console.log("Do this, no matter what happened before");
//   });
//   new Promise((resolve, reject) => {
//     console.log("Initial");
  
//     reject('User Error: ');
//   })
//     .then(() => {
//       throw new Error("Something failed");
  
//       console.log("Do this");
//     })
//     .catch((error) => {
//       console.log(error)
//       console.error("Do that");
//     })
//     .then(() => {
//       console.log("Do this, no matter what happened before");
//     });
//     // ====== COMPOSITION TOOLS =====
// // Promise.all() - conceptually speaking, this kind of represents AND operator

// // Promise.any() - similarly to the OR operator
// // const promise1 = Promise.reject(0);
// // const promise2 = new Promise((resolve) => setTimeout(resolve, 500, "answerOne"));
// // const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "answerTwo"));

// // const promises = [promise1, promise2, promise3];

// // Promise.any(promises).then((value) => console.log(value));

// // Promise.race()
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, 'one');
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 600, 'two');
// });

// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);
//   // Both resolve, but promise2 is faster
// });
// // Expected output: "two"

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Accepts a user id value and returns a string containing
 * the database that user's information can be found in.
 * @param {Number} id The user id.
 * @return {String} The name of the database to look up the user.
 */
export async function central(id) {
  if (typeof id !== "number") throw new Error("Invalid Input -- Not a Number");
  if (id < 1 || id > 10) throw new Error("Invalid Input -- Out of Range");

  await wait(100); // Faking an "external" call here by adding a delay.
  let db = "db1";
  if (id > 4) db = "db2";
  if (id > 7) db = "db3";

  return db;
}

/**
 * Accepts a user id value and returns an object containing
 * username, website, and company data.
 * @param {Number} id The user id.
 * @return {Object} The user's username, website, and company data.
 */
export async function db1(id) {
  if (typeof id !== "number") throw new Error("Invalid Input -- Not a Number");
  if (id < 1 || id > 4) throw new Error("Invalid Input -- Out of Range");

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const json = await data.json();

  return {
    username: json.username,
    website: json.website,
    company: json.company
  };
}
/**
 * Accepts a user id value and returns an object containing
 * username, website, and company data.
 * @param {Number} id The user id.
 * @return {Object} The user's username, website, and company data.
 */
export async function db2(id) {
  if (typeof id !== "number") throw new Error("Invalid Input -- Not a Number");
  if (id < 5 || id > 7) throw new Error("Invalid Input -- Out of Range");

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const json = await data.json();

  return {
    username: json.username,
    website: json.website,
    company: json.company
  };
}
/**
 * Accepts a user id value and returns an object containing
 * username, website, and company data.
 * @param {Number} id The user id.
 * @return {Object} The user's username, website, and company data.
 */
export async function db3(id) {
  if (typeof id !== "number") throw new Error("Invalid Input -- Not a Number");
  if (id < 8 || id > 10) throw new Error("Invalid Input -- Out of Range");

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const json = await data.json();

  return {
    username: json.username,
    website: json.website,
    company: json.company
  };
}

/**
 * Accepts a user id value and returns an object containing
 * name, email, address, and phone data.
 * @param {Number} id The user id.
 * @return {Object} The user's name, email, address, and phone data.
 */
export async function vault(id) {
  if (typeof id !== "number") throw new Error("Invalid Input -- Not a Number");
  if (id < 1 || id > 10) throw new Error("Invalid Input -- Out of Range");

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const json = await data.json();

  return {
    name: json.name,
    email: json.email,
    address: json.address,
    phone: json.phone
  };
}