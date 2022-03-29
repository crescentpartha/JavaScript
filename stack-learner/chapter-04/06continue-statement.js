
// 34. JS Continue Statement

// A continue statement ends the current iteration of a loop. Simply skip the iteration.

for (var i = 0; i < 10; i++) {
    if (i == 3 || i == 7) {
        continue
    }
    else {
        console.log(i)
    }
}

/* Output:
    0
    1
    2
    4
    5
    6
    8
    9
*/
