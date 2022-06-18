
// 49. Important Array Methods of Javascript

/* 
    1. Join Method --> Any Symbol can be join in the array
    2. Fill Method --> Fill the array by anything
    3. Concat Method --> Merge two array
    4. Array.isArray Method --> Check it's array or not
    5. Array.from Method --> Generate a clone (not reference) array from another array
*/

var arr = [4, 5, 9, 6]
var arr2 = [5, 10, 45, 23]

// 1. Join Method --> Any Symbol can be join in the array

console.log(arr) // [ 4, 5, 9, 6 ]
console.log(arr.join(' ')) // 4 5 9 6
console.log(arr.join(',')) // 4,5,9,6
console.log(arr.join(' , ')) // 4 , 5 , 9 , 6
console.log(arr.join(' | ')) // 4 | 5 | 9 | 6


// 2. Fill Method --> Fill the array by anything

console.log(arr.fill(0)) // [ 0, 0, 0, 0 ]
console.log(arr) // [ 0, 0, 0, 0 ]


// 3. Concat Method --> Merge two array

// arr.concat(arr2) // It returns an array, hence need to story
// console.log(arr) // [ 0, 0, 0, 0 ]

var arr3 = arr.concat(arr2)
console.log(arr3) // [ 0,  0,  0,  0, 5, 10, 45, 23 ]
console.log(arr2.concat(arr)) // [ 5, 10, 45, 23, 0,  0,  0,  0 ]


// 4. Array.isArray Method --> Check it's array or not

console.log(Array.isArray(arr)) // true


// 5. Array.from Method --> Generate a clone array from another array

console.log(arr2) // [ 5, 10, 45, 23 ]
var arr4 = Array.from(arr2) // Array.from Method create a clone copy, not reference copy
console.log(arr4) // [ 5, 10, 45, 23 ]

arr4[0] = 50 // Doesn't effect the main array
console.log(arr2) // [ 5, 10, 45, 23 ]
console.log(arr4) // [ 50, 10, 45, 23 ]

/* 
    # Array is the immutable object
    # If we put as a reference, then It will be change it's value everywhere 
    # Reference Array --> Change value in everywhere
    # Clone Array --> Doesn't Change value in the main array
*/

var a = [1, 2]
var b = a // It creates a reference copy

b[0] = 5
console.log(a) // [ 5, 2 ]
console.log(b) // [ 5, 2 ]


