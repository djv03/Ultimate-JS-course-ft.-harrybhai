let promise1= new Promise((resolve,reject)=>{
    
    // alert("promise is pending");
    setTimeout(() => {
        resolve(1);
    }, 2000);
})

promise1.then(()=>{
    console.log("congrats! this promise1 has solved");

    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve(56);
        }, 3000);
    })
}).then((val)=>{
    console.log(val);
})

