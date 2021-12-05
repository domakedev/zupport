import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import faker from 'faker';


 export const mock2 = new MockAdapter(axios);
export  const communityIdUsers = [];

for(let i =0; i< 10; i++){
  communityIdUsers.push({
      user_id: faker.datatype.uuid(),
      userName: faker.name.findName(),
      userPhoto: faker.image.technics(),
      userPts: faker.datatype.number()  
    });
  }
  
  
 mock2.onGet("/comunidades/:comudidadId/users").reply(200, { 
    users: communityIdUsers //.sort((a, b) => b.userPts - a.userPts)
  });

 //console.log(communityIdUsers)
  