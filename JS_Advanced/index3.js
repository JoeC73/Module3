// Using the following code to test and start with:
// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// pause, the most recent call to func should be executed and any others ignored.

function debounce(func, timeout) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function printMe(msg) {
  console.log(`Printing debounced message: ${msg}`);
}

printMe = debounce(printMe, 1000);

setTimeout(() => printMe("First"), 100);
setTimeout(() => printMe("Second"), 200);
setTimeout(() => printMe("Third"), 300);
