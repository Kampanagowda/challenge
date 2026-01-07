let clicks = 0;

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
  const subject = encodeURIComponent("I saved my girlfriend 😍");
  const body = encodeURIComponent(
    "Hey ❤️\n\n" +
    "I entered the horror house 😈\n" +
    "Passed all the hurdles\n" +
    "And saved you 💕\n\n" +
    "This photo is my reward 😌"
  );

  document.getElementById("emailBtn").href =
    "mailto:?subject=" + subject + "&body=" + body;
}

function showScreen(num) {
  document.querySelectorAll(".container").forEach(div => {
    div.classList.add("hidden");
  });

  document.getElementById("screen" + num).classList.remove("hidden");
}
