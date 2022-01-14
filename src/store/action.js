import {
  GET_ANSWERS,
  GET_ANSWERS_VALIDATED,
  GET_ANSWERS_NO_VALIDATED,
  ADD_ANSWER,
} from './types';
import axios from '../utils/axios';

// action creators

const loadAnswer = (answers) => ({
  type: GET_ANSWERS,
  payload: answers,
});
const loadAnswerValidated = (answers) => ({
  type: GET_ANSWERS_VALIDATED,
  payload: answers,
});
const loadAnswerNoValidated = (answers) => ({
  type: GET_ANSWERS_NO_VALIDATED,
  payload: answers,
});
const addAnswer = (answer) => ({
  type: ADD_ANSWER,
  payload: answer,
});

// actions

const getAllAnswers = (idPost) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`/api/answer/${idPost}`);
    const res = response.data;
    dispatch(loadAnswer(res));
    const second = getState();
    const arr = second.answers;
    const answersValidated = await arr.filter((e) => e.resolved === true);
    const answersNoValidated = await arr.filter((e) => e.resolved !== true);
    dispatch(loadAnswerValidated(answersValidated));
    dispatch(loadAnswerNoValidated(answersNoValidated));
  } catch (e) {
    console.log(e);
  }
};

const addAnswerPost = (answerData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/answer', answerData);
    dispatch(addAnswer(response));
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export default {
  getAllAnswers,
  addAnswerPost,
};
