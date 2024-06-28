// Array van de images met rappers en het juiste antwoord erbij << (Met behulp van Chiara)
const rappers = [
  { src: "images/Drake.png", name: "Drake" },
  { src: "images/JayZ.png", name: "JayZ" },
  { src: "images/Central.png", name: "Central Cee" },
  { src: "images/Kendrick.png", name: "Kendrick Lamar" },
  { src: "images/Skepta.png", name: "Skepta" },
  { src: "images/Stormzy.png", name: "Stormzy" },
  { src: "images/Ye.png", name: "Ye" },
  { src: "images/Dave.png", name: "Dave" },
];

// Elementen uit html aanroepen
const rapperElement = document.getElementById("rapper");
const feedbackElement = document.getElementById("feedback");
const answerInput = document.getElementById("answerInput");
const checkBtn = document.getElementById("checkBtn");
const correctSound = new Audio("sounds/goedgeluid.mp3");
const incorrectSound = new Audio("sounds/foutgeluid.mp3");

// Checkt het juiste antwoord
let currentRapperIndex = 0;

// Random rapper uit de array kiezen << (Met behulp van Chiara)
function getRandomRapper() {
  return Math.floor(Math.random() * rappers.length);
}

// Antwoord checken
function checkAnswer() {
    // Antwoord ophalen uit input
    const userAnswer = answerInput.value.trim();
    // Antwoord ophalen voor rapper die wordt getoond
    const correctAnswer = rappers[currentRapperIndex].name;
  // Feedback goede antwoord
  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Goed bezig!";
    correctSound.play();
    // Timer << (Met behulp van Lucas)
    setTimeout(() => {
      // Kiest random rapper
      currentRapperIndex = getRandomRapper();
      // Nieuwe rapper
      rapperElement.src = rappers[currentRapperIndex].src;
      // Maakt invoerveld leeg
      answerInput.value = "";
      // De feedback weghalen
      feedbackElement.textContent = "";
    }, 2000);
  } else {
    // Feedback foute antwoord
    feedbackElement.textContent = "Verkeerd antwoord, probeer het opnieuw.";
    incorrectSound.play();
  }
}

// Eventlistener om antwoord te controleren
checkBtn.addEventListener("click", checkAnswer);

// Bron afbeeldingen: Wikipedia

// 1. const
// 2. let
// 3. function
// 4. EventListeners
// 5. commentaar
// 6. bronnen
