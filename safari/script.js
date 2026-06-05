console.log("Safari JS loaded");

let current = 1;

function show(n) {
  document.getElementById("scene" + current).classList.remove("active");
  document.getElementById("scene" + n).classList.add("active");
  current = n;
}

document.addEventListener("click", () => {
  if (current < 6) {
    show(current + 1);
  }
});

function submitRSVP() {
  alert("RSVP sent!");
}
