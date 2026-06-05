let current = 1;

function show(n){

  const prev = document.getElementById("scene" + current);
  const next = document.getElementById("scene" + n);

  if(prev) prev.classList.remove("active");
  if(next) next.classList.add("active");

  current = n;
}

function next(){
  show(current + 1);
}

/* JOURNAL INTERACTION */
document.addEventListener("click", (e)=>{

  if(e.target.id === "journal"){
    document.getElementById("inviteText").classList.remove("hidden");

    setTimeout(()=>{
      next();
    }, 1000);
  }

});

/* RSVP */
function submitRSVP(){
  alert("RSVP sent!");
}
