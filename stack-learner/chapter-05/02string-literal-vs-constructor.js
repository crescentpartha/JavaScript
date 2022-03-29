
// 37. String Literal Vs Constructor

// String Literal 
var str = 'Something'

// String Constructor
var str2 = String('Something')
console.log(str + ' ' + str2) // Something Something

/* 
    # String Literal is a String created using single/double quotes.
    # String constructor is used to create a new String object.
    # String Object is a String created using the new() operator.

    ---------------------------------------------------------

    # Most of the time, we use Literal
    # Sometimes we have to use Constructor
*/

var n = 10
var str1 = n
console.log(str1) // 10 --> number
str1 = n + ''
console.log(str1) // 10 --> string
str1 = n.toString()
console.log(str1) // 10 --> string
str1 = String(n)
console.log(str1) // 10 --> string
str1 = new String(n)
console.log(str1) // [String: '10'] --> object
console.log(str1.toString()) // 10 --> string

