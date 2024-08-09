// unique collection, non indexed collection

let cities=new Set<string>();
cities.add("mumbai")
cities.add("Solapur")
cities.add("mumbai")
//cities.add(7989);
cities.add("Thane")
cities.add("Pune")
cities.add("pune")
console.log(cities);

console.log(cities.has('Pune'));
console.log(cities.delete('Pune'));
console.log(cities.has('Pune'));
console.log(cities.size);
cities.forEach(ele=>console.log(ele))

let empids=new Set<number>();
empids.add(456);
empids.add(116);
empids.add(457);
empids.add(356);
empids.add(456); // duplcate override
console.log(empids);

let itr1=cities.values();

while(true){
    let entry=itr1.next();
    console.log(entry);
    if(entry.done)
        break;
    console.log(entry.value);
}
console.log("---------------");
let itr2=cities.keys(); // set is not key-value pair collection
while(true){
    let entry=itr2.next();
    console.log(entry);
    if(entry.done)
        break;
    console.log(entry.value);
}
console.log("---------------");

let itr3=cities.entries(); // set is not key-value pair collection so key==value
while(true){
    let entry=itr3.next();
    console.log(entry);
    if(entry.done)
        break;
    console.log(entry.value);
}

let cityArray=new Array<string>('Mumbai','mumbai','Pune','Thane', "Pune");
let citySet=new Set<string>(cityArray);
console.log(citySet);

/**
 *  add(value:T){
 *       // logic to add element in Set
 *  }
 * 
 *  has(value: T): boolean{
 *      // logic to check availability of value in set
 *  }
 */