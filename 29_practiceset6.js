console.log("script is running");

//q1 diff alerts when diff buttons are cliked

document.querySelector('#btn').addEventListener('click',()=>{

    alert("you have clicked the button");

})

document.querySelector('#mybulb').addEventListener("click",()=>{
console.log("clicked");
    
    
})

setInterval(()=>{
    document.getElementById('mybulb').classList.toggle('bulb');
},1000)