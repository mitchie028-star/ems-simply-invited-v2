let current = 1;

// loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1200);
});

// audio
window.addEventListener("click", () => {
  document.getElementById("jungle")?.play();
  document.getElementById("birds")?.play();
}, { once: true });

// NAVIGATION
function go(next) {
  document.getElementById(`screen${current}`).classList.add("hidden");
  document.getElementById(`screen${next}`).classList.remove("hidden");
  current = next;
}

// SCREEN FLOW
setTimeout(() => go(2), 5000);

document.addEventListener("click", (e) => {

  if (e.target.classList.contains("cta")) go(3);

  if (e.target.id === "journal") {
    document.getElementById("inviteText").classList.remove("hidden");
    setTimeout(() => go(4), 1500);
  }

  if (e.target.classList.contains("next-btn")) go(5);

  if (e.target.classList.contains("rsvp-btn")) go(6);
});
