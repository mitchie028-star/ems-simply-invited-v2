```javascript
console.log("Safari content loaded");

let current = 1;

function showScene(next){

  document
    .getElementById("scene"+current)
    .classList.remove("active");

  document
    .getElementById("scene"+next)
    .classList.add("active");

  current = next;
}

window.addEventListener("load",()=>{

  document.body.addEventListener("click",(e)=>{

    if(
      e.target.tagName==="INPUT" ||
      e.target.tagName==="TEXTAREA" ||
      e.target.tagName==="BUTTON"
    ){
      return;
    }

    if(current<6){
      showScene(current+1);
    }

  });

  document
    .getElementById("submitBtn")
    .addEventListener("click",()=>{

      alert("RSVP Sent!");

    });

});
```
