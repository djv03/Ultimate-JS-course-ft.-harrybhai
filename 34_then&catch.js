let promise1= new Promise(function(resolve,reject){

    console.log("promise is pending");
    setTimeout(() => {
        // console.log("promise1 is resolved");
        resolve(true);
    }, 2000);
})
let promise2= new Promise(function(resolve,reject){
    
    console.log("promise is pending");
    setTimeout(() => {
        // console.log("promise is rejected at promise2");
        reject(new Error("problem has occured in our program"));
    }, 2000);
})

console.log(promise1,promise2);

//to get the value if get
promise1.then((bool)=>{
    console.log(bool);
})

//to get error if occure
promise2.catch((error)=>{
    console.log("some error occured in p2(from .catch syntext)");
    // due to this line line:16 will not print
    // coz we have catched the error
})