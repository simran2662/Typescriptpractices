let apples:number=5;
let fruits:boolean=false;
let array:string[]=['simran','shra','alia'];
let myNumber:number[]=[1,2,3,4,5];

// Object literals

let student={
  name :'simran',
  age:22

};

//  object literals with parameter
let point:{x:number,y:number}={
  x:10,
  y:20
};

// function

const logNumber=(x:number,y:number):void=>{
  console.log("hello there");
}
logNumber(10,20);

// const logNumber1:(i:number)=>void=(i:number)=>{
//   console.log(i);
// }

// when to use the type annotations?
// ans:function that return the 'any' type

const json=`{"x":10,"y":20}`;
const coordinates=JSON.parse(json); //coordinates is of type 'any'
console.log(coordinates);

// we can fix the above issue by adding type annotations.

const json1=`{"x":20,"y":20}`;
const coords:{x:number ,y:number}=JSON.parse(json1);
console.log(coords);

// when we declared a vaariable on one line and initializes it later

let variable; //type of variable is 'any'
variable=10;
variable='simran';
variable=false;

let numbers=[-10,-1,-20];
let numberAboveZero:false| number=false;

for(let i=0;i<numbers.length;i++){
  if(numbers[i]>0){
    numberAboveZero=numbers[i];
  }
}
console.log(numberAboveZero);


// function

const add=(a:number,b:number):number=>{
   return a+b;
};
console.log(add(1,2));

// Never

// function throwError(message: string): never {
//   throw new Error(message);
// }

// throwError('there is an error message');


const logWeather = (forcaste:{
  date:Date,
  weather:'sunny'
}):void=>{
  console.log(forcaste.date);
  console.log(forcaste.weather);
};
const forcaste:{date:Date,weather:'sunny'}={
  date:new Date(),
  weather:'sunny'
}
logWeather(forcaste);

