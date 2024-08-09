let array=[7880000,"hi",4545645, true, 6767676]; 
//let array2:number[]=["ffgh",56768, 567678768]; // strict
// duplicate allowed, indexed collection
let salaryArray=new Array<number>();
salaryArray.push(78000,90000,67000,78000,34000,45000,90000);
salaryArray.push(78000);
//salaryArray.push("fifty thousand");
salaryArray.pop();

console.log("Popped element:"+salaryArray.pop());
console.log(salaryArray);
salaryArray.forEach(ele=>console.log(ele));
salaryArray.forEach((ele,i)=>console.log(ele+" "+i));  
salaryArray[2]=12000;  // index
salaryArray.splice(3,1);  //index
console.log(salaryArray);

let departments=new Array<string>();
departments.push('LD','DN', 'JS','UIUX');
departments.push('DN', 'JS');
//departments.push(345);
departments.pop();
/**
 *  push(...items : T[]):number{           T  number string
 *    // logic of pushing data in array
 *  }
 * 
 *  pop(): T | undefined {                 T  number string
 *   // login of popping data from array and returning
 *  }
 * 
 */