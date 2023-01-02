// intro to callbacks

// callbacks are nothing but functions passed as argument

setTimeout(() => {

    console.log("timer printed")
    
}, 3000);


function play(callbackfunc){
    console.log("inside primary function")

    callbackfunc();
}
// here play is primary function which has just one task(it can be more also);
//  call the callback function passed into it;
// now this callback function could be random function


play(function run(person){
    console.log(person+" is running");
})

