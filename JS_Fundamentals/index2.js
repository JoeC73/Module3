let three = "3"
let four = "4"
let thirty = "30"



// This expression results in 34. These strings were concatenated togther by the + sign.

console.log(three + four)

// This expression results in 12.

console.log(three * four)

// This expression results in 0.75. 

console.log(three / four)

// This expression results as -1. 

console.log(three - four)

let lessThan1 = three < four

// This expression becomes true because 3 is less than 4.

console.log(lessThan1)

let lessThan2 = thirty < four

/*This expression came out as true but 30 is not less than 4. But when strings are compared, they are compared by the first string to see which is greater. 
    "30" is less than "4"because the first character is less than 4. */

console.log(lessThan2)