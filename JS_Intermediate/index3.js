// Original array
const animals = ["Tiger", "Giraffe"];
// console.log(animals)

// a) Add 2 new values to the end
animals.push("Gorilla", "Bear");

// b) Add 2 new values to the beginning
animals.unshift("Parrot", "Fish");

// c) Sort the values alphabetically
animals.sort();

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue

function replaceMiddleAnimal(newValue) {
  const middleAnimal = Math.floor(animals.length / 2);
  animals[middleAnimal] = newValue;
}
replaceMiddleAnimal("Zebra");

// e) Write a function findMatchingAnimals(beginsWith)

function findMatchingAnimal(beginsWith) {
  return animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith)
  );
}
console.log(findMatchingAnimal("pa"));

// Step 2. return a new array of all animals

// Step 3. Returns with the "beginsWith" string
