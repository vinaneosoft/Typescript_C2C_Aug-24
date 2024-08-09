class Father{
    dream():string{
        return "Doctor"
    }
}
class Mother{
    dream():string{
        return "Engineer"
    }
}

class Child extends Father, Mother{  // class multiple inheritance not allowed
    achieveDream(){
        this.dream(); // ambiguity
    }
}

interface FatherIntf{
    dream():string; // declare method
}
interface MotherIntf{
    dream():string;
}
class Child2 implements FatherIntf, MotherIntf{ // interface multiple inheritance allowed
    // function override and implemented
    dream(): string {
        return "Lawyer"
    }
}