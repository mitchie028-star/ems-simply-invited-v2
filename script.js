let unlocked = false;

/* PRESS START */
document.getElementById("startScreen").addEventListener("click", function () {

  this.classList.add("hide");

  setTimeout(() => {
    document.querySelector(".hero").classList.add("show");
  }, 600);

  setTimeout(initRSVPGame, 1200);
});

/* RSVP TRIGGER */
function initRSVPGame() {
  const rsvp = document.getElementById("rsvpSection");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !unlocked) {
        unlockRSVP();
        observer.disconnect();
      }
    });
  }, { threshold: 0.7 });

  observer.observe(rsvp);
}

/* UNLOCK SEQUENCE */
function unlockRSVP() {
  unlocked = true;

  document.body.classList.add("shake");

  const audio = new Audio("assets/coin.mp3");
  audio.play().catch(() => {});

  setTimeout(() => {
    document.getElementById("rsvpLock").style.display = "none";
    document.getElementById("rsvpForm").classList.remove("hidden");

    launchConfetti();
  }, 800);

  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 500);
}

/* CONFETTI */
function launchConfetti() {
  const end = Date.now() + 2000;

  (function frame() {
    confetti({
      particleCount: 6,
      spread: 80,
      startVelocity: 40,
      origin: { x: Math.random(), y: 0.6 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

/* SUBMIT */
function submitRSVP() {
  launchConfetti();
  alert("THANK YOU PLAYER! 🎮 RSVP RECEIVED");
}
