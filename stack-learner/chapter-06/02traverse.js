
// 44. Array Traversing 

var arr = [3, 34, 23, 54, 53, 44, 63, 33]

// arr[0]
// arr[1]
// arr[arr.length -1]

var sum = 0, result = 0
for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    arr[i] += 2
    sum += arr[i]
    if (arr[i] % 2 == 0) {
        console.log(arr[i])
        result += arr[i]
    }
}
console.log(arr) // [ 5, 36, 25, 56, 55, 46, 65, 35 ]
console.log(sum) // 323
console.log(result) // 138


