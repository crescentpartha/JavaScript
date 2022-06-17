
// 45. Insert, Remove & Replace Methods

/* 
    splice Methods
        --> Used for Inserting, removing, and replacing.
    arr[3] = X
        --> Used for Inserting or replacing.
    arr.push(x)
        --> Insert as a last element.
    arr.pop()
        --> remove the last element.
    arr.unshift(9)
        --> Insert as a first element.
    arr.shift()
        --> remove the first element.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// Insert 9 to index 3
console.log(arr) // [1, 2, 3, 4, 5, 6, 7, 8]

/* 1(i). Inappropriate way of inserting:- index, push, and unshift methods */

arr[3] = 9
console.log(arr) // [1, 2, 3, 9, 5, 6, 7, 8]

arr.push(9)
console.log(arr) // [1, 2, 3, 9, 5, 6, 7, 8, 9]

arr.unshift(9)
console.log(arr) // [9, 1, 2, 3, 9, 5, 6, 7, 8, 9]

/* 1(ii). Proper way of inserting */

// splice(start: number, deleteCount?: number): number[]
arr.splice(3, 0, 9)
console.log(arr) // [9, 1, 2, 9, 3, 9, 5, 6, 7, 8, 9]

arr.splice(3, 0, 3, 4, 5)
console.log(arr) // [9, 1, 2, 3, 4, 5, 9, 3, 9, 5, 6, 7, 8, 9]

/* 2(i). Improper way of removing */

console.log(arr) // [ 9, 1, 2, 3, 4, 5, 9, 3, 9, 5, 6, 7, 8, 9 ]
// console.log(arr.length) // 14
arr[3] = undefined
console.log(arr) // [ 9, 1, 2, undefined, 4, 5, 9, 3, 9, 5, 6, 7, 8, 9 ]
// console.log(arr.length) // 14

arr.pop()
console.log(arr) // [ 9, 1, 2, undefined, 4, 5, 9, 3, 9, 5, 6, 7, 8 ]

arr.shift()
console.log(arr) // [ 1, 2, undefined, 4, 5, 9, 3, 9, 5, 6, 7, 8 ]

/* 2(ii). Proper way of removing */

// splice(start: number, deleteCount?: number): number[]
arr.splice(3, 1)
console.log(arr) // [ 1, 2, undefined, 5, 9, 3, 9, 5, 6, 7, 8 ]

arr.splice(2, 1, 3, 4)
console.log(arr) // [ 1, 2, 3, 4, 5, 9, 3, 9, 5, 6, 7, 8 ]




