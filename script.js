document.getElementById("startScreen").addEventListener("click", function () {

  // Hide start screen
  this.style.display = "none";

  // Play coin sound
  const sound = document.getElementById("coinSound");
  sound.volume = 0.5;
  sound.play().catch(() => {});

});
