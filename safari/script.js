
// =========================
// AUDIO (soft cinematic start)
// =========================
window.addEventListener("click", () => {
  const audio = document.getElementById("bg-sound");
  if (audio) {
    audio.volume = 0.25;
    audio.play().catch(() => {});
  }
}, { once: true });


// =========================
// GLOBAL SCREEN STATE
// =========================
const screens = ["screen1", "screen2", "screen3", "screen4", "screen5"];
let current = 0;


// helper: cinematic transition
function transitionTo(nextIndex, delay = 1200) {
  const currentScreen = document.getElementById(screens[current]);
  const nextScreen = document.getElementById(screens[nextIndex]);

  // fade OUT current (like camera pulling away)
  currentScreen.classList.add("cinematic-out");

  setTimeout(() => {
    currentScreen.style.display = "none";
    nextScreen.classList.remove("hidden");
    nextScreen.classList.add("cinematic-in");

    current = nextIndex;

    // remove animation class after play
    setTimeout(() => {
      nextScreen.classList.remove("cinematic-in");
    }, 1200);

  }, delay);
}


// =========================
// AUTO FLOW (Screen 1 → 2)
// =========================
setTimeout(() => {
  transitionTo(1);
}, 5000);


// =========================
// SCREEN 2 → 3 (CTA)
// =========================
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cta")) {
    transitionTo(2);
  }
});


// =========================
// SCREEN 3 → 4 (Journal reveal click)
// =========================
document.addEventListener("click", (e) => {
  if (e.target.id === "journal") {

    const journal = document.getElementById("journal");
    const text = document.getElementById("inviteText");

    journal.classList.add("journal-open");

    setTimeout(() => {
      text.classList.remove("hidden");
    }, 700);

    setTimeout(() => {
      transitionTo(3);
    }, 1800);
  }
});


// =========================
// SCREEN 4 → 5
// =========================
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("next-btn")) {
    transitionTo(4);
  }
});


// =========================
// SCREEN 5 CTA (future RSVP)
// =========================
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("rsvp-btn")) {
    alert("Final Screen: RSVP Form (next build)");
  }
});
