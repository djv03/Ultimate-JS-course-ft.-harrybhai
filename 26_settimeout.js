 

let a=setTimeout(()=>{
     alert("time has ended");
    console.log("time ends");
 },2000)
//it returns timerID
 // in console it is showing some diff time as like 1828 or 2135
 //and it is based on the clicking ok in alert
 //I need to find out why

 clearTimeout(a);
 //clears the time out

 setInterval()

//  it is same as above but runs Infinity time at regular interval of time