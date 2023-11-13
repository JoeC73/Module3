// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.

// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.

function fibonacci(num) {
  let num1 = 0;
  let num2 = 1;
  let sum;
  let i = 0;
  for (i = 0; i < num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
}

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing

function printFibonacci(limit = 20) {
  let current = 0;
  let timer = setInterval(function () {
    if (current === limit) clearInterval(timer);
    console.log(fibonacci(current));
    current++;
  }, 1000);
}
console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));
printFibonacci(5);

// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.

function timerFibonacci() {
  let counter = 1;
  setTimeout(
    function repeatThis(current) {
      console.log(fibonacci(counter));
      if (true) setTimeout(repeatThis, 1000);
      counter++;
    },
    1000,
    counter
  );
}
timerFibonacci();
