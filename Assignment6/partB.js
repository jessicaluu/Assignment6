var limit = 1;
var number = Math.round(Math.random() * 100 + 1);

function checkGuess() {
    var guess = parseInt(document.getElementById("inputGuess").value);

    if (limit <= 10) {
        if (guess == number) {
            document.getElementById("output").innerHTML = "You got it! You win! The correct number was " + number + ".";
            limit = 1; 
            number = Math.round(Math.random() * 100 + 1);
        } else {
            if (guess < number) {
                document.getElementById("output").innerHTML = "Too low! Guess again.\nYou have " + (10 - limit) + " more guesses.";
            } else {
                document.getElementById("output").innerHTML = "Too high! Guess again.\nYou have " + (10 - limit) + " more guesses.";
            }
            limit++;
        }
    } else {
        if (guess != number) {
            document.getElementById("output").innerHTML = "Oh no. You ran out of guesses.. You lose. The number was " + number + ".";
            limit = 1;
            number = Math.round(Math.random() * 100 + 1);
        }
    }
}
