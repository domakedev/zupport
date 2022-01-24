import {
  GET_ANSWERS,
  ADD_ANSWER,
  EDIT_ANSWER,
  DELETE_ANSWER,
  REGISTER_USER,
  // AUTHENTICATE_USER,
  OBTENER_USER,
  ERROR_TOKEN,
  SET_SPINNING,
  LOGOUT,
} from './types';
import axios from '../utils/axios';

// action creators

const loadAnswer = (answers) => ({
  type: GET_ANSWERS,
  payload: answers,
});
const addAnswer = (answer) => ({
  type: ADD_ANSWER,
  payload: answer,
});
const editAnswer = (answer) => ({
  type: EDIT_ANSWER,
  payload: answer,
});
const deleteAnswer = (answer) => ({
  type: DELETE_ANSWER,
  payload: answer,
});

// Auth
const createUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});
const obtainUserType = (user) => ({
  type: OBTENER_USER,
  payload: user,
});
const errorLogin = (errorState) => ({
  type: ERROR_TOKEN,
  payload: errorState,
});
const setSpinning = (spinning) => ({
  type: SET_SPINNING,
  payload: spinning,
});
const logOut = () => ({
  type: LOGOUT,
  payload: false,
});

// actions
const getAllAnswers = (idPost) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/answer/${idPost}`);
    const res = response.data;
    dispatch(loadAnswer(res));
  } catch (e) {
    // console.log(e);
  }
};

const addAnswerPost = (answerData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/answer', answerData);
    dispatch(addAnswer(response));
  } catch (e) {
    // console.log(e);
  }
};

const editAnswerPut = (idAnswer, answerData) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/answer/${idAnswer}`, answerData);
    dispatch(editAnswer(response));
  } catch (e) {
    // console.log(e);
  }
};

const deletedAnswer = (idAnswer) => async (dispatch) => {
  try {
    const response = await axios.delete(`/api/answer/${idAnswer}`);
    dispatch(deleteAnswer(response));
  } catch (e) {
    // console.log(e);
  }
};

// AUTH

const obtainUser = () => async (dispatch) => {
  try {
    const tokencito = localStorage.getItem('tokencitox');

    // Funcion para enviar el token por header

    if (tokencito) {
      axios.defaults.headers.common['x-auth-token'] = tokencito;
    } else {
      delete axios.defaults.headers.common['x-auth-token'];
      return;
    }

    const respuesta = await axios.get('/api/users/tokencitox');

    if (respuesta.data.usuario[0]) {
      dispatch(obtainUserType(respuesta?.data?.usuario[0]));
      dispatch(errorLogin(false));
    } else if (!respuesta.data.usuario[0]) {
      dispatch(errorLogin(true));
    }
  } catch (error) {
    dispatch(errorLogin(true));
  }
};

const registerUser = (user) => async (dispatch) => {
  try {
    // Backend
    const response = await axios.post('/api/users', user);

    // FrontEnd
    await dispatch(createUser(response.data.tokencito));

    // Obtener usuario del token
    dispatch(obtainUser());
  } catch (error) {
    dispatch(errorLogin(true));
  }
};

const setTheSpinner = (spinning) => async (dispatch) => {
  dispatch(setSpinning(spinning));
};

const loginUser = (datos) => async (dispatch) => {
  try {
    const respuesta = await axios.post('/api/login', datos);

    // FrontEnd
    await dispatch(createUser(respuesta.data.tokencito));

    dispatch(obtainUser());
  } catch (error) {
    dispatch(errorLogin(true));
  }
};

const closeSession = () => async (dispatch) => {
  try {
    dispatch(logOut());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default {
  getAllAnswers,
  addAnswerPost,
  editAnswerPut,
  deletedAnswer,
  loginUser,
  registerUser,
  obtainUser,
  setTheSpinner,
  closeSession,
};
