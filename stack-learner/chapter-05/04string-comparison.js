
// 39. String Comparison in JS

/* 
    # JavaScript Uses 'Lexicographic' System to Compare to String
    # Maintain 'Lexicographical Order'
    # Lexical Order: z, y, x, ... a, Z, Y, X, ... B, A (Bigger to Smaller)
*/

var a = 'abc'
var b = 'bcd'
console.log(a == b) // false
console.log(a > b) // false
console.log(a < b) // true

a = 'aaaaaaZ'
b = 'aaaaaaz'
console.log(a > b) // false
console.log(a < b) // true
console.log(a == b) // false

console.log('z' > 'Z') // true
console.log('Z' > 'z') // false
console.log('a' > 'Z') // true

/* 
    # String+Number --> String (Addition)
    # String==Number --> Number==Number (Comparison)
    # String==String --> Number==Number (Comparison)
*/
console.log('001' == 1) // true



