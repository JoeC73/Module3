const city = "los angeles";

const titleCapitalized = city
    .split(" ")
    .map((word) => {
        return word
            .charAt(0)
            .toUpperCase() + word.slice(1);
    })
    .join(" ")

console.log(titleCapitalized);




    


