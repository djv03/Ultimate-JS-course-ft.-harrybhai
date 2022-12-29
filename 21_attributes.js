//attibutes: vo jo sari chize HTML ko support karti hai render hone me
//      like hidden, id, alt(for images),style aur baki sari jo tag ke buch me lagi ho
let a= first.getAttribute("id");

console.log(a)

console.log(first.hasAttribute("id"))//this will return true
//coz HTML ele with id first has "id" attributes in it


console.log(first.hasAttribute("first"))//this will return false
//coz HTML ele with id first has no "first" attributes in it

first.setAttribute("display","none")
//this line will set the display attribute to none
// first.setAttribute("[attribute]","[value]")

// lline 14 can also be recode by
// first.setAttribute("hidden","true")
first.setAttribute("style","color: blue;")
//this will asign the style attribute to color:blue


document.getElementById("btn").removeAttribute("id")
//this line will remove the id attribute from button tag


//              make your own attributes: by using data-* notation

console.log(btn.dataset)




//  DJV observation

//  this set attributa can be very useful while adding class dynamically through JS(onlclick ya fir koi aur event listner)

