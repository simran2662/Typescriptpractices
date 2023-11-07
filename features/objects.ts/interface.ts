interface Person{
  name:string,
  age:number,
  hieght:number,
  color:string
}

const man:Person={
  name:'Alex',
  age:23,
  hieght:4.5,
  color:'dusky'
}

const printMan=(man:Person):void=>{
      console.log(man.name);
      console.log(man.age);
};
printMan(man);


