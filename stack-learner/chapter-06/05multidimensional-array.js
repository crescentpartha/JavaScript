
// What is Multidimensional Array?

/* 
    Array Dimension:
    1 Dimension: var arr = []
    2 Dimension: var arr = [ [], [] ]
    3 Dimension: var arr = [ [ [], [] ], [] ]
            OR
                var arr = [ 
                    [ 
                        [], [] 
                    ], 
                    [] 
                ]
*/

// Two Dimensional Array

var arr = [
    [78, 71, 80, 90], 
    [80, 75, 90, 86], 
    [71, 75, 79, 95]
]

console.log(arr) // [ [ 78, 71, 80, 90 ], [ 80, 75, 90, 86 ], [ 71, 75, 79, 95 ] ]
console.log(arr[0]) // [ 78, 71, 80, 90 ]
console.log(arr[1]) // [ 80, 75, 90, 86 ]
console.log(arr[0][0]) // 78
console.log(arr[1][0]) // 80

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        // console.log(arr[i][j]) // 78 80 78 71 80 90 80 75 90 86 71 75 79 95
        console.log('Element ' + i + '(' + j + ') : ' + arr[i][j])
    }
}

/* Output:
        Element 0(0) : 78
        Element 0(1) : 71
        Element 0(2) : 80
        Element 0(3) : 90
        Element 1(0) : 80
        Element 1(1) : 75
        Element 1(2) : 90
        Element 1(3) : 86
        Element 2(0) : 71
        Element 2(1) : 75
        Element 2(2) : 79
        Element 2(3) : 95
*/


