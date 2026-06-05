// Optional: play background sound
window.addEventListener("click", () => {
  const audio = document.getElementById("bg-sound");
  if (audio) {
    audio.volume = 0.4;
    audio.play().catch(() => {});
  }
}, { once: true });


// SCREEN 1 TIMING FLOW
setTimeout(() => {
  const screen1 = document.getElementById("screen1");

  screen1.classList.add("fade-out");

  setTimeout(() => {
    // Placeholder for Screen 2
    console.log("Go to Screen 2");

    // Later we will replace this with actual Screen 2 render
    // showScreen2();
  }, 1500);

}, 5000);
