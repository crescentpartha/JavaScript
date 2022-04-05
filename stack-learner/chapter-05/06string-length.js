
// 41. String Length in JS

var str = 'Some String'
console.log(str.charAt(0)) // S
console.log(str.charAt(3)) // e
console.log(str.charAt(-15)) // (Empty string printed which we don't see)
console.log(str.charAt(15)) // (Empty string means string is ended/closed)
var strResult = str.charAt(15)
console.log(strResult) // 
console.log(typeof strResult) // string

var length = 0
while (true) {
    if (str.charAt(length) == '') {
        break
    }
    else {
        length++
    }
}
console.log(length) // 11
console.log(str) // Some String

// Built in method

console.log(str.length) // 11
console.log('Something is better than nothing'.length) // 32



