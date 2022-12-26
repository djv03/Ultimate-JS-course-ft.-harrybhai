
//all the DOM methods

document.getElementsByClassName("hii").innerHTML = "this is changed by DOM manupulation";

//finding HTML elements

document.getElementById("id")	
document.getElementsByTagName("tagname")	 
document.getElementsByClassName("class")	

//changing HTML element

element.innerHTML =  "new html content"//replace the text of selected ele
element.attribute = new value
element.style.property = new style
// ex

element.style.fontSize = "2rem";

// document.getElementsByTagName("a").setAttribute(href, "https://facebook.com/");
document.getElementsByClassName("link").href= "https://youtube.com/"

//Adding and deleting HTML element

document.getElementById("time").innerHTML =   Date(); 

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  addEventListener