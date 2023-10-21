// This will not print. This is implicit condition which is false and will not print a messageknowing that the #1 is a true and zero is false.

if (0) console.log('#1 zero is true')

// This will print a message because the string isn't empty and the expression is true.

if ("0") console.log('#2 zero is true')

// Null is not true and it converts to zero so it is false. This will not print.

if (null) console.log('null is true')


// These both are true statments which both are true. This will print. 

if (-1) console.log('negative is true')

if (1) console.log('positive is true')
