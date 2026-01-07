let clicks = 0;

function checkRiddle() {
  const answer = document.getElementById("riddleAnswer").value.toLowerCase();
  if (answer.includes("phone") || answer.includes("mobile")) {
    showScreen(2);
  } else {
    alert("Wrong answer 😏 Try again");
  }
}

function clickHeart() {
  clicks++;
  document.getElementById("clickCounter").innerText = clicks + " / 10";

  if (clicks === 10) {
    showScreen(3);
    startCountdown();
  }
}

function startCountdown() {
  let time = 10;
  const timer = document.getElementById("timer");

  const interval = setInterval(() => {
    timer.innerText = time;
    time--;

    if (time < 0) {
      clearInterval(interval);
      showScreen(4);
      setupEmail();
    }
  }, 1000);
}

function setupEmail() {
  const subject = encodeURIComponent("I unlocked your surprise ❤️");
  const body = encodeURIComponent(
    "Hey ❤️\n\nI completed all your challenges 😏\n" +
      "This photo was my reward.\n\n" +
      "Sending it to myself so I never lose it 💕"
  );

  document.getElementById("emailBtn").href =
    "mailto:?subject=" + subject + "&body=" + body;
}

function showScreen(num) {
  document.querySelectorAll(".container").forEach((div) => {
    div.classList.add("hidden");
  });

  document.getElementById("screen" + num).classList.remove("hidden");
}
