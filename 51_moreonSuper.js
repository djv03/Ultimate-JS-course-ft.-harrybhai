//in this tutorial we are going to learn about super key word

class Employee{
    constructor(name){
        this.name=name;
        console.log(`${name} from employee class`)
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
    // ----->default behaviour of constructor in child class
    // constructor(...args){
    //     super(...args);
    // }

    constructor(name,section){
        super(name);//step1--> call super class(mendatory)

        //step2----> defining class varibles
        this.name=name;
        this.section=section;

         //step3---> defining constructor methods
        console.log( `constructor of ${name} from ${section} department`)
        console.log(name);
    }
//basically this constructor enables to define varibles which is upto to the progammer class only

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

let e1= new programmer("dhruvin", "sales");
// e1.requestLeaves(5);
// let e2= new programmer("mark");
// e1.requestLeaves(6);
// e2.requestDenied(6);


//IMP rule : for calling constuctor

// defualt behaviour:
// for child classes constructor is build automatically if not created

//coder behaviour
// for child classes you must use super if you are defining your own constructor



