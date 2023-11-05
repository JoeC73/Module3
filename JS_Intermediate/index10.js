// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());

// a) Print the total number of minutes that have passed so far today
console.log(today.getMinutes() + " minutes have passed so far today");

// b) Print the total number of seconds that have passed so far today
console.log(today.getSeconds() + "seconds have passed so far today ");

function daysInBetween(date1, date2) {
  date2.getTime() - date1.getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return diffDays;
}
const date1 = new Date(2001, 6, 31);
const date2 = new Date(2014, 8, 25);
const numbDays = daysInBetween(date1, date2);
console.log(`There are ${numbDays} days between ${date1} and ${date2}`);
