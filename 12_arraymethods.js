//som imp array methods

//1. toString

let myarray=[1,34,23.6,"hello",null, undefined]
console.log(myarray.toString())

//2. join: join all the element using a separator

console.log(myarray.join("_"));//prints all ements of the aray with _ in it
console.log(myarray.join(" ")); //prints all ele of the array with space between in it
console.log(myarray.join("-> ")); //prints all ele of the array with arrow between in it

//Note : all the the above line has type string in it...check yourself 

//3. pop : removes the last ele of the array
// returns popped ele

//4. push: add the element at end of the array
//returns the array length

//5. shift: removes the beginning ele of the array
//6. unshift: add the beginning ele of the array

//7.concat: join the two array

let mynewarray1=[11,12,13,14];
let mynewarray2=[15,16,17,18,19];


let concatedarray=myarray.concat(mynewarray1,mynewarray2);
console.log("the concated array is: "+concatedarray);

// 8. sort: sort the array numerically and alphabatically

let city=["mumbai","kolkata","chennai","bangluru"];//this would be sort alphabatcally(ASCII code)
console.log(city.sort())

let unsorted=[12,111,3,55,4]
console.log(unsorted.sort());//this will show the strange behaviour of the as sort per dictionary wise

//9. splice

// splice is ultimate function for adding and delete the Element in the array

const numbers=[1,2,3,4,5,6];
numbers.splice(5,1,1001,1002);
// numbers.splice(konsi index pe ele add karne hai,kitne delete karne hai[starting from position mentioned in the argument 1], ele1, ele2, ele3...);
console.log(numbers);

//10. slice: slice the array from the index pased as argument1 to index pased as argument2

let arr=["a","b","c","d","e"];
let slicedarray=arr.slice(2,4);//index 2 ke bbad aur 4 ke pehle slice kar do 
// console.log(arr);----->popat!!! aese naya array print nahi hoga
// coz slice creates the new array and return it so we need to store them in the varible
console.log(slicedarray);
