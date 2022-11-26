const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = [
  "application",
  "data structure",
  "programmer",
  "web developer",
  "meme time",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

console.log("selectedWords", selectedWord);
