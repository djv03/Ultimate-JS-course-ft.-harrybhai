//hey guys, in this tutorila we r gonna see the Array in  JS

//Array is collection of the simillar items but congrats this is not true in JS

//you can have any of the seven primitive data type in the JS in your array
// and surprise...surprise...surprise, we can also store the objects in the array (only in JS) 

//so build the one

let obj={
    key1:"value1",
    key2:"value2"
}
let myarray=[1,34,23.6,"hello",null, undefined,obj];
console.log(myarray)

//heren you have to declare as same as you aere doing with the varibale
//so array is nothing but the varibale with countinous memory location

//now let us find out the tyoe of the array

console.log(typeof myarray);//woohoo! array is not has tyoe as same as object
console.log(typeof obj);//this also prints the object 

//SO how to determine whether given varible is object or not??

console.log(Array.isArray(myarray));//prints true
console.log(Array.isArray(obj));//prints flse