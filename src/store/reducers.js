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
  MODIFY_USER,
  REGISTER_USER,
  GET_USERS,
  OBTENER_USER,
  ERROR_TOKEN,
  SET_SPINNING,
  LOGOUT,
  VISIT_USER,
  TOP_LANDING_USERS,
  UPDATE_USER,
  GET_ID_COMMUNITY,
  GET_COMMUNITIES,
  ADD_COMMUNITY,
  EDIT_COMMUNITY,
  DELETE_COMMUNITY,
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
  users: [],
  userAuthenticated: false,
  currentUserOTokencito: {},
  errorLogin: false,
  spinningLoading: false,
  visitProfileUser: {},
  topLandingUSers: [],
  getIdCommunity: {},
  communities: [],
  addCommunity: {},
  editCommunity: {},
  deleteCommunity: {},
};

const reducer = (state = initialState, action) => {
  const newValue = action.payload;
  switch (action.type) {
    case LOAD_ONLY_POST:
      // console.log(newValue);
      return { ...state, loadOnlyPost: newValue };
    case GET_ANSWERS:
      // console.log(newValue);
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
      return { ...state, currentUser: newValue };
    case VERIFY_USER:
      localStorage.setItem('tokencitox', newValue);
      return { ...state };
    case AUTHENTICATE_USER:
      localStorage.setItem('tokencitox', newValue);
      return {
        ...state,
        userAuthenticated: true,
      };

    // User general
    case UPDATE_USER:
      return {
        ...state,
        currentUserOTokencito: newValue,
      };

    case MODIFY_USER:
    case OBTENER_USER:
      return {
        ...state,
        currentUserOTokencito: newValue,
        userAuthenticated: true,
        spinningLoading: false,
      };
    case GET_USERS:
      return { ...state, users: newValue };
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

    case VISIT_USER:
      return {
        ...state,
        visitProfileUser: newValue,
      };

    case TOP_LANDING_USERS:
      return {
        ...state,
        topLandingUSers: newValue,
      };
    case GET_ID_COMMUNITY:
      // console.log(newValue);
      return { ...state, getIdCommunity: newValue };
    case GET_COMMUNITIES:
      // console.log(newValue);
      return { ...state, communities: newValue };
    case ADD_COMMUNITY:
      return { ...state, addCommunity: newValue };
    case EDIT_COMMUNITY:
      return { ...state, editCommunity: newValue };
    case DELETE_COMMUNITY:
      return { ...state, deleteCommunity: newValue };

    default:
      return state;
  }
};
export default reducer;
