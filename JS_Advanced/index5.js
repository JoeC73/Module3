// 5. The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails. Why?

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
const carClone = { ...car, year: 1973 };

car.description();

setTimeout(function () {
  car.description();
}, 200);

// b) Change the year for the car by creating a clone of the original and overriding it
// c) Does the delayed description() call use the original values or the new values from
// b)? Why?
//  Original values

// d) Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function

const boundDescription = car.description.bind(car);
setTimeout(boundDescription, 200);
const carClone1 = { ...car, model: 942 };

// e) Change another property of the car by creating a clone and overriding it, and test that
// setTimeout still uses the bound value from d)
