let randowNumber = Math.floor(Math.random() * 100) + 1;
console.log(randowNumber);

var guesses = document.querySelector(".guesses");
var lastResults = document.querySelector(".lastResults");
var lowOrHi = document.querySelector(".lowOrHi");

var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;



