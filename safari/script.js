// =========================
// AUDIO START
// =========================

window.addEventListener("click", () => {
  const audio = document.getElementById("bg-sound");
  if (audio) {
    audio.volume = 0.4;
    audio.play().catch(() => {});
  }
}, { once: true });


// =========================
// SCREEN 1 → SCREEN 2
// =========================

setTimeout(() => {
  const screen1 = document.getElementById("screen1");
  const screen2 = document.getElementById("screen2");

  screen1.classList.add("fade-out");

  setTimeout(() => {
    screen1.style.display = "none";
    screen2.classList.remove("hidden");
  }, 1500);

}, 5000);


// =========================
// SCREEN 2 → SCREEN 3
// =========================

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cta")) {

    const screen2 = document.getElementById("screen2");
    const screen3 = document.getElementById("screen3");

    screen2.classList.add("fade-out");

    setTimeout(() => {
      screen2.style.display = "none";
      screen3.classList.remove("hidden");
    }, 1000);
  }
});


// =========================
// JOURNAL INTERACTION
// =========================

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("journal")) {

    const journal = document.querySelector(".journal");
    const text = document.getElementById("inviteText");

    journal.style.transform = "translate(-50%, -50%) scale(1.2)";
    journal.style.opacity = "0";

    setTimeout(() => {
      text.classList.remove("hidden");
    }, 700);
  }
});
