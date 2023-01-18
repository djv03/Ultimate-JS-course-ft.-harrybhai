//this tutorial is about inheritance in JS
// basically about "extend" keyword

class Animal{
    constructor(specie,country){
        this.specie=specie;
        this.country=country;

    }
    run(){
        console.log(this.specie+" is running and it is in "+this.country)
    }
    liveIn(place){
        console.log(this.specie+" lives in "+place);
    }
     
}
class raptiles extends Animal{

    liveIn(){
        console.log("they live in holes");
    }
}

let monkey= new Animal("chempanzee","thailand" );
monkey.run();

let whale= new Animal ("whale", "pacific");
whale.run();
whale.liveIn("water");

let snake= new raptiles("snake","indian cobra");
snake.liveIn();
snake.run();

//SUMMERY: extends key words use to gain acess of all methods and constructor of the parent class

// you can even change the methods of parent class(as we have done with the liven() method )
