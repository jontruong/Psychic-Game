//You have 9 guess. Guess a-z
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'];
var wins= 0;
var losses= 0;
var guesses= 9;


var resetguesses = function() {
    guesses = 9;
    document.querySelector('#game').innerhtml='';
}


document.onkeyup = function() {
    var userGuess = event.key;
    var yourGuess= userGuess;
    

    console.log(userGuess);

    var computerPick = letters[Math.floor(Math.random() * letters.length)];

    console.log(computerPick);
 {

if (userGuess === computerPick) {
    wins++;
    resetguesses();
} else if (userGuess !== computerPick) {
    guesses--;
} 

if (guesses == 0) {
    losses++;
    resetguesses();
}}

var html = 
"<p> wins:" + wins + "</p>" +
"<p> losses: " + losses + "</p>" + 
"<p> guesses: " + guesses + "</p>";


document.querySelector('#game'). innerHTML = html;
var yourGuess = " " + yourGuess;
if (guesses == 9) {
    document.querySelector("#guess").innerHTML = "Your guesses:";
} else {
document.querySelector("#guess").innerHTML += yourGuess;}


}