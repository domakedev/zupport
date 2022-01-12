import axios from 'axios';

// const urlApi = 'http://localhost:3000/';

const getItems = (ruta, meth) =>
  axios({
    method: meth,
    url: `${ruta}`,
  });

export default getItems;
