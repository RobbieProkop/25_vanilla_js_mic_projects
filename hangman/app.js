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

const correctLetters = ["-"];
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

const updateWrongLettersEl = () => {
  console.log("update wrong");
};

const showNotification = (message) => {
  notification.classList.add("show");
  notification.innerHTML = `
    <p>${message}</p>
  `;
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
};

// key down event listning for letter press
window.addEventListener("keydown", (e) => {
  let letter = null;
  if (e.keyCode >= 65 && e.keyCode <= 90) letter = e.key;
  console.log("letter", letter);
  if (letter === null) return showNotification("letter not valid");
  if (!selectedWord.includes(letter) && !wrongLetters.includes(letter)) {
    wrongLetters.push(letter);
    updateWrongLettersEl();
    return;
  }
  if (!selectedWord.includes(letter) && wrongLetters.includes(letter))
    return showNotification("Letter has already been guessed");
  if (!correctLetters.includes(letter)) {
    correctLetters.push(letter);
    displayWord();
    return;
  }
  showNotification("Letter has already been guessed");
});

// runs after every guess
displayWord();
