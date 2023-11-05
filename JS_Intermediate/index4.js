/*
4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.*/

function camelCase(str) {
  return str
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

console.log(camelCase("background-image"));

// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

//sample code
// console.log(camelCase("margin-left")); // marginLeft
// console.log(camelCase("background-image")); // backgroundImage
// console.log(camelCase("display")); // display
