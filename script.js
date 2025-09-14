// ==========================
// PART 2: JAVASCRIPT FUNCTIONS
// ==========================

// 1. Function with parameters + return value
function getRandomColor() {
  // Generates random hex color
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 2. Local vs global scope demo
let counter = 0; // global
function doubleCounter(localValue) {
  return localValue * 2; // purely local calculation
}

// Button triggers random color
document.getElementById("randomColorBtn").addEventListener("click", () => {
  const box = document.querySelector(".animated-box");
  const newColor = getRandomColor();
  box.style.background = newColor;
  document.getElementById("functionResult").textContent =
    "Box color changed to " + newColor;
});

// Button doubles the counter
document.getElementById("doubleCounterBtn").addEventListener("click", () => {
  counter++;
  let doubled = doubleCounter(counter);
  document.getElementById("functionResult").textContent =
    `Counter = ${counter}, Doubled = ${doubled}`;
});

// ==========================
// PART 3: COMBINING CSS + JS
// ==========================

// Animate box on button click
document.getElementById("triggerBoxBtn").addEventListener("click", () => {
  const box = document.querySelector(".animated-box");
  box.classList.remove("move-box"); // reset if needed
  void box.offsetWidth; // trick to restart animation
  box.classList.add("move-box");
});

// Popup modal controls
const popup = document.getElementById("popup");
const popupBtn = document.getElementById("popupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");

popupBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});
closePopupBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
