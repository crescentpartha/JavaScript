
// 57. Iterate Object Properties in JavaScript

var obj = {
    x: 40, 
    y: 60, 
    z: 75
}

// in Operator | return true or false (if Existing)
console.log('x' in obj) // true
console.log('p' in obj) // false


// for-in loop
for (var i in obj) {
    // console.log(i) // x y z
    // console.log(obj[i]) // 40 60 75
    console.log(i + ':' + obj[i]) // x:40 y:60 z:75
}




