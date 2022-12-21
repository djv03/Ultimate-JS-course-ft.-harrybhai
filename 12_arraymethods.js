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
//5. unshift: add the beginning ele of the array
