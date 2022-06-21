
// 53. Accessing Object Properties in JavaScript

/* 
    Accessing Object Properties (Two way):
        1. Dot Notation
        2. Array Notation
*/

var point = {
    x: 10, 
    y: 20, 
    z: 15
}

// Dot Notation
console.log(point.x) // 10
console.log(point.y) // 20
console.log(point.x + point.z) // 25

// Array Notation
console.log(point['x']) // 10
console.log(point['y']) // 20
console.log(point['x'] + point['z']) // 25


/* Use Array Notation:
        1. When we don't know
            --> to work with which datatype
            --> Which properties' data should be explored/rendered/consoled
        2. if it comes from variables & dynamic
*/

var show = 'x'
console.log(point.show) // undefined
console.log(point[show]) // 10



