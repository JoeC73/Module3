// Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.

// a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters

function multiply(a, b, c, d) {
  return a * b * c * d;
}

const triple = multiply.bind(null, 5);

console.log(triple(5));
setTimeout(function () {
  multiply();
}, 500);

// b) Use apply to improve your solution so that delayed functions can take any number of
// parameters

const result = multiply.apply(this, [5, 5, 2, 4], 500);

// c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// delay prototype function still works.
