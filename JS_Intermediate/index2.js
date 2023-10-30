// function truncatedString(str, maxLength) {
//     if (str.length > maxLength) {
//         return str.substring(0, maxLength) + "...";
//     } else {
//         return str;
//     }
// }

let str = "This text will be truncated if it is too long";
let maxLength = 25;
let truncatedStr = truncatedString(str, maxLength);

console.log(truncatedStr)

function truncatedString(str, maxLength) {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str
}