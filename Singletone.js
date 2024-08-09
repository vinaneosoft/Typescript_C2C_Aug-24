var Principal = /** @class */ (function () {
    function Principal() {
        this.principalName = "Hari";
    }
    Principal.getInstance = function () {
        if (Principal.ref == null)
            Principal.ref = new Principal();
        return Principal.ref;
    };
    return Principal;
}());
console.log(Principal.ref); // null
var obj1 = Principal.getInstance();
console.log(Principal.ref);
var obj2 = Principal.getInstance();
var obj3 = Principal.getInstance();
console.log(obj1);
console.log(obj2);
console.log(Principal.ref == obj1);
console.log(obj2 == obj1);
obj1.principalName = "Pari";
console.log(obj2);
