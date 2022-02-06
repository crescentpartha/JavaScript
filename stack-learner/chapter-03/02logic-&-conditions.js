
// 20. JS Logic & Conditions

/* 
There are four options 
    1. if condition 
    2. else condition 
    3. else if condition
    4. switch statement 
*/

// 21. JS If condition

// Conditional Operator 

var a = 30
var b = 200

// a > b true false
// if (condition) {
//     // code 
// }

if (a > b) {
    console.log(a + ' is greater than ' + b)
}

if (a < b) {
    console.log(b + ' is greater than ' + a);
}

var n = 50

if (n%2 == 0) {
    console.log(n + ' is Even Number')
}

if (n%2 == 1) {
    console.log(n + ' is Odd Number')
}

// 22. JS Else Condition

a = 10
b = 20

if (a > b) {
    console.log('A is greater than B')
}
else {
    console.log('B is greater than A');
}

n = 50

if (n%2 == 0) {
    console.log(n + ' is Even Number')
}
else {
    console.log(n + ' is Odd Number')
}


// 23. JS Else If condition

a = 20
b = 20

if (a > b) {
    console.log('A is greater than B')
}
else if (a < b) {
    console.log('B is greater than A');
}
else {
    console.log('They both are same number')
}

n = 1

if (n == 0) {
    console.log(n + ' is zero')
}
else if (n%2 == 0) {
    console.log(n + ' is Even Number')
}
else {
    console.log(n + ' is Odd Number')
}


// 24. JS Switch Statement

var date = new Date()

// 0 - Sunday, 1 - Monday, 2 - Tuesday
// date.getDay() --> return current day 
var today = date.getDay()

// switch (today) {
switch (8) {
    case 0: 
        console.log('Today is Sunday')
        break
    
    case 1: 
        console.log('Today is Monday')
        break
    
    case 2: 
        console.log('Today is Tuesday')
        break
    
    case 3: 
        console.log('Today is Wednesday')
        break
    
    case 4: 
        console.log('Today is Thursday')
        break
    
    case 5: 
        console.log('Today is Friday')
        break
    
    case 6: 
        console.log('Today is Saturday')
        break
    default:
        console.log('Not a Valid Number')
}

