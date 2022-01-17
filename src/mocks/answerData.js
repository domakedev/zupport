import mock from '../utils/mock';

const answers = [
  {
    _id: '61e09f6687877de12895e012',
    answer: 'Respuesta válida mock 1 😀',
    likes: 0,
    resolved: true,
    post: '61e09c7fb35c71052690ec67',
    date: new Date(),
    user: {
      _id: '61bbfb63acc5c8d066b92b65',
      photo: 'https://bit.ly/3yyEubI',
      points: 1000001,
      username: 'JuanGabi',
    },
  },
  {
    _id: '61e09f6687877de12895e012',
    answer: 'Respuesta mock 2 😀',
    likes: 0,
    resolved: false,
    post: '61e09c7fb35c71052690ec67',
    date: new Date(),
    user: {
      _id: '61bbfb63acc5c8d066b92b65',
      photo: 'https://bit.ly/3yyEubI',
      points: 1000001,
      username: 'JuanGabi',
    },
  },
  {
    _id: '61e09f6687877de12895e012',
    answer: 'Respuesta mock 3 😀',
    likes: 0,
    resolved: false,
    post: '61e09c7fb35c71052690ec67',
    date: new Date(),
    user: {
      _id: '61bbfb63acc5c8d066b92b65',
      photo: 'https://bit.ly/3yyEubI',
      points: 1000001,
      username: 'JuanGabi',
    },
  },
];

mock.onGet('/api/answer/61e09c7fb35c71052690ec67').reply(200, {
  data: answers,
});

export default answers;
