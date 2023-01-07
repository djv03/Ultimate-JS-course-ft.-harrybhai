//this is practice set on promises

//q1 write a function which returns url as promise

const toloadscript=async (src)=>{
    let script= document.createElement("script");
    script.src=src;
    return new Promise((resolve,reject)=>{
        script.onload=()=>{
            resolve(src+ "--->succesfully fetched");
        }
        document.head.append(script);
    })
}
try {
    let a= toloadscript("https://rapidapi.com/");
    a.then((value)=>{
        console.log(value);
    
    })
    
} catch (error) {
    console.log("this is custom error");
}
// const mainfunc= async()=>{

//     console.log("programme starts running at: "+new Date().getMilliseconds());
//     let a= await toloadscript("https://rapbdhfbidapi.com/");
//     console.log(a);
//     console.log("programme end at: "+new Date().getMilliseconds());

// }
// mainfunc();