let current = 1;

function show(n){
  document.getElementById("scene" + current).classList.remove("active");
  document.getElementById("scene" + n).classList.add("active");
  current = n;
}

function next(){
  show(current + 1);
}

/* JOURNAL */
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
