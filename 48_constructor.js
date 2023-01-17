//this tutorial is about constructor in JS


//bring that same codefrom tutorial 47

class myForm{
    constructor(name,department,year){
        
        this.mera_name=name;
        this.mera_dept=department;
        this.mera_year=year;
        
        console.log("constructor called "+ name+" "+department);
    }
    
        name(){
            // let name=prompt("enter your name");
            // alert(`you enterd the database with username: ${name}`);
            console.log(name);
        }
        
        dept(){
            let department=prompt("enter your department");
            alert(`your department is: ${department}` )
            console.log(department);
            
        }
        year(){
            let year=prompt("enter your year");
            console.log(year);
        }

        preview(){
            alert(`please check your details: name:${this.mera_name}, department:${this.mera_dept},year:${this.mera_year}`)
        }
}


let dhruvin=new myForm("dhruvin", "it",3);
let sahil=new myForm("sahil","aero",3);
let randomuser=new myForm("random","mech",1);
//here constructor is called when object is created
//despite of fact that no method is called

// dhruvin.name();
// dhruvin.dept();

dhruvin.preview();
sahil.preview();
