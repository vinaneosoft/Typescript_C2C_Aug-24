class Ball{
   ballColor:string;
   constructor(){}
}
class Bat{
   batLength:number;
   constructor(){}
}
class Box<Type>{
  array:Type[]=new Array();
  add(value : Type){
   this.array.push(value);
  }
}

let box1=new Box<Ball>();
box1.add(new Ball());
box1.add(new Ball());
box1.add(new Ball());
box1.add(new Bat());

let box2=new Box<Bat>();
box2.add(new Bat());
box2.add(new Ball());

