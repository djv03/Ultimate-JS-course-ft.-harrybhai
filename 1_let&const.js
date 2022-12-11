                                                    //this tutorial is about use of variable in the js
            //we can create a varible in the js with the help of the 3 keywords

                                                    // 1. var
var a=10;
var a=12;
{
  var a=14
}
console.log(a);
console.log("");

                                                    //2. let
let b=20;
// let b=30;---->aesa aap nahi kar sakte
//name of the varible declared with the "let" cant be use again
{
    let b=30;
    console.log(b);
}
console.log(b);

//updating b
b=40;
console.log("after updation value of b is: "+b);



                                                    //3. const
const pi=3.14;
//  pi=45;---->this statement is also throws error inlike let
//coz varible declared with the "const" can not be updated neither can use varible name again
{
    const pi=3;
    console.log("in the block,value of the pi is: "+pi);
}
console.log(pi);


// GENERAL RULES WHILE GIVING NAME TO THE VARIBLE

// 1. cant use JS reserve words to give name
//      ex: var this=10; is invalid code coz "this" is already written in the JS dictionary

// 2. name cant be start with the number
// 2. cant have space and special character(line #,%,& etc) in anywhere in the name
// 4. can have underscore 

