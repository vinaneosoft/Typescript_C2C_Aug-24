class Principal{
 static ref:Principal;
 principalName="Hari";
        private constructor(){

        }
        static getInstance(){
            if(Principal.ref==null)
                Principal.ref=new Principal();
            return Principal.ref
        }
}
console.log(Principal.ref); // null
let obj1=Principal.getInstance();
console.log(Principal.ref);
let obj2=Principal.getInstance();
let obj3=Principal.getInstance();
console.log(obj1);
console.log(obj2);

console.log(Principal.ref==obj1);
console.log(obj2==obj1);
obj1.principalName="Pari"
console.log(obj2);


class Employee{
    empId=123;
    empName="Mayur";
    static display(emp:Employee){
        console.log(emp.empId);
        console.log(emp.empName);
    }
}
let emp1=new Employee();
Employee.display(emp1);