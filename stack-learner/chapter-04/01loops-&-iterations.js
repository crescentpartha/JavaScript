
// 28. Introduction to Loops & Iterations

/* 
    1. Loops are Statements that execute some block of code repeatedly until the condition becomes false.

    # There are mainly three types of loops:
        1. for loop
        2. while loop
        3. do while loop
    In JavaScript, there also other types of loops:
        1. for of loop
        2. for in loop
    
    # Loops & Conditions are two main fundamental concepts of core programming.
*/

// 29. For Loop in Js

// for (initialition, condition, increment/decrement) {

// }

for (var i = 0; i < 10; i++) {
    console.log( (i+1) + ' Crescent Partha');
}

// for (var i = 1; i <= 100; i++) {
//     if (i % 2 == 1) { // odd number
//         console.log(i)
//     }
// }

// for (var i = 1; i <= 100; i++) {
//     if (i % 2 == 0) { // even number
//         console.log(i)
//     }
// }

var sum = 0; 
for (var i = 1; i <= 10; i++) {
    console.log(sum + ' + ' + i + ' = ' + (sum+i))
    sum += i
}
console.log('result = ' + sum);

