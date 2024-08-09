const abc=90;
//abc=88;
class Circle{
    public static readonly pie=3.142;  // single shared constant
    constructor(public readonly radius=0) // instance copy constant
     {}
    getArea(){
        return Circle.pie*this.radius*this.radius;
    }
}
//Circle.pie=3.14; //t is a read-only property.
let circle1=new Circle(6);
//circle1.radius=12;  // it is a read-only property
console.log(circle1.getArea());
let circle2=new Circle(10);
//circle2.radius=9;
let circle3=new Circle(14);
//circle3.radius=11;