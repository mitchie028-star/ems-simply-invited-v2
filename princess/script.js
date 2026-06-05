let unlocked = false;

const startScreen = document.getElementById("startScreen");
const hero = document.querySelector(".hero");
const levelNumber = document.querySelector(".level-number");

const coinSound = document.getElementById("coinSound");
const fanfare = document.getElementById("fanfare");

/* =====================================
   PRESS START
===================================== */

startScreen.addEventListener("click", () => {

  coinSound.currentTime = 0;
  coinSound.play().catch(() => {});

  startScreen.classList.add("hide");

  setTimeout(() => {

    hero.classList.add("show");

    setTimeout(() => {

      coinSound.currentTime = 0;
      coinSound.play().catch(() => {});

      levelNumber.classList.add("show");

    }, 500);

  }, 700);

});


/* =====================================
   RSVP UNLOCK
===================================== */

window.addEventListener("load", () => {

  const rsvp = document.getElementById("rsvpSection");

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting && !unlocked) {

        unlocked = true;

        document.getElementById("rsvpLock").style.display = "none";

        document
          .getElementById("rsvpForm")
          .classList.remove("hidden");

        fanfare.currentTime = 0;
        fanfare.play().catch(() => {});

        screenShake();
        launchConfetti();

      }

    });

  }, {
    threshold: 0.6
  });

  observer.observe(rsvp);

});


/* =====================================
   SUBMIT RSVP
===================================== */

function submitRSVP() {

  fanfare.currentTime = 0;
  fanfare.play().catch(() => {});

  launchConfetti();

  document
    .getElementById("rsvpForm")
    .classList.add("hidden");

  document
    .getElementById("victoryScreen")
    .classList.remove("hidden");

}


/* =====================================
   CONFETTI
===================================== */

function launchConfetti() {

  const end = Date.now() + 2500;

  (function frame() {

    confetti({
      particleCount: 8,
      spread: 80,
      origin: { y: 0.7 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }

  })();

}


/* =====================================
   SCREEN SHAKE
===================================== */

function screenShake() {

  document.body.classList.add("shake");

  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 700);

}
