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
const editPost = (post) => ({
  type: EDIT_POST,
  payload: post,
});
const deletePost = (post) => ({
  type: DELETE_POST,
  payload: post,
});

// actions

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

const deletedPost = (idPost) => async (dispatch) => {
  try {
    const response = await axios.delete(`/api/answer/${idPost}`);
    dispatch(deletePost(response));
  } catch (e) {
    // console.log(e);
  }
};

export default {
  getAllAnswers,
  addAnswerPost,
  editAnswerPut,
  deletedAnswer,
  getAllPosts,
  addedPost,
  editedPost,
  deletedPost,
};
