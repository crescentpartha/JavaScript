
// 33. JS Break Statement

// var isRunning = true
// while (isRunning) {
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if (rand == 9) {
//         console.log('Winner Winner Chicken Dinner')
//         isRunning = false
//     }
//     else {
//         console.log('You have got ' + rand)
//     }
// }

/* --------------------------------------------
     Break Statement is the Alternative here
 ---------------------------------------------- */

while (true) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log('Winner Winner Chicken Dinner')
        break
    }
    else {
        console.log('You have got ' + rand)
    }
}

/* Output:
    You have got 4
    You have got 4
    You have got 8
    You have got 10
    You have got 8
    Winner Winner Chicken Dinner
*/

for (var i = 1; i < 10; i++) {
    if (i % 5 == 0) {
        break
    }
    else {
        console.log(i)
    }
}

/* Output:
    1
    2
    3
    4
*/
