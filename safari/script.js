let current = 1;

function go(next) {
  document.getElementById(`scene${current}`).classList.add("hidden");
  document.getElementById(`scene${next}`).classList.remove("hidden");
  current = next;
}

/* loader */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1200);
});

/* FLOW */
setTimeout(() => go(2), 4500);

/* interactions */
document.addEventListener("click", (e) => {

  if (e.target.classList.contains("cta")) {
    go(3);
  }

  if (e.target.id === "journal") {
    document.getElementById("inviteText").classList.remove("hidden");
    setTimeout(() => go(4), 1400);
  }

  if (e.target.classList.contains("next")) {
    go(5);
  }

  if (e.target.classList.contains("rsvp")) {
    go(6);
  }

});
