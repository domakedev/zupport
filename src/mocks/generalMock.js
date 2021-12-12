var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
let mock = new MockAdapter(axios);

//Data falsa
const comunidades = [
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
    title: "Salud general",
    users: 30,
    cheks: 7,
    image:
    "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/16-04-2020_UNICEF-I317998_Lebanon.jpg/image1440x560cropped.jpg",
  },
  {
    title: "Cocina",
    users: 450,
    cheks: 232,
    image:
      "https://www.elmueble.com/medio/2021/03/27/cocina-blanca-con-grifo-y-lamparas-en-negro-00527512-o_2d710425_1600x2000.jpg",
  }
];

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/comunidades").reply(200, {
  comunidades
});

export default mock;
