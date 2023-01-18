//in this tutorial we are going to learn about super key word

class Employee{
    constructor(name){
        this.name=name;
    }

    login(){
        console.log("employee has logged in");
    }
    logout(){
        console.log("employee has logged out");
    }

    requestLeaves(days){
        console.log(`leave granted for ${days} days`);
    }
}

class programmer extends Employee{

    requestLeaves(days){ //---->method is override here from parent class

        super.requestLeaves(days);//this line will bring whole requestLeaves method from parent class
        // and for do so we have to use "super" key word
        console.log("extra leave is credited");
        console.log(`total leave is ${days+1} coz you are valuable employee of company`);

    }

    requestDenied(days){
        super.requestLeaves(days);
        console.log(`your request for ${days} days has denied `)
    }
    
}

let e1= new programmer("dhruvin");
// e1.requestLeaves(5);
let e2= new programmer("mark");
// e1.requestLeaves(6);
e2.requestDenied(6);


