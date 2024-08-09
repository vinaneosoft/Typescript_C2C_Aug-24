var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NeoEmployee = /** @class */ (function () {
    function NeoEmployee() {
    }
    NeoEmployee.prototype.getGrossSalary = function () {
        // ta : 5%, da: 10% hra 12 % // bs+ta+da+hra
        return this.basicSalary + 0.05 * this.basicSalary + 0.1 * this.basicSalary + 0.12 * this.basicSalary;
    };
    NeoEmployee.prototype.getNetSalary = function () {
        // pf: 2% bs
        return this.getGrossSalary() - 0.02 * this.basicSalary;
    };
    return NeoEmployee;
}());
var NeoTrainer = /** @class */ (function (_super) {
    __extends(NeoTrainer, _super);
    function NeoTrainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.payPerHr = 500;
        _this.extrahrs = 0;
        return _this;
    }
    NeoTrainer.prototype.getVariablePay = function () {
        return this.payPerHr * this.extrahrs;
    };
    // inherited overrding method
    NeoTrainer.prototype.getNetSalary = function () {
        return this.getGrossSalary() - 0.02 * this.basicSalary + this.getVariablePay();
    };
    return NeoTrainer;
}(NeoEmployee));
var NeoManager = /** @class */ (function (_super) {
    __extends(NeoManager, _super);
    function NeoManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NeoManager;
}(NeoEmployee));
var TechnicalTrainer = /** @class */ (function (_super) {
    __extends(TechnicalTrainer, _super);
    function TechnicalTrainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TechnicalTrainer;
}(NeoTrainer));
console.log("------EMPLOYEE---------------");
var neoemployee = new NeoEmployee();
neoemployee.employeeId = 999;
neoemployee.deptId = "DN";
neoemployee.employeeName = "Kumar";
neoemployee.basicSalary = 56000;
/** Property 'experience' is protected and only accessible within class 'NeoEmployee' and its subclasses */
//neoemployee.experience=10;
console.log(neoemployee.getGrossSalary());
console.log(neoemployee.getNetSalary()); // NeoEmployee
console.log(neoemployee);
console.log("------TRAINER---------------");
var trainer = new NeoTrainer();
trainer.employeeId = 888;
trainer.employeeName = "Mayura";
trainer.basicSalary = 56000;
trainer.deptId = "LD";
trainer.trainingTechnologies = ['JAVA', 'HTML', 'Javascript', 'Bootstrap'];
trainer.extrahrs = 40;
console.log(trainer.getVariablePay());
console.log(trainer.getGrossSalary()); // super class method
console.log(trainer.getNetSalary()); // +variablepay  NeoTrainer // run time polymorphism
console.log(trainer);
