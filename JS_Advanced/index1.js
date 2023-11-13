// 1. makeCounter below is a decorator function which creates and returns a function that
// increments a counter.

// a) Create a second counter counter2 using the makeCounter function and test to see if
// it remains independent to counter1

// function makeCounter() {
//   let currentCount = 0;
//   return function () {
//     currentCount++;
//     console.log(currentCount);
//     return currentCount;
//   };
// }
// let counter1 = makeCounter();
// counter1();
// counter1();
// counter1();

// let counter2 = makeCounter();
// counter2();
// counter2();
// counter2();

// b) Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)

function makeCounter(startFrom = 0) {
  let currentCount = startFrom;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

let counter3 = makeCounter(2);
counter3();
counter3();
counter3();

let counter4 = makeCounter();
counter4();
counter4();
counter4();

// // c) Modify makeCounter to take another argument incrementBy, which specifies how
// // much each call to counter() should increase the counter value by.

function makeCounter(startFrom = 0, increment = 1) {
  let currentCount = startFrom;
  return function () {
    currentCount += increment;
    console.log(currentCount);
    return currentCount;
  };
}

let counter5 = makeCounter(2, 2);
counter5();
counter5();
counter5();
