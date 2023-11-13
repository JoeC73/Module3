// a) Create a promise-based alternative randomDelay() that delays execution for a
// random amount of time (between 1 and 20 seconds) and returns a promise we can use
// via .then(), as in the starter code below

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 15000);
  setTimeout(() => reject("error"), 15000);
});

promise.then(
  (result) => console.log("There appears to be a delay"),
  (error) => console.log("error")
);

promise.catch((error) => console.error("This is an error"));

// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it

// c) Update the testing code to catch rejected promises and print a different message
