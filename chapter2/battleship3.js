var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;



var randomLoc = Math.floor(Math.random() *5);
var location1 = randomLoc;
var location2 = randomLoc +1;
var location3 = randomLoc +1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (Enter a number from 1 to 6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid number!");

    } else {
        guesses = guesses + 1;

        if (guess = randomLoc) {
            alert("Hit!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battle ship!")
            }
        }

    }


}


