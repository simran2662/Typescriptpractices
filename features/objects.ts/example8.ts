// Fetching data using TypeScript typically involves making HTTP requests to a server or an API endpoint. 

const url=`https://jsonplaceholder.typicode.com/todos/1`;
interface UserData{
  userId:number;
  id:number;
  title:string;
  completed:string;
}

async function fetchdata():Promise<UserData[]>{
    try{
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);


   if(!response.ok){
    throw new Error('Network response was not ok');

   }

   const data:UserData[]= await response.json();
   return data;
     
  }
    catch(error){
      console.log('Error fetching data:' ,error);
      throw error;
     }
}

async function  displaydata(){
  try{
    const apiData:UserData[] = await fetchdata();

    console.log(`fetchdata from api`,apiData);
  }
  catch(error){
    console.log(` Handle errors that might occur during fetching or processing data`,error);
  }
}

displaydata();