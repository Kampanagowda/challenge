/* ==========================
   INITIALIZE
=========================== */
window.onload = () => {
  document.querySelectorAll(".container").forEach(c => {
    c.style.display = "none"; // hide all
  });
  document.getElementById("screen0").style.display = "block"; // show first
};

/* ==========================
   NEXT SCREEN FUNCTION
=========================== */
function nextScreen(n) {
  document.querySelectorAll(".container").forEach(c => {
    c.style.display = "none";
  });
  document.getElementById("screen" + n).style.display = "block";

  if (n === 2) startGame();
  if (n === 3) startTimer();
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
    alert("Wrong 😈 She screams...");
  }
}

/* ==========================
   JUMP GAME
=========================== */
const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
let gameInterval;

function jump() {
  if (!player.classList.contains("jump")) {
    document.getElementById("jumpSound").play();
    player.classList.add("jump");
    setTimeout(() => player.classList.remove("jump"), 500);
  }
}

/* SPACE BAR FOR DESKTOP */
document.addEventListener("keydown", e => {
  if (e.code === "Space") jump();
});

/* TAP / CLICK FOR MOBILE AND DESKTOP */
const gameArea = document.querySelector(".game");
gameArea.addEventListener("click", e => {
  e.preventDefault(); // PREVENT any page reload
  jump();
});
gameArea.addEventListener("touchstart", e => {
  e.preventDefault(); // PREVENT mobile page reload
  jump();
});

/* START GAME */
function startGame() {
  gameInterval = setInterval(() => {
    const playerBottom = parseInt(getComputedStyle(player).bottom);
    const obsLeft = parseInt(getComputedStyle(obstacle).left);

    if (obsLeft < 60 && obsLeft > 0 && playerBottom < 40) {
      document.getElementById("scream").play();
      alert("You died 😵 Try again");
      location.reload();
    }
  }, 10);

  setTimeout(() => {
    clearInterval(gameInterval);
    nextScreen(3);
  }, 15000); // survive 15 seconds
}

/* ==========================
   TIMER
=========================== */
function startTimer() {
  let time = 10;
  const timer = document.getElementById("timer");
  document.getElementById("heartbeat").play();

  const t = setInterval(() => {
    timer.innerText = time;
    time--;

    if (time < 0) {
      clearInterval(t);
      document.getElementById("heartbeat").pause();
      setupEmail();
      nextScreen(4);
    }
  }, 1000);
}

/* ==========================
   EMAIL BUTTON
=========================== */
function setupEmail() {
  document.getElementById("emailBtn").href =
    "mailto:?subject=I survived the horror 😈&body=I passed every test and saved you ❤️";
}
