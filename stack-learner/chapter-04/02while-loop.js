
// 30. JS while loop

var i = 0
while (i < 10) {
    console.log('Crescent Partha')
    i++
}

var isRunning = true
while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log('Winner Winner Chicken Dinner')
        isRunning = false
    }
    else {
        console.log('You have got ' + rand)
    }
}

/* Output:
        You have got 6
        You have got 4
        You have got 10
        You have got 1
        You have got 10
        Winner Winner Chicken Dinner
*/
