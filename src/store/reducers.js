/* eslint-disable default-param-last */
import {
  GET_ANSWERS,
  ADD_ANSWER,
  EDIT_ANSWER,
  DELETE_ANSWER,
  AUTHENTICATE_USER,
  REGISTER_USER,
  OBTENER_USER,
  ERROR_TOKEN,
  SET_SPINNING,
  LOGOUT,
} from './types';

const initialState = {
  answers: [],
  addAnswer: {},
  editAnswer: {},
  deleteAnswer: {},
  userAuthenticated: false,
  currentUserOTokencito: {},
  errorLogin: false,
  spinningLoading: false,
};

const reducer = (state = initialState, action) => {
  const newValue = action.payload;

  switch (action.type) {
    case GET_ANSWERS:
      return { ...state, answers: newValue };
    case ADD_ANSWER:
      return { ...state, addAnswer: newValue };
    case EDIT_ANSWER:
      return { ...state, editAnswer: newValue };
    case DELETE_ANSWER:
      return { ...state, addAnswer: newValue };

    // Auth: Register and Login
    case REGISTER_USER:
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
