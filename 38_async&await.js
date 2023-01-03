async function Mausam(){

    let delhiWeather= new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 degree");
        }, 2000);
    })
    let mumbaiWeather= new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("35 degree");
        }, 5000);
    })

    console.log("fetching delhi wheather");
    let DW=await delhiWeather;
    console.log("temperature of delhi is "+DW);


    console.log("fetching mumbai wheather");
    let MW=await mumbaiWeather;
    console.log("temperature of mumbai is "+MW)

    return [DW,MW];
}

let MausamAnswer= Mausam();
console.log(MausamAnswer);

//here async=> denotes the function that it is asynchronous,means there is no guarantee that all lines of code will return as same as they written

// here await=> await means that delhiWeather should wait for other function to execute and then return both DW and MW together

//[try this with removing async await, you'd get one promise is pending and other is fullfill at 3sec]
// but this case is not possible while using async await

//NOTE: functions written with async always returns the promise