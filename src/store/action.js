import {
  LOAD_ONLY_POST,
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
  MODIFY_USER,
  OBTENER_USER,
  GET_USERS,
  ERROR_TOKEN,
  SET_SPINNING,
  LOGOUT,
  VISIT_USER,
  TOP_LANDING_USERS,
  UPDATE_USER,
} from './types';
import axios from '../utils/axios';

// action creators

// Answer
const loadOnlyPost = (post) => ({
  type: LOAD_ONLY_POST,
  payload: post,
});
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
const loadUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});
const updateUserX = (user) => ({
  type: MODIFY_USER,
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

// Users
const visitTheUser = (user) => ({
  type: VISIT_USER,
  payload: user,
});
const setTheTopUsersLanding = (topUsers) => ({
  type: TOP_LANDING_USERS,
  payload: topUsers,
});
const updateUser = (newData) => ({
  type: UPDATE_USER,
  payload: newData,
});

// Answer

// Answer loadOnlyPost
const getOnlyPost = (idPost) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/post/onlyPost/${idPost}`);
    const res = response.data;
    // console.log(res);
    dispatch(loadOnlyPost(res));
    // console.log(res);
  } catch (e) {
    // console.log(e);
  }
};

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
    // console.log(answers);
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

const getPost = (idPost) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/post/onlyPost/${idPost}`);
    const res = response.data;
    dispatch(addPost(res));
  } catch (e) {
    // console.log(e);
  }
};

const addedPost = (postData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/post', postData);
    dispatch(addPost(response.data));
  } catch (e) {
    // console.log(e);
  }
};

const editedPost = (idPost, postData) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/post/${idPost}`, postData);
    dispatch(editPost(response.data));
  } catch (e) {
    // console.log(e);
  }
};

const likedPost = (idPost, postData) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/post/like/${idPost}`, postData);
    dispatch(editPost(response.data));
  } catch (e) {
    // console.log(e);
  }
};

const loadEditedPost =
  (
    userPhoto,
    userName,
    timePosted,
    postTitle,
    postDescription,
    points,
    userPoints,
    resolved,
    likes,
    urlPost,
    idPost
  ) =>
  async (dispatch) => {
    try {
      dispatch(
        loadEditPost({
          title: postTitle,
          description: postDescription,
          points,
          _id: idPost,
          image: urlPost,
          timePosted,
          resolved,
          likes,
          user: {
            username: userName,
            photo: userPhoto,
            points: userPoints,
          },
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

const obtainUser = (userUsername) => async (dispatch) => {
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

    if (userUsername) {
      const respuestaUsername = await axios.get(`/api/users/${userUsername}`);

      if (respuestaUsername.data[0].username.length > 0) {
        dispatch(visitTheUser(respuesta.data[0].username));
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('🚀 ~ file: action.js ~ line 232 ~ obtainUser ~ error', error);

    dispatch(errorLogin(true));
  }
};
const obtainUserByUsername = (userUsername) => async (dispatch) => {
  try {
    const respuesta = await axios.get(`/api/users/${userUsername}`);
    dispatch(visitTheUser(respuesta.data[0]));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('🚀 ~ file: action.js ~ line 232 ~ obtainUser ~ error', error);

    dispatch(errorLogin(true));
  }
};

const getAllUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/users/');
    const res = response.data;
    dispatch(loadUsers(res));
  } catch (e) {
    // console.log(e);
  }
};

const updatedUser = (userName, userData) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/users/name/${userName}`, userData);
    dispatch(updateUserX(response));
  } catch (e) {
    // console.log(e);
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

const closeSession = (userName, userData) => async (dispatch) => {
  try {
    await updatedUser(userName, userData)();
    dispatch(logOut());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

const setVisitedUser = (userUsername) => async (dispatch) => {
  try {
    await dispatch(obtainUserByUsername(userUsername));
    // userData obtenida de usar el email
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(
      '🚀 ~ file: action.js ~ line 290 ~ setVisitedUser ~ error',
      error
    );
  }
};

const getTopUsersLanding = () => async (dispatch) => {
  try {
    const respuesta = await axios.get('/api/users');

    const theThree = respuesta.data.sort((a, b) => -a.points + b.points);
    const the3TopGeneralUsers = theThree.slice(0, 3);
    dispatch(setTheTopUsersLanding(the3TopGeneralUsers));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(
      '🚀 ~ file: action.js ~ line 325 ~ getTopUsersLanding ~ error',
      error
    );
  }
};

const updateTheUser = (userUsername, newData) => async (dispatch) => {
  dispatch(setSpinning(true));

  try {
    const tokencito = localStorage.getItem('tokencitox');

    // Funcion para enviar el token por header

    if (tokencito) {
      axios.defaults.headers.common['x-auth-token'] = tokencito;
    } else {
      delete axios.defaults.headers.common['x-auth-token'];
      return;
    }

    const respuesta = await axios.put(`/api/users/${userUsername}`, newData);

    dispatch(updateUser(respuesta.data[0]));

    dispatch(setSpinning(false));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(
      '🚀 ~ file: action.js ~ line 359 ~ updateTheUser ~ error',
      error
    );
  }
};

export default {
  getOnlyPost,
  getAllAnswers,
  addAnswerPost,
  editAnswerPut,
  deletedAnswer,
  getAllPosts,
  getPost,
  addedPost,
  loadEditedPost,
  editedPost,
  likedPost,
  deletedPost,
  loginUser,
  registerUser,
  validateUser,
  updatedUser,
  obtainUser,
  getAllUsers,
  setTheSpinner,
  closeSession,
  setVisitedUser,
  getTopUsersLanding,
  updateTheUser,
};
