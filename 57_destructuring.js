// array destructuring and spread operator

//this is very cool feature of JS that you can reversely give the ele of array to indexes
//let us see this with an example

let arr=[2,4,6,5,5,48,484,25];
console.log(arr);

// if you want to store the ele of arr into another arrlet2

let  [a,b,c,...rest]=arr;
// ... operator merges all ele in itself which is not destructures yet
//IMP: ... operator stores value as array
//you can check this by line 15
console.log(Array.isArray(rest));

// console.log(a);
console.log(arr);
console.log(rest);


//coverting array in to object

let myarr=["dhruvin","sahil","vipul"];
let myobj={...myarr};
console.log(myarr);

console.log(Array.isArray(myobj));
//line 28 proves that this is not obj

// now let us take an INTERESTING example of how ...can be very useful

//Q- make a programme which gives sum of numbers enters by user

let user=prompt("how many numbers you want to add");
let i=0;
while( i<user){
    let input=prompt(`enter number ${i+1}`);
     let sumarr=[...input];

     let sum=0;

    sum=sum+sumarr[i];
    
    
    i++;
    
    console.log(sum);
    console.log(sumarr);
}