let obstacleInterval;

function next(n) {
  document.querySelectorAll(".container").forEach(c => c.classList.add("hidden"));
  document.getElementById("screen" + n).classList.remove("hidden");

  if (n === 2) startGame();
  if (n === 3) startTimer();
}

function checkRiddle() {
  const ans = document.getElementById("riddle").value.toLowerCase();
  if (ans.includes("house")) {
    next(2);
  } else {
    document.getElementById("scream").play();
    alert("Wrong 😈 She screams...");
  }
}

/* JUMP GAME */
const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");

document.addEventListener("keydown", e => {
  if (e.code === "Space") jump();
});

function jump() {
  if (!player.classList.contains("jump")) {
    document.getElementById("jumpSound").play();
    player.classList.add("jump");
    setTimeout(() => player.classList.remove("jump"), 500);
  }
}

function startGame() {
  obstacleInterval = setInterval(() => {
    const playerTop = parseInt(getComputedStyle(player).top);
    const obsLeft = parseInt(getComputedStyle(obstacle).left);

    if (obsLeft < 60 && obsLeft > 0 && playerTop >= 140) {
      document.getElementById("scream").play();
      alert("You died 😵 Try again");
      location.reload();
    }
  }, 10);

  setTimeout(() => {
    clearInterval(obstacleInterval);
    next(3);
  }, 15000);
}

/* TIMER */
function startTimer() {
  let time = 10;
  document.getElementById("heartbeat").play();

  const t = setInterval(() => {
    document.getElementById("timer").innerText = time;
    time--;
    if (time < 0) {
      clearInterval(t);
      document.getElementById("heartbeat").pause();
      setupEmail();
      next(4);
    }
  }, 1000);
}

function setupEmail() {
  document.getElementById("emailBtn").href =
    "mailto:?subject=I survived the horror 😈&body=I passed every level and saved you ❤️";
}
