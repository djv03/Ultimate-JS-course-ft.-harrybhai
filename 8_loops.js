//is tutorial me sabhi prakar ki loop ka varnan kiya gaya hai

let markobj={
    dhruvin:18,
    sahil:20,
    vipul: 22,
    harshil:15
}
for (const key in markobj) {
    // console.log("marks of " +key+" is: "+markobj[key]);
}

//so for-in is the modern loop which is available in javascript
//by which you can acess keys like this one 


//                                  for-of loops
let arr=[1,32,4,45,23];

for (const iterator of arr) {
    console.log("element at " + iterator +" is "+ arr[iterator]);
   
}
for (const iterator of markobj) {
    console.log("element at " + iterator +" is "+ arr[iterator]);
    //this will throw error 
    //which shows that objects are not iterable
}
for (const iterator of "thestring") {
    // console.log(iterator)//---->this will print all the character of the string separately means iterating each ele
}