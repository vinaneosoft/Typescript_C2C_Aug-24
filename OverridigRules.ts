import { NeoEmployee, NeoTrainer } from "./SingleInheritance"

class Department{
    getEmployee(): NeoEmployee  {
        return new NeoEmployee();
    }
    public getBudget():number{
        return 0
    }
    getDetails(deptId:number){

    }
}
class LDDepartment extends Department{
    getEmployee(): NeoTrainer  {
        return new NeoTrainer();
    }
    getBudget():number{
        return 0
    }
    getDetails(){
        
    }
}



// if super class method returning object, then subclass overriding method can return covarient of super return type
// if super class method return type is primitive then , we can not change in subclass o m ......
// if super class method void , any, unknown, then any (any, string, number, boolean, object) return type in subclass o.method...
// scope same , increased is allowed, but can not be decreased
// can not override private functions
// while overriding a method in subclass we can reduce parameter list
