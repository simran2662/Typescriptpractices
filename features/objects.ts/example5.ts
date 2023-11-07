// Tuples: it is a ds which is used to stored the data in an ordered collection of different data types.

const fruitss={
  name:'Mango',
  price:20,
  color:'Yellow'
}

type Data=[string,number,string];
const bucket:Data=['Mongo',20,'Yellow'];
const bucket1:Data=['orange',100,'orange'];
const bucket2:Data=['Banana',40,'Yellow'];
console.log(bucket);
console.log(bucket1);
console.log(bucket2);
console.log(bucket1[2]); //accessing the elem


// Destructuring Tuples: extracting the values from the tuple into distinct variable.
// Destructuring refers to breaking up the structure of an entity.

var tuple=[10,"alex",false];
console.log(tuple);
var[a,b,f]=tuple;
console.log(f);
tuple[0]='sim';  //updating tuples
console.log(tuple);

// Empty tuple

var t:string[]=[];
t[0]='heena';
t[1]='alia';
console.log(t);



