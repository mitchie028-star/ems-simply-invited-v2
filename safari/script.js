let currentScene = 1;

/* =========================
   SCENE SWITCHER (SAFARI ONLY)
========================= */

function goScene(next) {

  const currentEl = document.getElementById(`scene${currentScene}`);
  const nextEl = document.getElementById(`scene${next}`);

  if (!currentEl || !nextEl) return;

  currentEl.classList.add("hidden");
  nextEl.classList.remove("hidden");

  currentScene = next;
}

/* =========================
   AUTO START FLOW
========================= */

window.addEventListener("load", () => {

  // cinematic delay before starting
  setTimeout(() => {
    goScene(2);
  }, 3000);

});

/* =========================
   USER INTERACTIONS (SCOPED SAFARI)
========================= */

document.addEventListener("click", (e) => {

  const target = e.target;

  // CTA button (Scene 2 → Scene 3)
  if (target.classList.contains("safari-cta")) {
    goScene(3);
  }

  // Journal click (Scene 3 → Scene 4)
  if (target.id === "journal") {
    const invite = document.getElementById("inviteText");

    if (invite) {
      invite.classList.remove("hidden");
    }

    setTimeout(() => {
      goScene(4);
    }, 1200);
  }

  // Next buttons
  if (target.classList.contains("safari-next")) {
    goScene(5);
  }

  // RSVP button
  if (target.classList.contains("safari-rsvp")) {
    goScene(6);
  }

});
