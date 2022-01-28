import {
  GET_ANSWERS,
  ADD_ANSWER,
  EDIT_ANSWER,
  DELETE_ANSWER,
  GET_POSTS,
  ADD_POST,
  LOAD_EDIT_POST,
  EDIT_POST,
  DELETE_POST,
  REGISTER_USER,
  VERIFY_USER,
  // AUTHENTICATE_USER,
  OBTENER_USER,
  ERROR_TOKEN,
  SET_SPINNING,
  LOGOUT,
} from './types';
import axios from '../utils/axios';

// action creators

// Answer
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

// Post
const loadPost = (posts) => ({
  type: GET_POSTS,
  payload: posts,
});
const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});
const loadEditPost = (post) => ({
  type: LOAD_EDIT_POST,
  payload: post,
});
const editPost = (post) => ({
  type: EDIT_POST,
  payload: post,
});
const deletePost = (post) => ({
  type: DELETE_POST,
  payload: post,
});

// actions

// Auth
const createUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});
const obtainUserType = (user) => ({
  type: OBTENER_USER,
  payload: user,
});
const verifyUser = (user) => ({
  type: VERIFY_USER,
  payload: user,
});
const logingUser = (user) => ({
  type: VERIFY_USER,
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

// Answer

const getAllAnswers = (idPost) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/answer/${idPost}`);
    const res = response.data;
    dispatch(loadAnswer(res));
  } catch (e) {
    // console.log(e);
  }
};

const addAnswerPost = (answerData, idPost) => async (dispatch) => {
  try {
    const response = await axios.post('/api/answer', answerData);
    dispatch(addAnswer(response));
    dispatch(getAllAnswers(idPost));
  } catch (e) {
    // console.log(e);
  }
};

const editAnswerPut = (idAnswer, answerData, idPost) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/answer/${idAnswer}`, answerData);
    dispatch(editAnswer(response));
    dispatch(getAllAnswers(idPost));
  } catch (e) {
    // console.log(e);
  }
};

const deletedAnswer = (idAnswer, idPost) => async (dispatch) => {
  try {
    const response = await axios.delete(`/api/answer/${idAnswer}`);
    dispatch(deleteAnswer(response));
    dispatch(getAllAnswers(idPost));
  } catch (e) {
    // console.log(e);
  }
};

// Post
const getAllPosts = (idCom) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/post/${idCom}`);
    const res = response.data;
    dispatch(loadPost(res));
  } catch (e) {
    // console.log(e);
  }
};

const addedPost = (postData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/post', postData);
    dispatch(addPost(response));
  } catch (e) {
    // console.log(e);
  }
};

const editedPost = (idPost, postData) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/post/${idPost}`, postData);
    dispatch(editPost(response));
  } catch (e) {
    // console.log(e);
  }
};

const loadEditedPost =
  (postTitle, postDescription, points, idPost, urlPost) => async (dispatch) => {
    try {
      dispatch(
        loadEditPost({
          title: postTitle,
          description: postDescription,
          points,
          _id: idPost,
          image: urlPost,
        })
      );
    } catch (e) {
      // console.log(e);
    }
  };

const deletedPost = (idPost) => async (dispatch) => {
  try {
    const response = await axios.delete(`/api/post/${idPost}`);
    dispatch(deletePost(response));
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
    if (respuesta.data.usuario) {
      dispatch(obtainUserType(respuesta?.data?.usuario));
      dispatch(errorLogin(false));
    } else if (!respuesta.data.usuario) {
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
    await dispatch(createUser(response.data));

    // Obtener usuario del token
    // dispatch(obtainUser());
  } catch (error) {
    dispatch(errorLogin(true));
  }
};

const validateUser = (hash) => async (dispatch) => {
  try {
    // Backend
    const response = await axios.post('/auth/local/verify-account', hash);
    // FrontEnd
    await dispatch(verifyUser(response.data.token));

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
    const respuesta = await axios.post('/auth/local/login', datos);
    // FrontEnd
    await dispatch(logingUser(respuesta.data.token));

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
  getAllPosts,
  addedPost,
  loadEditedPost,
  editedPost,
  deletedPost,
  loginUser,
  registerUser,
  validateUser,
  obtainUser,
  setTheSpinner,
  closeSession,
};
