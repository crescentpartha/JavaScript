
// 40. String Methods in JS | JavaScript Built in String Methods

/* 
    JavaScript String Methods - W3scho0ls.com
    Link: https://www.w3schools.com/js/js_string_methods.asp

    String Count = 0 to n
*/

var a = 'I am'
var b = 'Crescent Partha'

var c = a.concat(' ', b)
console.log(c) // I am Crescent Partha
console.log(c.substr(5)) // Crescent Partha
console.log(c.substr(5, 8)) // Crescent
console.log(c.substr(5, 10)) // Crescent P

console.log(c.charAt(5)) // C
console.log(c.charAt(0)) // I

console.log(c.startsWith('I')) // true
console.log(c.startsWith('I am')) // true
console.log(c.endsWith('a')) // true
console.log(c.endsWith('Partha')) // true
console.log(c.endsWith('Partha999')) // false

console.log('University'.toUpperCase()) // UNIVERSITY
console.log(a.toUpperCase()) // I AM
console.log('University'.toLowerCase()) // university
console.log(a.toLowerCase()) // i am

console.log('      Partha     ') //       Partha
console.log('      Crescent    Partha     '.trim()) // Crescent    Partha
console.log('      Partha     '.trim()) // Partha

console.log(c.split(' ')) // [ 'I', 'am', 'Crescent', 'Partha' ]

console.log(c.length) // 20

/* 
    Extracting String Parts
        There are 3 methods for extracting a part of a string:

    1. slice(start, end)
    2. substring(start, end)
    3. substr(start, length)
*/

let str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13)); // Banana    (Position: 7 to 12)
console.log(str.slice(-12, -6)); // Banana  (Position: -11 to -7)
console.log(str.slice(7)); // Banana, Kiwi
console.log(str.slice(-12)); // Banana, Kiwi    (start from -11 position)

console.log(str.substring(7, 13)); // Banana    (Position: 7 to 12)

console.log(str.substr(7, 6)); // Banana 
console.log(str.substr(7)); // Banana, Kiwi
console.log(str.substr(-4)); // Kiwi    (the position counts from the end of the string)


let text = "Please visit Microsoft!";
console.log(text.replace("Microsoft", "W3Schools")); // Please visit W3Schools!
console.log(text) // Please visit Microsoft!
console.log(text.replace("MICROSOFT", "W3Schools")); // Please visit Microsoft!
// To replace case insensitive, use a regular expression with an /i flag
console.log(text.replace(/MICROSOFT/i, "W3Schools")); // Please visit W3Schools!
console.log(text) // Please visit Microsoft!

let text2 = "Please visit Microsoft and Microsoft!";
console.log(text2.replace("Microsoft", "W3Schools")); // Please visit W3Schools and Microsoft!
// To replace all matches, use a regular expression with a /g flag
console.log(text2.replace(/Microsoft/g, "W3Schools")); // Please visit W3Schools and W3Schools!

// String Padding in JS
let text3 = "5";
console.log(text3.padStart(4,0)); // 0005
console.log(text3.padEnd(4,0)); // 5000

// charCodeAt() method returns the unicode of the character at a specified index in a string
let text4 = "HELLO WORLD";
console.log(text4.charCodeAt(0)); // 72

// Property Access
console.log(text4[0]); // H

let text5 = ' string, partha| unicode , method'
// Split on commas
console.log(text5.split(",")) // [ ' string', ' partha| unicode ', ' method' ]
// Split on spaces
console.log(text5.split(" ")) // [ '', 'string,', 'partha|', 'unicode', ',', 'method' ]
// Split on pipe
console.log(text5.split("|")) // [ ' string, partha', ' unicode , method' ]




