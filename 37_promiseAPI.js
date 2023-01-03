//this tutorial is about how we are gonna use some methods of promise 

let promise1= new Promise((resolve,reject)=>{
    
    // alert("promise is pending");
    setTimeout(() => {
        resolve(1);
    }, 1000);
})
let promise2= new Promise((resolve,reject)=>{
    
    // alert("promise is pending");
    setTimeout(() => {
        resolve(2);
    }, 2000);
})
let promise3= new Promise((resolve,reject)=>{
    
    // alert("promise is pending");
    setTimeout(() => {
        resolve(3);
    }, 3000);
})

// let all_promises= Promise.all([promise1,promise2,promise3]);----->returns all the returns of promise

// let all_promises= Promise.allSettled([promise1,promise2,promise3]);//
// ------>returns status of all the promises

// let all_promises= Promise.race([promise1,promise2,promise3]);
//------>returns value of promise which is returned first or error if fastest ge error

let all_promises= Promise.any([promise1,promise2,promise3]);//------>returns value of promise which is returned first as well as resolved


all_promises.then((val)=>{

    console.log(val);
})