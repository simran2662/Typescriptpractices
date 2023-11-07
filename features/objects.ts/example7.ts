interface IPerson{
  firstName:string;
  lastName:string;
  sayHi:()=>string;
}

const iPerson:IPerson={
  firstName:'Madiha',
  lastName:'Khan',
  sayHi: ():string=>{
    return "hello world!";
  }
};

const iPerson1:IPerson={
  firstName:'Heena',
  lastName:'Begum',
  sayHi: ():string=>{
    return "hi there!";
  }
};
console.log(`iPerson Object`);
console.log(iPerson.firstName);
console.log(iPerson.lastName);
console.log(iPerson.sayHi());
console.log(iPerson1.firstName);
console.log(iPerson1.lastName);
console.log(iPerson1.sayHi());
console.log(iPerson1.firstName);