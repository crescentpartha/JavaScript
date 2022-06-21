
// 56. Comparing two object in JavaScript

var obj1 = {
    a: 10, 
    b: 20
}

var obj2 = {
    a: 10, 
    b: 20
}

// 1. Memory location different
console.log(obj1 == obj2) // false  

// 2. If same properties & same values
if (obj1.a == obj2.a && obj1.b == obj2.b) { 
    console.log(true) // true
}
else {
    console.log(false) // false
}

/* 3. Compare Object without individuals value's comparison: (JSON Notation --> JavaScript Object Notation)
        # JSON --> Convert Object properties value to string
        # JSON.stringify(x) --> Convert to a string
        # Then, Compare both string
*/

console.log(obj1) // { a: 10, b: 20 }
console.log(JSON.stringify(obj1)) // {"a":10,"b":20}

console.log(JSON.stringify(obj1) == JSON.stringify(obj2)) // true

obj1.a = 100
console.log(JSON.stringify(obj1) == JSON.stringify(obj2)) // false




