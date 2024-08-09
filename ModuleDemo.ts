import {BankAccount, bankName, changeBank} from './Modules/axisbank';
import {BankAccount as HdfcAccount, bankName as bank} from './Modules/hdfcbank';
import * as mycollege from './Modules/college';
import  college from './Modules/college'; // collegeName ==> college

let axisaccount1=new BankAccount("savings",23000, 4500, 6666666666);  // default constructor : no parameters
let axisaccount2=new BankAccount("salary");
console.log(axisaccount1);
axisaccount1.accountType="salary"; // no issue
console.log(axisaccount2);

console.log(bankName);
//bankName=new String("Axis Bank Ltd"); // error

//let newbank=bankName;
//newbank="Axis Bank Ltd";  // solution 1

changeBank("new name");
console.log(bankName);

let hdfcaccount1=new HdfcAccount("savings",45000, 676, 77777);  // default constructor : no parameters
let hdfcaccount2=new HdfcAccount("salary");
console.log(hdfcaccount1);
console.log(hdfcaccount2);
console.log(bank);

let collegeaccount=new mycollege.BankAccount();
let dpt=new mycollege.Department();
console.log(college);

let college1=new mycollege.College();
console.log( college1.collegeId);  // public
console.log( college1.collegeBudget);  // private
console.log( college1.collegeRank);  // protected

//1. import with {}
//2. import with {} and alias
//3. import *  with prefix
//4. default export, import without {}
//5. Cannot assign to imported variables because it is an import.