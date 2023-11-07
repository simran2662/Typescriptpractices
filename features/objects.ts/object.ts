const profile={
  name:'alex',
  age:20,
  coords:{
    lat : 0,
    long : 15
  },
  setAge(age:number):void{
    console.log(`my age is ${this.age}`);
  }
};
{
// destructuring the properties from object into district variable
const {name,age}:{name:string,age:number}=profile;

const { coords: { lat, long } }: { coords: { lat: number, long: number } } = profile;

console.log(age);
console.log(lat);
console.log(long);
console.log(name);
}