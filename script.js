/*
    Code adapted from course material by Morten Rand-Hendriksen found at
    https://www.linkedin.com/learning/javascript-essential-training-3
*/

// Select all elements representing the clock hands
const SECONDHAND = document.querySelector("#second");
const MINUTEHAND = document.querySelector("#minute");
const HOURHAND = document.querySelector("#hour");

var secondNumberOfTurns = 0
var minuteNumberOfTurns = 0
var hourNumberOfTurns = 0

function updateClockHands() {
    // Determine current time
    var now = new Date();

    // Calculate the degrees of rotation for all clock hands
    var secondPosition = now.getSeconds() * 6
    var minutePosition = now.getMinutes() * 6 + 0.1 * now.getSeconds()
    var hourPosition = now.getHours() * 30 + 0.5 * now.getMinutes()

    if (secondPosition == 0) { secondNumberOfTurns++ }
    if (minutePosition == 0) { minuteNumberOfTurns++ }
    if (hourPosition == 0) { hourNumberOfTurns++ }

    secondPosition = now.getSeconds() * 6 + secondNumberOfTurns * 360
    minutePosition += minuteNumberOfTurns * 360
    hourPosition += hourNumberOfTurns * 360

    // Rotate the clock hand elements to bring the clock hands in the right positions
    SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)"
    MINUTEHAND.style.transform = "rotate(" + minutePosition + "deg)"
    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)"
}

updateClockHands()
setInterval(updateClockHands, 1000)