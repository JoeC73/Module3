// let camelCase = 'margin-left';
// camelCase = camelCase.replace(/-([a-z])/g, function (k) {
//     return k[1].toUpperCase();
// })
// console.log(camelCase)



let camelCase = 'background-image';
camelCase = camelCase.replace(/-([a-z])/g, function (k) {
    return k[1].toUpperCase();
})

console.log(camelCase)