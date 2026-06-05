let unlocked = false;

const startScreen = document.getElementById("startScreen");
const hero = document.querySelector(".hero");
const levelNumber = document.querySelector(".level-number");

const coinSound = document.getElementById("coinSound");
const fanfare = document.getElementById("fanfare");

/* PRESS START */
startScreen.addEventListener("click", () => {

  coinSound.play().catch(() => {});

  startScreen.classList.add("hide");

  setTimeout(() => {

    hero.classList.add("show");

    setTimeout(() => {
      coinSound.play().catch(() => {});
      levelNumber.classList.add("show");
    }, 500);

  }, 700);

});


/* AUDIO UNLOCK FIX (CRITICAL FOR VERCEL + BROWSERS) */
document.addEventListener("click", () => {
  coinSound.volume = 0.4;
  fanfare.volume = 0.4;
}, { once: true });


/* RSVP UNLOCK */
window.addEventListener("load", () => {

  const rsvp = document.getElementById("rsvpSection");

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting && !unlocked) {

        unlocked = true;

        document.getElementById("rsvpLock").style.display = "none";
        document.getElementById("rsvpForm").classList.remove("hidden");

        fanfare.play().catch(() => {});

        launchConfetti();
        screenShake();

      }

    });

  }, { threshold: 0.6 });

  observer.observe(rsvp);
});


/* RSVP SUBMIT */
function submitRSVP() {

  fanfare.play().catch(() => {});
  launchConfetti();

  document.getElementById("rsvpForm").classList.add("hidden");
  document.getElementById("victoryScreen").classList.remove("hidden");
}


/* CONFETTI */
function launchConfetti() {
  const end = Date.now() + 2500;

  (function frame() {
    confetti({ particleCount: 8, spread: 80, origin: { y: 0.7 } });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}


/* SHAKE */
function screenShake() {
  document.body.classList.add("shake");
  setTimeout(() => document.body.classList.remove("shake"), 700);
}
