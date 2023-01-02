let promise= new Promise(function(resolve,reject){

    alert (" I am alert ");
    resolve(56);
})

console.log("hello 1");

setTimeout(() => {
    console.log("hello 2")
    
}, 2000);

console.log("hello 3");

console.log(promise);