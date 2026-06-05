// AUDIO
window.addEventListener("click", () => {
  const audio = document.getElementById("bg-sound");
  if (audio) {
    audio.volume = 0.4;
    audio.play().catch(() => {});
  }
}, { once: true });


// SCREEN 1 → 2
setTimeout(() => {
  document.getElementById("screen1").classList.add("fade-out");

  setTimeout(() => {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").classList.remove("hidden");
  }, 1500);

}, 5000);


// SCREEN 2 → 3
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cta")) {
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen3").classList.remove("hidden");
  }
});


// SCREEN 3 → 4
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("invite-text")) {
    document.getElementById("screen3").style.display = "none";
    document.getElementById("screen4").classList.remove("hidden");
  }
});


// SCREEN 4 → 5
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("next-btn")) {
    document.getElementById("screen4").style.display = "none";
    document.getElementById("screen5").classList.remove("hidden");
  }
});


// SCREEN 5 RSVP
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("rsvp-btn")) {
    alert("Next: RSVP Form (Final Screen)");
  }
});
