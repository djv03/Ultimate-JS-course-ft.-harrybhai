//this tutorial is about innerHTML

console.log(document.querySelector("#btn").innerHTML);

let x=btn.innerHTML;
console.log("this is from varible x: "+x)
//basically it prints all the HTML inside ele with id btn, even nested html 
//this returns the string

console.log(document.querySelector("#btn").outerHTML);
let y=document.querySelector("#btn").outerHTML;
btn.outerHTML="<div>this is div</div>"

console.log("this is from varible y: "+y)
//basically it prints all the HTML of id=btn 


// textcontent

console.log(document.body.textContent);
//this will get the all the HTML-Tags of the body
