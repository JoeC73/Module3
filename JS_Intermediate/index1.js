// Create a function that takes a string as a parameter

function ucFirstLetter(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
}

console.log(ucFirstLetter("los angeles"));
