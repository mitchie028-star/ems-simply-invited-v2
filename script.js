let unlocked = false;

/* PRESS START */
document.getElementById("startScreen").addEventListener("click", () => {

  document.getElementById("startScreen").classList.add("hide");

  setTimeout(() => {

    document.querySelector(".hero").classList.add("show");

    setTimeout(() => {
      document.querySelector(".level-number").classList.add("show");
    }, 500);

  }, 600);
});

/* RSVP UNLOCK */
window.addEventListener("load", () => {
  const rsvp = document.getElementById("rsvpSection");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !unlocked) {

        unlocked = true;

        document.getElementById("rsvpLock").style.display = "none";
        document.getElementById("rsvpForm").classList.remove("hidden");

        const audio = new Audio("assets/fanfare_super_mario.mp3");
        audio.play().catch(() => {});

        launchConfetti();
      }
    });
  }, { threshold: 0.6 });

  observer.observe(rsvp);
});

/* SUBMIT RSVP */
function submitRSVP() {

  const audio = new Audio("assets/fanfare_super_mario.mp3");
  audio.play().catch(() => {});

  launchConfetti();

  document.getElementById("rsvpForm").classList.add("hidden");
  document.getElementById("victoryScreen").classList.remove("hidden");
}

/* CONFETTI */
function launchConfetti() {
  const end = Date.now() + 1500;

  (function frame() {
    confetti({ particleCount: 6, spread: 70 });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}
