export class BankAccount{
    constructor(
        public accountType="current",
        public accountBalance=0, 
        public customerId=0, 
        public accountNumber=0
    ){}

    depositMoney(amount:number):number{
     this.accountBalance=this.accountBalance+amount;
     return this.accountBalance;
    }
 
    withdrawMoney(amount:number):number{
     if(amount>=this.accountBalance)
         this.accountBalance=this.accountBalance-amount;
     else
         throw new Error("Insufficient Balance");
     return this.accountBalance;
    }
 }

export let bankName="Axis Bank";

export function changeBank(bank:string){
    bankName=bank;
}

 // axisbank