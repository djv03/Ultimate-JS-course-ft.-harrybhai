//Q 1-create a varible of type string and add number to it
console.log("script is running")
let a=10;
let b="kya halchal?";
let ans=a+b;
console.log(ans);

//Q 2-find data type of above output

console.log(typeof ans);
//the answer is the string

//Q 3-create a const object in JS.can you change it to hold a number later

let myobj={
    "name":"dhruvin",
    "age":19,
    "hobbies":"coding"
};
// myobj=3;
console.log(myobj)

//Q 4-try to add a new key to the const object in Q3, r u able to do it?

myobj['collage']="svit";
//this is how we can add a new key:value pair in object 
console.log(myobj);//in this object we have collage attribute is added

//Q 5- write a js programme to create a dictionary of 5 words

let dictionary={
    enormous:"very large in size, quantity, or extent",
    agile:"able to move quickly and easily",

}
console.log(dictionary.enormous);
console.log(dictionary['agile']);
//these both ways we can acess key:value pair 