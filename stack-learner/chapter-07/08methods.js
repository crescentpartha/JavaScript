
// 58. Object Methods in JavaScript

var obj = {
    x: 40, 
    y: 60, 
    z: 75
}

console.log(Object.keys(obj)) // [ 'x', 'y', 'z' ]
console.log(Object.values(obj)) // [ 40, 60, 75 ]
console.log(Object.entries(obj)) // [ [ 'x', 40 ], [ 'y', 60 ], [ 'z', 75 ] ]

// Doesn't copy in this way

var obj2 = obj
obj2.x = 70
obj2.y = 100

console.log(obj) // { x: 70, y: 100, z: 75 }
console.log(obj2) // { x: 70, y: 100, z: 75 }

// Copy/Clone in this way

var obj3 = Object.assign({}, obj)
obj3.x = 90

console.log(obj) // { x: 70, y: 100, z: 75 }
console.log(obj3) // { x: 90, y: 100, z: 75 }



