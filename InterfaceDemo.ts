
interface DeveloperIntf{
    employeeId:number | string;
    departmentId:string;
    experience?:number;
    showDetails():void;
    getExperience?():number;
}
class NeoDeveloper implements DeveloperIntf{
    employeeId: string;
    departmentId:string;
    showDetails(): void {
      console.log("NeoDeveloper Details");
    }
    
}
class WebWerksDeveloper implements DeveloperIntf{
    employeeId:number;
    departmentId: string;
    experience:number;
    showDetails(): void {
        console.log("WebWerksDeveloper Details");
    }
    getExperience(): number {
        return this.experience;
    }
}

let developer:DeveloperIntf;
developer=new NeoDeveloper();
developer.employeeId=111;
developer.departmentId="JS";
developer.showDetails();

developer=new WebWerksDeveloper();
developer.employeeId=123;
developer.departmentId="UIUX"
developer.showDetails();