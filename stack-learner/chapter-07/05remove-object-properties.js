
// 55. Remove Object Properties in JavaScript

var point = {
    x: 10, 
    y: 20, 
    z: 30, 
    a: 40,
    d: 50
}

console.log(point) // { x: 10, y: 20, z: 30, a: 40, d: 50 }

point.a = undefined
console.log(point) // { x: 10, y: 20, z: 30, a: undefined, d: 50 }

delete point.a 
console.log(point) // { x: 10, y: 20, z: 30, d: 50 }



