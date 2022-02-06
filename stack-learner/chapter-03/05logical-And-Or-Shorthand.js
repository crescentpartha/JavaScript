
// 27. And Or Shorthand

var name = ''

// var fullname = ''
// if (name.length == 0) {
//     fullname = 'Crescent Partha'
// }
// else {
//     fullname = name 
// }
// console.log(fullname)

// Logical Or Shorthand
var fullname = name || 'Crescent Partha'
console.log(fullname) // Crescent Partha

name = 'MR. XYZ'
fullname = name || 'Crescent Partha'
console.log(fullname) // MR. XYZ


// Logical And Shorthand
var isOk = true
if (isOk) {
    console.log('Everything is OK') 
}

isOk && console.log('Everything is OK') // Print output because inOk is true
isOk = false 
isOk && console.log('Everything is OK') // Nothing to print because inOk is false


