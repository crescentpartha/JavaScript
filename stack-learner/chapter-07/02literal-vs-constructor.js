
// 51. Object Literal vs Constructor in JS

/* 
    Object Property = key:value pair | name:value pair
*/

var obj = {}
console.log(obj) // {}
console.log(typeof obj) // object

obj.x = 10
console.log(obj) // { x: 10 }

// 1. Object Literal

var point = {
    x: 10, 
    y: 20
}
console.log(point) // { x: 10, y: 20 }

point.y = 30
point.z = 50
console.log(point) // { x: 10, y: 30, z: 50 }

// 2. Object Constructor (Used in OOP)

var obj1 = Object()
obj1.a = 10

var obj2 = new Object()
obj2.b = 20

console.log(obj1) // { a: 10 }
console.log(obj2) // { b: 20 }



