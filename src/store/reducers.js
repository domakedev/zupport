/* eslint-disable default-param-last */
import {
  GET_ANSWERS,
  ADD_ANSWER,
  EDIT_ANSWER,
  DELETE_ANSWER,
  GET_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from './types';

const initialState = {
  answers: [],
  addAnswer: {},
  editAnswer: {},
  deleteAnswer: {},
  posts: [],
  addPost: {},
  editPost: {},
  deletePost: {},
};

const reducer = (state = initialState, action) => {
  const newValue = action.payload;
  switch (action.type) {
    case GET_ANSWERS:
      return { ...state, answers: newValue };
    case ADD_ANSWER:
      return { ...state, addAnswer: newValue };
    case EDIT_ANSWER:
      return { ...state, addAnswer: newValue };
    case DELETE_ANSWER:
      return { ...state, addAnswer: newValue };
    case GET_POSTS:
      return { ...state, posts: newValue };
    case ADD_POST:
      return { ...state, addPost: newValue };
    case EDIT_POST:
      return { ...state, editPost: newValue };
    case DELETE_POST:
      return { ...state, deletePost: newValue };
    default:
      return state;
  }
};
export default reducer;
