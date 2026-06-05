// Enable sound on first interaction
window.addEventListener("click", () => {
  const audio = document.getElementById("bg-sound");
  if (audio) {
    audio.volume = 0.4;
    audio.play().catch(() => {});
  }
}, { once: true });


// SCREEN TRANSITION: 1 → 2
setTimeout(() => {
  const screen1 = document.getElementById("screen1");
  const screen2 = document.getElementById("screen2");

  screen1.classList.add("fade-out");

  setTimeout(() => {
    screen1.style.display = "none";
    screen2.classList.remove("hidden");
  }, 1500);

}, 5000);


// CTA BUTTON
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cta")) {
    alert("Next: Screen 3 - Jungle Journal Opening");
  }
});
