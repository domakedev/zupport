/* eslint-disable default-param-last */
import {
  GET_ANSWERS,
  GET_ANSWERS_VALIDATED,
  GET_ANSWERS_NO_VALIDATED,
  ADD_ANSWER,
} from './types';

const initialState = {
  answers: [],
  answersValidated: [],
  answersNoValidated: [],
  addAnswer: {},
};

const reducer = (state = initialState, action) => {
  const newValue = action.payload;
  switch (action.type) {
    case GET_ANSWERS:
      return { ...state, answers: newValue };
    case GET_ANSWERS_VALIDATED:
      return { ...state, answersValidated: newValue };
    case GET_ANSWERS_NO_VALIDATED:
      return { ...state, answersNoValidated: newValue };
    case ADD_ANSWER:
      return { ...state, addAnswer: newValue };
    default:
      return state;
  }
};
export default reducer;
