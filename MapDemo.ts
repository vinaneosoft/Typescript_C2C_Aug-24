// key-value collection
// key : unique, value : duplicate allowed
// non-indexed collection


// Assume empId :key,  DeptId : value
let empMap=new Map<number, string>();
empMap.set(111,'DN')
empMap.set(121,'JS')
empMap.set(122,'UIUX')
empMap.set(111,'LD')
empMap.set(211,'LD')
empMap.set(311,'JS')
console.log(empMap);
// get, delete, size, has, clear
console.log("---------------");
let itr1=empMap.values(); // iterable on values
while(true){
    let entry=itr1.next();
    console.log(entry);
    if(entry.done)
        break; // loop break
    console.log(entry.value);  // value
}
console.log("---------------");
let itr2=empMap.keys();   // iterable on keys
while(true){
    let entry=itr2.next();
    console.log(entry);
    if(entry.done)
        break;
    console.log(entry.value); // key
}
console.log("---------------");

let itr3=empMap.entries();  // iterable on key value pair
while(true){
    let entry=itr3.next();
    console.log(entry);
    if(entry.done)
        break;
    console.log(entry.value); // key-value
}
console.log("---------------");
empMap.forEach((ele1,ele2)=>console.log(ele1+" "+ele2))