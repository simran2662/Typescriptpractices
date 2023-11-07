import axios from 'axios';

const url='https://jsonplaceholder.typicode.com/todos/1';

interface IPerson{
  userId:number;
  id:number;
  title:string;
  completed:boolean;
}

async function fetchData(): Promise<IPerson>{
  try{
      const response= await axios.get(url) ;

      if(!response.data){
        throw new Error(`Error while fetching the data`);
      }

      const data=response.data;

      return data;
    }catch(error){
      console.log(`handling the catch block`,error);
      throw error;
    }
    
}

fetchData().then(data=>console.log(data)).catch(error=>console.log(error));

