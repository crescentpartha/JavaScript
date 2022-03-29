
// 36. String in JS

/* 
    A string is a sequence of one or more characters that may consist of letters, numbers, or symbols. 
    Strings in JavaScript are primitive data types and immutable, which means they are unchanging.
        
    Ex: 'string' or "string esfadfdf" or ['a', 'b', 'c', 'd', 'e']
*/

var str2 = 'string'
var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line
console.log(str2 + ' ' + abc + ' ' + esc)
console.log(abc.length) // 26   // string length

console.log(abc.indexOf("lmno"))      // 11     // find substring, -1 if doesn't contain 
console.log(abc.lastIndexOf("lmno"))  // 11     // last occurance
console.log(abc.slice(3, 6))          // def    // cuts out "def", negative values count from behind

console.log(abc.replace("abc","123"))  // 123defghijklmnopqrstuvwxyz         // find and replace, takes regular expressions
console.log(abc.toUpperCase())         // ABCDEFGHIJKLMNOPQRSTUVWXYZ         // convert to upper case
console.log(abc.toLowerCase())         // abcdefghijklmnopqrstuvwxyz         // convert to lower case
console.log(abc.concat(" ", str2))     // abcdefghijklmnopqrstuvwxyz string  // abc + " " + str2

console.log(abc.charAt(2))          // c     // character at index: "c"
console.log(abc[2])                 // c     // unsafe, abc[2] = "C" doesn't work
console.log(abc.charCodeAt(2))      // 99    // character code at index: "c" -> 99
console.log(abc.split(","))         // [ 'abcdefghijklmnopqrstuvwxyz' ]      // splitting a string on commas gives an array
console.log(abc.split(""))          // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']            // splitting on characters
// console.log(128.toString(16));   // number to hex(16), octal (8) or binary (2)



