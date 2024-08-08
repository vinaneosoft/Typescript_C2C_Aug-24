// captical case Bank, Account, BankAccount
var varname = 899;
// no any accessmodifier allowed for class
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.accountNumber = 0;
        this.custId = 0;
        this.accountType = "savings";
        this.accountBalance = 0;
        this.xyz = function () {
            console.log("annonymous");
        };
        this.arrow = function () {
            console.log("arrow function");
        };
    }
    BankAccount.prototype.depositMoney = function (amount) {
        this.accountBalance = this.accountBalance + amount; // this current object : compulsory
        return this.accountBalance;
    };
    BankAccount.prototype.withdrawMoney = function (amount) {
        if (amount <= this.accountBalance)
            this.accountBalance = this.accountBalance - amount;
        else
            throw new Error("Insufficient Balance");
        return this.accountBalance;
    };
    return BankAccount;
}());
var account1; // custom Data types
account1 = new BankAccount(); // default constructor : no parameters // default values
var account2 = new BankAccount();
console.log(account1);
console.log(account1.accountNumber);
console.log(account2);
console.log(account2.custId);
account1.accountBalance = 45000; // state change
account2.accountBalance = 89000; // diff memory
console.log(account1.accountBalance);
console.log(account2.accountBalance);
account1.depositMoney(10000); // instance method
account2.depositMoney(20000);
console.log(account1.accountBalance);
console.log(account2.accountBalance);
console.log(account1);
console.log(account2);
