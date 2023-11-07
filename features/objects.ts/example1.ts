interface Vehicle{
  name:string,
  year:number,
  broken:boolean,
  summary():string;
}

const oldCivic:Vehicle={
  name:'bob',
  year:2000,
  broken:true,
  summary():string{
    return `Name ${this.name} `;
  }
};

const printVehicle=(oldCivic:Vehicle):void=>{
  console.log(oldCivic.name);
  console.log(oldCivic.year);
  console.log(oldCivic.broken);
  console.log(oldCivic.summary());
};

printVehicle(oldCivic);
