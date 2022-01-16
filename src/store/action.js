import { GET_ANSWERS, ADD_ANSWER, EDIT_ANSWER, DELETE_ANSWER } from './types';
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

export default {
  getAllAnswers,
  addAnswerPost,
  editAnswerPut,
  deletedAnswer,
};
