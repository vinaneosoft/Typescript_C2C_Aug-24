let cname;   // any
cname="cccc"
cname=1111
cname=true

let address="fhdjhdghkfjhj"; // strict

let lname:string; // strict   type annotations
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

let xyz=89; // number

// named function, annonymous function, arrow function
function test1():number  // type annotations
{
    return 10;
}
function test2():void{
   // return 10;
}
const multiply = function (num1:number, num2:number) : number{
    return num1 * num2;
}

const add = (a: number, b: number): number => a + b;

const upperstring = (str:string): string => str.toUpperCase();

let city:any;
city="Koparkhairane";
console.log(city.slice(5.7));
console.log((<string>city).slice(5,7)); //intellisense


let empcode="344555";
let ecode=(<number>(<any>empcode))



let a:unknown;
a=567;
a="hi";

let b: any
b=567;
b="hi";