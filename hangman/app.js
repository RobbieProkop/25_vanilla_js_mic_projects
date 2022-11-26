const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = [
  "application",
  "data-structure",
  "programmer",
  "web-developer",
  // "meme-time",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ["-", "e", "m", "i", "t"];
const wrongLetters = [];

// show the hidden word
const displayWord = () => {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) =>
          // if (letter === " " && !correctLetters.includes(letter))
          //   correctLetters.push(letter);
          `
      <span class="letter">
        ${correctLetters.includes(letter) ? letter : ""}
      </span>`
      )
      .join("")}
  `;

  // used to remove the new line for each guess
  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === selectedWord) {
    finalMessage.innerText =
      "Good for you, you got it. Now go do something productive";
    popup.style.display = "flex";
  }
};

const updateWrondLettersEl = () => {};

const showNotification = () => {};

// key down event listning for letter press
window.addEventListener("keydown", (e) => {
  // if (e.keyCode >= 65 && e.keyCode <= 90)
  let letter = /[a-z]/i;
  const match = e.key.match(letter);
  if (!match) return;
  if (!selectedWord.includes(letter)) return;
  if (!wrongLetters.includes(letter)) {
    wrongLetters.push(letter);
    updateWrondLettersEl();
    return;
  }
  if (wrongLetters.includes(letter)) return;
  if (!correctLetters.includes(letter)) {
    correctLetters.push(letter);
    displayWord();
    return;
  }
  showNotification();
});

// runs after every guess
displayWord();
