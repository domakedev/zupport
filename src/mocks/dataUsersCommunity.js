import faker from 'faker';

import mock from '../utils/mock';

const communityIdUsers = [];

for (let i = 0; i < 10; i = +1) {
  communityIdUsers.push({
    user_id: faker.datatype.uuid(),
    userName: faker.name.findName(),
    userPhoto: faker.image.technics(),
    userPts: faker.datatype.number(),
  });
}

mock.onGet('/comunidades/:comudidadId/users').reply(200, {
  users: communityIdUsers, // .sort((a, b) => b.userPts - a.userPts)
});

// console.log(communityIdUsers)

export default communityIdUsers;
