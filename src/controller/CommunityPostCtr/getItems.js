import axios from 'axios';

//const urlApi = 'http://localhost:3000/';

export const getItems = (ruta,meth) =>{

  return axios({
    method : meth,
    url : `${ruta}`
  });
}
