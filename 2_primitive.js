// in this tutorial we are gonna see the what primitive and non primitive data types are in js

// there are total 7 types of primitive data type in js
//  and these are: nn bb ss u
//  number null   boolean bigInt   string symbol   undefined
//no they are not related to each other but just to group them which makes them easy to remember

let a=10;

let b=null;

let c=Boolean(0);//prints false
let c_2= Boolean(1);// prints true
let c_3=Boolean(9876);//also prints true

let d= BigInt(100)+BigInt(500);

let e="dhruvin";

let f=Symbol("I am symbol");

let g=undefined

console.log(a,b,c,d,e,f,g);

//  the diff b/w null and undefined

// consider this example
// suppose we have a box with nothing in it then we can say it has 0 balls
// if it has 10 balls then we can say we have 10 balls

//simillarly in container of the varible there can be 3 possibility of stored data
// a value (like 1 ,name,interger) , not any value , not any type
// then they have stored value as value ,null and undefined;

//NOTE: untill no defined all the varible stores undefined in it
// for ex:
let h;
console.log(h);//------>prints "undefined"