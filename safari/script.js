let current = 1;

function showScene(n){

  const prev = document.getElementById("scene" + current);
  const next = document.getElementById("scene" + n);

  if(!next) return;

  if(prev) prev.classList.remove("active");
  next.classList.add("active");

  current = n;
}

/* NEXT FLOW */
function next(){
  showScene(current + 1);
}

/* JOURNAL INTERACTION */
document.addEventListener("click", (e)=>{

  if(e.target.id === "journal"){
    document.getElementById("inviteText").style.display = "block";

    setTimeout(()=>{
      next();
    }, 1200);
  }

});

/* SUBMIT */
function submit(){
  alert("RSVP sent!");
}
