var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
let mock = new MockAdapter(axios);

//Data falsa
const comunidades = [
  {
    title: "Javascript",
    users: 11000,
    cheks: 232,
    image:
      "https://midu.dev/images/wallpapers/javascript-grande-horizontal-4k.png",
  },
  {
    title: "NodeJs",
    users: 700,
    cheks: 87,
    image:
    "https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg",
  },
  {
    title: "Javascript",
    users: 11000,
    cheks: 232,
    image:
      "https://midu.dev/images/wallpapers/javascript-grande-horizontal-4k.png",
  },
  {
    title: "NodeJs",
    users: 700,
    cheks: 87,
    image:
    "https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg",
  },
];

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/comunidades").reply(200, {
  comunidades
});

export default mock;
