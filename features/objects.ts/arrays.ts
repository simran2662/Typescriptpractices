const fruits:string[]=["Banana","Apple","orange"];
console.log(fruits[1]);

const color:string[]=[];
color.push('green');
color.push('red');
console.log(color);

// Tuples:is a ds that allow us to store an ordered collection of element of different data types.

const drink={
  name:'maza',
  price:20,
  company:false
}

// const pepsi:[string,number,boolean]=['maza',20,false]; //but if we have many properties then this is not a good way to write
// console.log(pepsi);

type drink=[string,number,boolean];
const pepsi:drink=['frooti',30,true];
const coco:drink=['cococola',35,true];
console.log(pepsi);
console.log(coco);
