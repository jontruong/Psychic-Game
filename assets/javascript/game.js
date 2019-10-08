//You have 9 guess. Guess a-z
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'];
var wins= 0;
var losses= 0;
var guesses= 9;


document.onkeyup = function() {
    // var userGuess = event.key;
    var userGuess =String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userGuess);

    var computerPick = letters[Math.floor(Math.random() * letters.length)];

    console.log(computerPick);

if (userGuess === computerPick) {
    wins++;
} else if (userGuess !== computerPick) {
    guesses--;
} 
if (guesses = 0) {
    losses++;
}

var html = 
// "<p> Press a key to start playing </p>" + "<p> wins:" + wins + "</p>" +
"<p> losses: " + losses + "</p>" + 
"<p> guesses: " + guesses + "</p>" +
"<p> User Guess: " + userGuess + "</p>";

document.querySelector('#game'). innerHTML = html;

}
