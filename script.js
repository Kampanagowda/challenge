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
  document.getElementById("screen" + n).style.display = "block";

  if (n === 2) startCountdownTerror();
  if (n === 3) setupFakeButton();
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
  let counter = 10;
  const counterEl = document.getElementById("terrorCounter");
  const saveBtn = document.getElementById("saveBtn");

  const interval = setInterval(() => {
    counter--;
    counterEl.innerText = counter;
    if (counter <= 0) {
      clearInterval(interval);
      document.getElementById("scream").play();
      showScaryPopup("She is gone 💀");
      setTimeout(() => nextScreen(3), 2000);
    }
  }, 1000);

  saveBtn.onclick = () => {
    counter -= 2;
    if (counter < 0) counter = 0;
    counterEl.innerText = counter;
  };
}

/* ==========================
   FAKE HORROR BUTTON
=========================== */
function setupFakeButton() {
  const fakeBtn = document.getElementById("fakeBtn");
  fakeBtn.onclick = () => {
    document.body.style.background = "red";
    document.getElementById("scream").play();
    showScaryPopup("She screamed 😱");
    setTimeout(() => {
      document.body.style.background = "black";
      nextScreen(4);
    }, 2000);
  };
}

/* ==========================
   PASSWORD PUZZLE
=========================== */
function checkPassword() {
  const input = document.getElementById("passwordInput").value.toLowerCase();
  const password = "emir"; // example: her name backwards
  if (input === password) {
    nextScreen(5);
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
    nextScreen(6);
  } else {
    document.getElementById("scream").play();
    showScaryPopup("Wrong door! She screams 😱");
  }
}
