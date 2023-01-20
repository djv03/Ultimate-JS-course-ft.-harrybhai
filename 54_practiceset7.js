// practice set 7

// q1 create a class to create a complex number create a constructor to set the real and complex part

class Complex{
    constructor(real,imaginary){
        this.real=real;
        this.imaginary=imaginary;
        console.log("constructor is called")
    }

    show(){
        console.log(`your complex no is: ${this.real} + ${this.imaginary}i`);
    }

    add(complex){
        // this.real=this.real+complex.real;
        // this.imaginary=this.imaginary+complex.imaginary;

        // return (new Complex( `sum is: ${this.real+complex.real}+${this.imaginary+complex.imaginary}i` ))
        return (new Complex(this.real+complex.real,this.imaginary+complex.imaginary ))


    }
}

let complex1= new Complex(3,4);
complex1.show();
let complex2= new Complex(5,5);

let sum =complex1.add(complex2);
console.log(`sum is: ${sum.real}+${sum.imaginary}i`);

// q2 write a method to add two complex no