// Interface Code

interface Shape{
  color:string;
  area():number;
}

class Circle implements Shape{
  
  color: string;
  radius:number;

  constructor(color:string,radius:number){
    this.color=color;
    this.radius=radius;
  }
 
   public area():number{
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle implements Shape{

  color: string;
  width:number;
  hieght:number;

  constructor(color:string,width:number,hieght:number){
    this.color=color;
    this.width=width;
    this.hieght=hieght;
  }

  public area(): number {
    return this.width*this.hieght;
  }
}

let cir=new Circle('orange',2);
let rec=new Rectangle('red',2,2);

console.log(`Circle Area: ${cir.area()}`);
console.log(`Rectangular Area: ${rec.area()}`);
