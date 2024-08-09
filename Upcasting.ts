import { NeoEmployee, NeoTrainer } from "./SingleInheritance";

class Animal{
    eat():void{
        console.log("All Animals eat");        
    }
}
class Tiger extends Animal{
    tigerType:string;
    // inherited overriding 
    eat():void{
        console.log("Tigers eat other Animals");      
    }
}
class Sheep extends Animal{
    sheepType:string
    eat():void{
        console.log("Sheeps eat grass/ veg food");       
    }
    sleep(){
    }
}
let animal:Animal;

animal=<Animal>new Tiger();
animal.eat(); // tiger eat

animal=new Sheep();  // super type cast is implicit. no need to mention
animal.eat(); // sheep eat

let tiger=new Tiger();
let sheep=new Sheep();

commonMethod(tiger);
commonMethod(sheep);
function commonMethod(an:Animal){
    /** all animals allowed */
    /** if tiger comes here, eat must called of tiger, if sheep comes here eat must be called of*/ 
    an.eat(); // inherited overriding methods
}

let employee:NeoEmployee;
employee=new NeoTrainer();

let emp=<NeoEmployee>new NeoTrainer();