let cname;   // any
cname="cccc"
cname=1111
cname=true

let address="fhdjhdghkfjhj"; // strict

let lname:string; // strict
lname="pawar";  // try to assign incompatible value

let lastname:String;
lastname=new String(lname);  // wrapping

lname=lastname.valueOf();  // unwrapping


let empid:number;
empid=56;

let employeeId:Number;
employeeId=new Number(empid); // wrapping

empid=employeeId.valueOf(); // unwrapping

let married:boolean;
married=true;;

let marriedStatus:Boolean;
marriedStatus=new Boolean(married); // wrapping

// make unwrapping


// named function, annonymous function, arrow function