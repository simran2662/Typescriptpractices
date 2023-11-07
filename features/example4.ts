class Employee{
  // public name:string;

  constructor(public name:string){
    this.name=name;
  }
  public dancer(name:string):void{
    console.log(`her good name is ${name}`);
  }
}
{
const e=new Employee("alia");
e.dancer("muski");
console.log(e);
}