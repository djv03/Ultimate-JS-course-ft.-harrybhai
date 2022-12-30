
document.querySelector("#first").className="bg-black textwhite";
//this will add class bg-black & textwhite to navbar
// drawback: remove all existing class



console.log("intial list of classList:")
console.log(document.querySelector('#first').classList);// now this is something great
//line:7 will show me the list of all the class which is contained by the element with class "navbar"

document.querySelector("#first").classList.add("font-bold");
// this will add font-bold class to the class list of element with class "navbar";
console.log("after adding font-bold: ");
console.log(document.querySelector("#first").classList);


document.querySelector("#first").classList.remove("font-bold");
// this will remove font-bold class to the class list of element with class "navbar";
console.log("after removing font-bold: ");
console.log(document.querySelector("#first").classList);


document.querySelector("#first").classList.toggle("font-bold");
//toggle the class if present then remove and vice-versa


// document.querySelector("#first").classList.contains("font-bold")
// returns true or false based on the whether ele contains that class or not
if (document.querySelector("#first").classList.contains("font-bold")) {
    console.log("we are inside if")
    
} else {
    console.log("we are inside else")
    
}


//DJV observation:

// I will figure out why .toggle is not working on personal portfolio website

