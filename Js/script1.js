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