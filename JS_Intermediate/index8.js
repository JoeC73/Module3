// 8. The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.

const phoneBookABC = new Map();
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");

// c) Update the phone number for Caroline
phoneBookABC.set("Caroline", "0455221182");
phoneBookABC.delete("Caroline", "0455221182");
phoneBookABC.set("Caroline", "0455221153");

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

const phoneBookDEF = new Map();
phoneBookDEF.set("David", "04210573987");
phoneBookDEF.set("Edward", "0456387129");
phoneBookDEF.set("Fred", "0468735193");
for (let item of phoneBookDEF) {
  console.log(item);
}
// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map
function phoneBook(contacts) {
  contacts.forEach((phoneBook) => console.log(phoneBook));
}
// e) Combine the contents of the two individual Maps into a single phoneBook Map
phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log(phoneBook);
