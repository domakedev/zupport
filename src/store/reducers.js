/* eslint-disable default-param-last */
import { GET_ANSWERS, ADD_ANSWER, EDIT_ANSWER, DELETE_ANSWER } from './types';

const initialState = {
  answers: [],
  addAnswer: {},
  editAnswer: {},
  deleteAnswer: {},
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
    default:
      return state;
  }
};
export default reducer;
