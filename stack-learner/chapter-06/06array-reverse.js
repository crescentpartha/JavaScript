
// 48. How to Reverse Array Element?

/* Reverse an Array
    [1, 2, 3, 4, 5]
    [5, 4, 3, 2, 1]
*/

var arr = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// for (var i = 0; i < (arr.length / 2); i++) {
//     var temp = arr[i]
//     arr[i] = arr[arr.length - 1 - i]
//     arr[arr.length - 1 - i] = temp
// }

// console.log(arr) // [ 8, 7, 6, 5, 4, 3, 2, 1 ]

console.log(arr.reverse()) // [ 8, 7, 6, 5, 4, 3, 2, 1 ]


