
// 42+43. Array in JS

/* 
    What is Array?
    ==> Array is a Data Structure where we can organize multiple data under a single variable.

    # Array Declaration (Using Literal | Constructor)
    # Array display output
    # Array insert value
    # Array Update/modify/alter
*/

// Array Literal

var arr = [1, 2, 3, 4, 5]
console.log(arr) // [ 1, 2, 3, 4, 5 ]

// Index: 0 to n-1
console.log(arr[0]) // 1
console.log(arr[4]) // 5

arr[5] = 6
arr[10] = 11
console.log(arr) // [ 1, 2, 3, 4, 5, 6, <4 empty items>, 11 ]
console.log(arr[7]) // undefined
console.log(arr.length) // 11

arr[2] = 22
console.log(arr) // [ 1, 2, 22, 4, 5, 6, <4 empty items>, 11 ]

// Using Constructor

var arr2 = Array()
console.log(arr2) // []

var arr3 = Array(1, 2, 3, 4, 5)
console.log(arr3) // [ 1, 2, 3, 4, 5 ]

