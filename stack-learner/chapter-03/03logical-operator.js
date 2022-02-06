
// 25. JS Logical Operators

// Logical Operators only used when we have two or more conditions and result comes from both of their participation.

// There are three type of Logical Operators - && || !

// A && B --> true && true = true
// A && B --> true && false = false
// A && B --> false && true = false
// A && B --> false && false = false

// A || B --> true || true = true 
// A || B --> true || false = true 
// A || B --> false || true = true 
// A || B --> false || false = false 

// (A > B) --> if conditions return true 
// !(A > B) --> if conditions return false 
// !!(A > B) --> if conditions return true 

var a = 10
var b = 20
var c = 30
var d = 40

// && Operations
if (a > b && c > d) {
    console.log('A is greater than B and C is greater than D')
}
else {
    console.log('At one condition is false')
}

// || Operations
if (a > b || c > d) {
    console.log('A is greater than B or C is greater than D')
}
else {
    console.log('At one condition is false')
}

// ! Operations
var check = !(a > b)
console.log(check) // true

check = !!(a > b)
console.log(check) // false

