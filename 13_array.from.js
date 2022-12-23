//this tutorial is about understanding how we are gonna convert something into the array?

let name="dhruvin";
let arr=Array.from(name);

let obj={
    key1:"value1",
    key2:"value2"
}
console.log(arr);
console.log(Array.isArray(arr) );

let objarr=Array.from(obj);
console.log(objarr);
console.log(Array.isArray(objarr) );


// so basically Array.from converts any iterable collection of element in javascript into the array like object,string,HTML collection(we'll discuss it further)