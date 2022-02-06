
// 018. JS Date Functions | Date Objects

var date = new Date()
console.log(date); // 2022-02-06T14:15:39.886Z
console.log(date.toDateString()) // Sun Feb 06 2022
console.log(date.toTimeString()) // 20:21:50 GMT+0600 (Bangladesh Standard Time)
console.log(date.toLocaleString()) // 2/6/2022, 8:21:50 PM
console.log(date.toLocaleDateString()) // 2/6/2022

console.log(date.getFullYear()) // 2022
console.log(date.getMonth()) // 1 (February)
console.log(date.getDate()) // 6

console.log(date.getHours()) // 20
console.log(date.getMinutes()) // 27
console.log(date.getSeconds()) // 22


