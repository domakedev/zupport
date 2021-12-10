import faker from 'faker';

import mock from "../utils/mock"

export  const dataPost = [];

for(let i =0; i< 10; i++){
      dataPost.push({
      post_id:faker.datatype.uuid(),
      user_id:faker.datatype.uuid(),
      userName: faker.name.findName(),
      userPhoto: faker.image.technics(),
      postTitle: faker.lorem.words(),
      postDescription: faker.lorem.paragraph(),
      image: faker.random.image(),
      timePost:faker.date.recent(),
      archive: faker.image.technics(),
      likes: faker.datatype.number(),
      points: faker.datatype.number(),
      resolved: faker.datatype.boolean()
    });
  };

  mock.onGet("/comunidades/:comudidadId/posts").reply(200, {
    posts: dataPost.sort((dateA, dateB) =>  dateB.timePost - dateA.timePost)
  });

 
/**
 * códigos de respuesta
 * Get:
 * 200 --ok
 * 401 --Token invalido
 */

/*

************DUDAS EXISTENCIALES DE SORT : preguntar a coach no borrar código*************
  console.log(dataPost)

  axios.get("/comunidades/:comudidadId/posts").then(function (response) {
    console.log(response.data.posts.sort((dateA, dateB) =>  dateB.timePost - dateA.timePost));
  });
  export const sortedPoints = (arr) => {
    const sorted = [...arr].sort((a, b) => b.timePost - a.timePost);
    console.log(arr)
    return arr
  };
  sortedPoints(dataPost)

*/
