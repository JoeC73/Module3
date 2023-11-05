const unique = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
function remove(data) {
  return [...new Set(data)];
}
console.log(remove(unique));

const numbers = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
function duplicates(testscores) {
  return [...new Set(testscores)];
}
console.log(duplicates(numbers));
