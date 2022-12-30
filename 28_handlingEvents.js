

let x= function(eventhandler){
    console.log(eventhandler);
    //list of things which can be seen on clicking events
    //some of them are:

    //1.
    console.log(eventhandler.target);
    //this will return the element which is targeted by the click event

    //2.
    console.log(eventhandler.clientX,eventhandler.clientY);
    //above line will print coordinated of click position and it is fucking great

    
    console.log("from function x");
}
let y=function(){
    console.log("from function y")
}

btn.addEventListener("click",x)
btn.addEventListener("click",y)
