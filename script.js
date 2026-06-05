document.getElementById("startScreen").addEventListener("click", function () {

  // hide start screen
  this.classList.add("hide");

  // reveal hero (cutscene effect)
  setTimeout(() => {
    document.querySelector(".hero").classList.add("show");
  }, 600);

  // init confetti observer
  setTimeout(initRSVPConfetti, 1200);
});

function initRSVPConfetti() {
  const rsvp = document.getElementById("rsvpSection");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        launchConfetti();
        observer.disconnect();
      }
    });
  }, { threshold: 0.6 });

  observer.observe(rsvp);
}

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
