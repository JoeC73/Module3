const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getMinutes() + ' minutes have passed so far today')
console.log(today.getSeconds() + 'seconds have passed so far today ')
const date1 = new Date(2001, 6, 31);
const date2 = new Date(2014, 8, 25)

const difference = date2.getTime() - date1.getTime();
const day_difference = difference / (1000 * 3600 * 24);
console.log(`The total number of days between ${date1} and ${date2} is  ${day_difference} days`)