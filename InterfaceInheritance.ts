interface FatherIntf{
    dream():string;
    hobbies():string;
}

interface MotherIntf{
    dream():string;
    timeSchedule():void;
}
// rule : mulitple interfaces can be implement by one class , if method signature in those
// interfaces in same then override that method one time but 
// if method name is same and signature is difft then, error occurs. In this case at a time
// we can not implement those interfaces
class Child implements FatherIntf, MotherIntf{
    hobbies(): string {
        return "singing"
    }
    timeSchedule(): void {
        
    }
    dream(): string {
       return "Lawyer";
    }
   
}

interface StackIntf{
    push(e:number):number;
    pop():number;
    display():void
}

interface QueueIntf{
    insert(e:number):number;
    remove():number;
    display():void
}

interface DequeInterface extends QueueIntf{
    insertFront(e:number):number;
    removeLast():number;
}

class Deque implements DequeInterface{
    insertFront(e: number): number {
        throw new Error("Method not implemented.");
    }
    removeLast(): number {
        throw new Error("Method not implemented.");
    }
    insert(e: number): number {
        throw new Error("Method not implemented.");
    }
    remove(): number {
        throw new Error("Method not implemented.");
    }
    display(): void {
        throw new Error("Method not implemented.");
    }
    
}

// rule : mulitple interfaces can be extended by another interface , if method signature in those
// interfaces is same then another interface can inherit it one time
// if method name is same and signature is difft then, error occurs. In this case at a time
// we can not extend those multiple interfaces
interface MixIntf extends StackIntf, QueueIntf{
    // empty
}

/** class can extend one class
 * class can implement many interfaces
 * interface can extend many interfaces
 */

/** 
 * class B{}
 * class A implements B  : wrong
 * 
 * 
 * interface B{}
 * class A implements B   : right
 * 
 * interface C{}
 *  interface D implements C : wrong
 * 
 *  interface E extends B,C  : right
 * 
 * class M extends A implements B : right
 * 
 * class M implements B extends A : wrong
 * 
 * class X{} class Y{}
 * interface Z extends X,Y   : wrong
 */


interface A{
    test1():void;
    demo():number;
   // welcome():string;
}

interface B{
    test2():number;
    demo():number;
  // welcome():number;
}

/** Interface 'C' cannot simultaneously extend types 'A' and 'B'.
  Named property 'welcome' of types 'A' and 'B' are not identical. */
interface C extends A,B{
    test3():string;
}

class ABC implements C{
    demo(): number {
        throw new Error("Method not implemented.");
    }
    test3(): string {
        throw new Error("Method not implemented.");
    }
    test1(): void {
        throw new Error("Method not implemented.");
    }
    test2(): number {
        throw new Error("Method not implemented.");
    }
    
}