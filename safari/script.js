console.log("Safari loaded");

let current = 1;

function showScene(n) {
  document.getElementById("scene" + current).classList.remove("active");
  document.getElementById("scene" + n).classList.add("active");
  current = n;
}

/* WAIT FOR FULL LOAD (CRITICAL SAFARI FIX) */
window.addEventListener("load", () => {

  document.body.addEventListener("click", () => {

    if (current < 6) {
      showScene(current + 1);
    }

  });

  document.getElementById("submitBtn").addEventListener("click", () => {
    alert("RSVP Sent!");
  });

});
