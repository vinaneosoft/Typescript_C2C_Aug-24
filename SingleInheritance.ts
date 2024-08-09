class NeoEmployee{
    employeeId:number;
    employeeName:string;
    deptId:string;
    basicSalary:number;
    protected experience:number;
    getGrossSalary():number{
        // ta : 5%, da: 10% hra 12 % // bs+ta+da+hra
        return this.basicSalary+0.05*this.basicSalary+0.1*this.basicSalary+0.12*this.basicSalary;
    }
    getNetSalary():number{
        // pf: 2% bs
        return this.getGrossSalary()-0.02*this.basicSalary
    }
}

class NeoTrainer extends NeoEmployee{
    trainingTechnologies:string[]
    payPerHr=500;
    getVariablePay(extrahrs){
        return this.payPerHr*extrahrs;
    }
}

class NeoManager extends NeoEmployee{

}

class TechnicalTrainer extends NeoTrainer{
  
}

console.log("------EMPLOYEE---------------");

let neoemployee=new NeoEmployee();
neoemployee.employeeId=999;
neoemployee.deptId="DN";
neoemployee.employeeName="Kumar";
neoemployee.basicSalary=56000;
/** Property 'experience' is protected and only accessible within class 'NeoEmployee' and its subclasses */
//neoemployee.experience=10;
console.log(neoemployee.getGrossSalary());
console.log(neoemployee.getNetSalary());
console.log(neoemployee);
console.log("------TRAINER---------------");
let trainer=new NeoTrainer();
trainer.employeeId=888;
trainer.employeeName="Mayura";
trainer.basicSalary=56000;
trainer.deptId="LD";
trainer.trainingTechnologies=['JAVA','HTML','Javascript','Bootstrap'];
console.log(trainer.getVariablePay(40));
console.log(trainer.getGrossSalary()); // super class method
console.log(trainer.getNetSalary()); // super class method
console.log(trainer);