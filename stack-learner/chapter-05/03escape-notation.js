
// 38. JS Escape Notation

/* 
    Keywords: Escape Notation | Escape Sequence
    # Special characters can be encoded using escape sequences
    # We can write any special character after Backslash(\) in sentence
    Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

var str = 'This is a String'
console.log(str) // This is a String

str = "This is a String"
console.log(str) // This is a String

str = 'This is a "String"'
console.log(str) // This is a "String"

str = "This is a 'String'"
console.log(str) // This is a 'String'

// str = "This is a "String""
// console.log(str) // SyntaxError: Unexpected identifier

// str = 'This is a 'String''
// console.log(str) // SyntaxError: Unexpected identifier


/* --------------------------------------------------------
----------------------------------------------------------- */


// Escape Notation | Escape Sequence --> \ 
// (We can write any special character after Backslash(\) in sentence)

// 01. Single Quote
str = 'This is a \'String\''
console.log(str) // This is a 'String'

// 02. Double Quote
str = "This is a \"String\""
console.log(str) // This is a "String"

// 03. Newline
str = 'This is a \nString'
console.log(str) 

// 04. Tab
str = 'This is a \tString'
console.log(str) 

// 05. Backslash
str = 'This is a \\String'
console.log(str) // This is a \String

str = 'This is a \&\_\<\|\;\:String'
console.log(str) // This is a &_<|;:String

str = 'This is a \'\&\_\<\|\;\:String\''
console.log(str) // This is a '&_<|;:String'

// 06. Null Character
str = 'This is a \0String'
console.log(str) // This is a String

// 07. Carriage Return
str = 'This is a \rString'
console.log(str)  // Strings a

// 08. Vertical Tab
str = 'This is a \vString'
console.log(str) // This is a ♂String

// 09. Backspace
str = 'This is a \bString'
console.log(str) // This is aString

// 10. Form Feed
str = 'This is a \fString'
console.log(str) // This is a ♀String



