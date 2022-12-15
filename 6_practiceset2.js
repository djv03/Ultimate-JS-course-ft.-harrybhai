//q1 find whether the age of the person lies between 10 and 20 or not

// let age=prompt("enter your age");
// if(age>10 && age<20){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }

//q2 demonstarte the use of the switch statement is JS

// let num=prompt("enter any num between 1 to 5");//promt ek khhas baat ki ye koi bhi input as string hi return karta hai/
// num=Number.parseInt(num);// isliye humne isko idhar int me conver kiya

// switch (num) {
//     case 1:
//         console.log("you have selected 1")
    
//         break;
//     case 2:{
//         console.log("you have selected 2")
//     }
//         break;
//     case 3:{
//         console.log("you have selected 3")
//     }
//         break;

//     default:
//         console.log("invalid input")
//         break;
// }

// q3 get voting validation using ternary operator

let age=undefined;
let result=age>18 ?"you can vote": "you can not vote";

console.log(result);
