/* ==========================
   INITIALIZE
=========================== */
window.onload = () => {
  document.querySelectorAll(".container").forEach(c => c.style.display = "none");
  document.getElementById("screen0").style.display = "block";
};

/* ==========================
   NEXT SCREEN
=========================== */
function nextScreen(n) {
  document.querySelectorAll(".container").forEach(c => c.style.display = "none");
  const screen = document.getElementById("screen" + n);
  screen.style.display = "block";

  if (n === 2) startCountdownTerror();
}

/* ==========================
   RIDDLE
=========================== */
function checkRiddle() {
  const ans = document.getElementById("riddleAnswer").value.toLowerCase();
  if (ans.includes("house")) {
    nextScreen(2);
  } else {
    document.getElementById("scream").play();
    showScaryPopup("Your girlfriend is being stabbed 😱🔪💀");
  }
}

/* ==========================
   SCARY POPUP
=========================== */
function showScaryPopup(msg) {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerText = msg;
  document.body.appendChild(popup);
  setTimeout(() => document.body.removeChild(popup), 2000);
}

/* ==========================
   COUNTDOWN TERROR
=========================== */
function startCountdownTerror() {
  const screen2 = document.getElementById("screen2");
  screen2.style.display = "block";

  let counter = 10;
  const counterEl = document.getElementById("terrorCounter");
  const saveBtn = document.getElementById("saveBtn");

  counterEl.innerText = counter;

  if (window.terrorInterval) clearInterval(window.terrorInterval);

  window.terrorInterval = setInterval(() => {
    counter--;
    counterEl.innerText = counter;

    if (counter <= 0) {
      clearInterval(window.terrorInterval);
      document.getElementById("scream").play();
      showScaryPopup("She is gone 💀");
      setTimeout(() => nextScreen(3), 2000);
    }
  }, 1000);

  // Button click/tap decreases counter
  saveBtn.onclick = saveBtn.ontouchstart = (e) => {
    if (e) e.preventDefault();
    counter -= 2;
    if (counter < 0) counter = 0;
    counterEl.innerText = counter;
  };
}

/* ==========================
   PASSWORD PUZZLE
=========================== */
function checkPassword() {
  const input = document.getElementById("passwordInput").value.toLowerCase();
  const password = "alka"; // YOUR PASSWORD
  if (input === password) {
    nextScreen(4);
  } else {
    document.getElementById("scream").play();
    showScaryPopup("Wrong password 😱🔪💀");
  }
}

/* ==========================
   CHOICE HORROR
=========================== */
function choiceHorror(isCorrect) {
  if (isCorrect) {
    nextScreen(5); // final reward
    const music = document.getElementById("achievement");
    music.currentTime = 0;
    music.play();
  } else {
    document.getElementById("scream").play();
    showScaryPopup("Wrong door! She screams 😱");
  }
}
