
// 54. Setting Object Properties in JavaScript

var point = {
    x: 10, 
    y: 20, 
    z: 15
}

console.log(point) // { x: 10, y: 20, z: 15 }

// 1. Updating properties value
point.x = 45
console.log(point) // { x: 45, y: 20, z: 15 }

// 2. Create new property, if doesn't exits
point.a = 65
console.log(point) // { x: 45, y: 20, z: 15, a: 65 }

// 3. If any property doesn't exit, but you want to show
console.log(point.d) // undefined

// 4. If you want to update properties value, based on user input --> Use Array Notation
point['y'] = 100

var prop = 'z'
point[prop] = 55
console.log(point) // { x: 45, y: 100, z: 55, a: 65 }



