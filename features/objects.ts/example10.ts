// In a TypeScript application, you can generate an API key using a variety of methods.
//  One common approach is to use a library like uuid to generate a unique key.

import {v4 as uuidv4} from 'uuid';

function GenerateApiKey():string{
  const apiKey:string= uuidv4();
  return apiKey;
}

const api=GenerateApiKey();
console.log(`Generate Api key `,api);  //Generate Api key  5dbd4435-b9fc-4c21-a758-b5513ed52161

