interface Reportable{
  summary():string;
}

const oldCivic1={
   name:'john',
   year:2023,
   summary():string{
    return `name ${this.name}`;
   }
};

const drink={
  color:'brown',
  sugar:40,
  summary():string{
    return 'My drink has ${this.sugar}';
  }
};

const printSummary=(item:Reportable):void=>{
  console.log(item.summary());
}

printSummary(drink);
printSummary(oldCivic1);



