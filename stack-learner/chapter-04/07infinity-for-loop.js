
// 35. Infinity for Loop

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

for (; ;) {
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
    You have got 10
    You have got 3
    You have got 8
    You have got 10
    You have got 4
    Winner Winner Chicken Dinner
*/
