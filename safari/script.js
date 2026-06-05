let current = 1;

function show(n){
  document.getElementById("scene" + current).classList.remove("active");
  document.getElementById("scene" + n).classList.add("active");
  current = n;
}

/* CLICK ANYWHERE STARTS FLOW */
document.addEventListener("click", () => {

  if(current === 1){
    show(2);
    return;
  }

});

/* AUTO FLOW AFTER SCENE 2 */
setTimeout(() => {
  if(current === 2) show(3);
}, 3500);

/* AUTO FLOW AFTER SCENE 3 */
setTimeout(() => {
  if(current === 3) show(4);
}, 7000);

/* BUTTON FREE FLOW SUPPORT */
function submitRSVP(){
  alert("RSVP sent!");
}
