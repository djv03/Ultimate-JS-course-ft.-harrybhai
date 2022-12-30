document.querySelector(".conatiner").insertAdjacentHTML('beforebegin',"<div>this is before begin</div>");
document.querySelector(".conatiner").insertAdjacentHTML("afterbegin","<div>this is after begin</div>");
document.querySelector(".conatiner").insertAdjacentHTML('beforeend',"<div>this is before end</div>");
document.querySelector(".conatiner").insertAdjacentHTML('afterend',"<div>this is after end</div>");

//so this fucking cool way to insert ele


// DJV analysis: this method might be more useful when we want something to mount elements to join the DOM after getting data from json/API
 //              (m taking about after end)
