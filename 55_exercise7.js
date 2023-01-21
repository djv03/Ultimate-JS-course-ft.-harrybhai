// make a password generator

// a password must include
// 1. atleast 1 upper char
// 2. atleast 1 lower char
// 3. atleast 1 special char
// 4. min lenght of 8 character


// djv solution:
//  make array of capital and small and special characters
// use math.random on a loop which iterate 8 times

// let capital=["A","B","C","D","E"];
let capital="ABCDEFG";

console.log(Array.isArray(capital));
let small=["a","b","c","d","e"];
let special_char=["@","#","$","%","&","?","!"];

let password=[];

//selection random from above 3 arrays

for (let index = 0; index < 9; index++) {
    let random=Math.floor( Math.random()*5);
    // console.log(random);
    password[index]=capital[random];
    // console.log(password[index]);
}

console.log(password);
// let passwordF=password.toString();
let passwordF=concate(password);
console.log(passwordF);

function concate(arr){
    for (let i = 0;i < arr.length;i++) {
        arr[i]=arr[i]+"";
        console.log(arr[i]);
    }
}

// let a=1;
// let b="b";
// let c=a+b;
// let d=c+1;
// console.log(c);
// console.log(typeof c);
// console.log(d);