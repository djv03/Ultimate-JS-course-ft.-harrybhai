//this tutorial  is about what is "object orientation" in javascript

// classes in OOP

class myForm{
    name(){
        let name=prompt("enter your name");
        console.log(name);
    }
    
    dept(){
        let department=prompt("enter your department");
        console.log(department);

    }
    year(){
        let year=prompt("enter your year");
        console.log(year);
    }
}

//creating object of class
//means, a copy of class template which is specified for user 'dhruvin'
let dhruvin = new myForm();

let sahil= new myForm();

//and this process can be replicate for any number of user
let randomuser= new myForm();

//calling "functionalities" of objects "dhruvin"
dhruvin.name();
dhruvin.dept();
dhruvin.year();
//these functionalities is called "methods" in OOP terminology

randomuser.name();
randomuser.dept();


// SUMMERY:
//  so the class has certain template which can be bring into existance by making "object" of it and we can use "methods" to uses it functionality 