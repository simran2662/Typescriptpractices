class Vehicle {
  name!: string; 
  // name:string=''; or assign in this way 

  drive(name: string): void {
      console.log('I am a rider');
      console.log(`My name is ${name}`);
  }
}

const v = new Vehicle();
v.drive('simran');


