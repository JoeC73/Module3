// Using the following code to test and start with:
// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// pause, the most recent call to func should be executed and any others ignored.

function debounce(func) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), 1000);
  };
}

function printMe() {
  console.log("Printing debounced message");
}

printMe = debounce(printMe, 1000);

setTimeout(() => printMe("First"), 100);
setTimeout(() => printMe("Second"), 200);
setTimeout(() => printMe("Third"), 300);

// b) Extend the debounce decorator function to take a second argument ms, which defines the
// // length of the period of inactivity instead of hardcoding to 1000ms.

function debounce(func, ms) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args, ms), 1000);
  };
}

function printMe() {
  console.log("Printing debounced message");
}

printMe = debounce(printMe, 1000);

setTimeout(() => printMe("First"), 100);
setTimeout(() => printMe("Second"), 200);
setTimeout(() => printMe("Third"), 300);

// c) Extend debounce to allow the original debounced function printMe to take an argument
// msg which is included in the console.log statement.

function debounce(func, ms) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args, ms), 1000);
  };
}

function printMe(msg) {
  console.log(`Printing debounced message, ${msg}`);
}

printMe = debounce(printMe, 1000);

setTimeout(() => printMe("First"), 100);
setTimeout(() => printMe("Second"), 200);
setTimeout(() => printMe("Third"), 300);
