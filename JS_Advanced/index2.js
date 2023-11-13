// 2. The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.

// a) What order will the four tests below print in? Why?function delayMsg(msg)

// function delayMsg(msg) {
//   console.log(`This message will be printed after a delay: ${msg}`);
// }
// // setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
// setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
// setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
// delayMsg("#4: Not delayed at all");

// The order was printed according to the amount of milliseconds giving.
// No delay was first then the number of milliseconds was next according to how small the number is presented.

// b) Rewrite delayMsg as an arrow function
const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

// setTimeout(() => console.log("#1: Delayed by 100ms"), 100);
// setTimeout(() => console.log("#2: Delayed by 20ms"), 20);
// setTimeout(() => console.log("#3: Delayed by 0ms"), 0);
// console.log("#4: Not delayed at all");

// // c) Add a fifth test which uses a large delay time (greater than 10 seconds)

setTimeout(() => console.log("#1: Delayed by 100ms"), 100);
setTimeout(() => console.log("#2: Delayed by 20ms"), 20);
setTimeout(() => console.log("#3: Delayed by 0ms"), 0);
console.log("#4: Not delayed at all");
setTimeout(() => console.log("#5: Delayed by 15ms"), 15000);

// // d) Use clearTimeout to prevent the fifth test from printing at all.

// function delayMsg(msg) {
//   console.log(`This message will be printed after a delay: ${msg}`);
// }
let ID = setTimeout(delayMsg, 15000, "#6: Delayed by 15ms");
let cancelID = setTimeout(delayMsg, 15000, "#7: Delayed by 15ms");
clearTimeout(cancelID);
