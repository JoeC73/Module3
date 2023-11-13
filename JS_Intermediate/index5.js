// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);

// console.log(fixedTwenty + fixedTen)

// There were no interger used with the .toFixed(2)
// Also you have to use parseFloat to get the right result.


// let currencyAddition = parseFloat('0.1') + parseFloat('0.2');
// console.log('0.1 + 0.2 = ' + currencyAddition)


function gfg_Run() {
    console.log('0.1 + 0.2 = ' +
        (parseFloat('0.1') +
            parseFloat('0.2')).toFixed(2));
}

gfg_Run()

let currencyOperation = parseFloat('0.1') * parseFloat('0.2');
console.log('0.1 * 0.2 = ' + currencyOperation)
 
function gfg_Run() {
    console.log('0.1 * 0.2 = ' +
        (parseFloat('0.1') *
            parseFloat('0.2')).toFixed(2));
}

gfg_Run()
