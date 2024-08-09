class College{
  //properties
  public collegeId=567;
  private collegeBudget=6788888888;
  protected collegeRank=1;
}

class Department{
  // properties
}
class BankAccount{

}

let collegeName="Lokmanya Tilak College"
let principalName="ABC";
export {College,Department, BankAccount};

export default collegeName;  
//A module cannot have multiple default exports
//export default principalName;  