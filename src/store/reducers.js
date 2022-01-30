/* eslint-disable no-console */
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
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
  AUTHENTICATE_USER,
  VERIFY_USER,
  REGISTER_USER,
  OBTENER_USER,
  ERROR_TOKEN,
  SET_SPINNING,
  LOGOUT,
} from './types';

const initialState = {
  loadOnlyPost: {},
  answers: [],
  addAnswer: {},
  editAnswer: {},
  deleteAnswer: {},
  posts: [],
  addPost: {},
  editPost: {},
  deletePost: {},
  currentUser: {},
  userAuthenticated: false,
  currentUserOTokencito: {},
  errorLogin: false,
  spinningLoading: false,
};

const reducer = (state = initialState, action) => {
  const newValue = action.payload;
  switch (action.type) {
    case LOAD_ONLY_POST:
      // console.log(newValue);
      return { ...state, loadOnlyPost: newValue };
    case GET_ANSWERS:
      console.log(newValue);
      return { ...state, answers: newValue };
    case ADD_ANSWER:
      return { ...state, addAnswer: newValue };
    case EDIT_ANSWER:
      return { ...state, editAnswer: newValue };
    case DELETE_ANSWER:
      return { ...state, deleteAnswer: newValue };
    case GET_POSTS:
      return { ...state, posts: newValue };
    case ADD_POST:
      return { ...state, addPost: newValue };
    case LOAD_EDIT_POST:
      return { ...state, editPost: newValue };
    case EDIT_POST:
      return { ...state, editPost: newValue };
    case DELETE_POST:
      return { ...state, deletePost: newValue };

    // Auth: Register and Login
    case REGISTER_USER:
      localStorage.setItem('tokencitox', newValue);
      return { ...state, currentUser: newValue };
    case VERIFY_USER:
      localStorage.setItem('tokencitox', newValue);
      return { ...state, currentUser: newValue };
    case AUTHENTICATE_USER:
      localStorage.setItem('tokencitox', newValue);
      return {
        ...state,
        userAuthenticated: true,
      };

    case OBTENER_USER:
      return {
        ...state,
        currentUserOTokencito: newValue,
        userAuthenticated: true,
        spinningLoading: false,
      };

    case ERROR_TOKEN:
      return {
        ...state,
        errorLogin: newValue,
        userAuthenticated: !newValue,
        spinningLoading: false,
      };

    case SET_SPINNING:
      return {
        ...state,
        spinningLoading: newValue,
      };

    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        userAuthenticated: false,
        currentUserOTokencito: {},
      };

    default:
      return state;
  }
};
export default reducer;
