let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

var guesses = document.querySelector(".guesses");
var lastResults = document.querySelector(".lastResults");
var lowOrHi = document.querySelector(".lowOrHi");

var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (userGuess === randomNumber) {
        alert("Congratulations this is the correct number!!!!");
    } else {
        alert("Sorry there is that number.");
    }
}

guessSubmit.addEventListener('click', checkGuess);
