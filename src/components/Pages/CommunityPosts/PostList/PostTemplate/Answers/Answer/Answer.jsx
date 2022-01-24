/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { AiFillCheckSquare, AiOutlineEllipsis } from 'react-icons/ai';
import PropTypes from 'prop-types';
import InputText from './InputText';
import UserPhoto from '../../../../../../Layout/UserPhoto/UserPhoto';
import action from '../../../../../../../store/action';

const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  margin-top: 10px;
  gap: 2rem;
  padding: ${({ sendButton }) => (sendButton ? '0 0 0 32px' : '0 32px')};
  width: ${({ sendButton }) => (sendButton ? '100%' : 'auto')};
  @media screen and (min-width: 720px) {
    width: ${({ sendButton }) => (sendButton ? '500px' : 'auto')};
  }
`;

const Validated = styled.div`
  svg {
    font-size: 45px;
    border-radius: 1px;
    color: ${({ validated }) => (validated ? `var(--sucess-color)` : '#000')};
  }
`;

const InputComment = styled.div`
  width: 100%; // ${({ validated }) => (validated ? '70%' : '100%')};
`;
const MoreButton = styled.button`
  border: none;
  background: none;
  font-size: 2.5rem;
  color: var(--boring-color);
  padding-top: 10px;
  &:hover {
    background: #d3d2ce5b;
    border-radius: 3px;
  }
`;
const CommentCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const ActionButtonCont = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-right: 103px;
`;

const ActionButton = styled.button`
  border: none;
  background: none;
  color: rgba(0, 0, 0, 0.55);
  font-size: 1.3rem;
  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background: #d3d2ce5b;
  }
`;

function Answer({
  state = {},
  textPlaceholder = '',
  setAnswerData,
  sendButton,
  cleanInput,
}) {
  const [comment] = useState(state);
  const [disabledInp, setDisabledInp] = useState(false);
  const [editAnswer, setEditAnswer] = useState(comment.answer);
  const [disableInput, setDisableInput] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const focusInput = useRef();
  const dispatch = useDispatch();

  useEffect(() => {}, [comment]);
  // console.log(comment);

  const dataUser = {
    user: {
      photo: 'https://bit.ly/3Fnkbk9',
      points: 5430,
      username: 'domakedev',
      id: '61eb5ea6345f4538ebf11cd0',
      post: '61e09c7fb35c71052690ec67',
    },
  };
  const handleClickMore = () => {
    setDisabledInp(true);
    setDisableInput(false);
    setShowButton(!showButton);
  };
  const handleEdit = () => {
    dispatch(
      action.editAnswerPut(
        comment._id,
        {
          answer: editAnswer,
          user: dataUser.user.id,
          likes: 0,
          post: dataUser.user.post,
          resolved: false,
        },
        '61e09c7fb35c71052690ec67'
      )
    );
  };
  const handleDelete = () => {
    dispatch(action.deletedAnswer(comment._id, '61e09c7fb35c71052690ec67'));
  };

  return (
    <CommentCont>
      {showButton ? null : (
        <ActionButtonCont>
          <ActionButton type="button" onClick={handleEdit}>
            Editar
          </ActionButton>
          <ActionButton type="button" onClick={handleDelete}>
            Eliminar
          </ActionButton>
        </ActionButtonCont>
      )}

      <Comment sendButton={sendButton}>
        <UserPhoto
          userPhoto={comment.user.photo}
          userPoints={comment.user.points}
        />
        <InputComment validated={state.resolved}>
          <InputText
            state={comment}
            disabled={sendButton ? !sendButton : disableInput}
            textPlaceholder={textPlaceholder}
            onChangeCe={sendButton ? setAnswerData : setEditAnswer}
            flag={disabledInp}
            textEdit={editAnswer}
            focusInput={focusInput}
            cleanInput={cleanInput}
          />
        </InputComment>

        <Validated validated={state.resolved}>
          {state.resolved ? <AiFillCheckSquare /> : null}
        </Validated>
        {sendButton ? null : (
          <MoreButton
            type="button"
            onClick={handleClickMore}
            aria-label="moreAnswer"
          >
            <AiOutlineEllipsis />
          </MoreButton>
        )}
      </Comment>
    </CommentCont>
  );
}

Answer.propTypes = {
  textPlaceholder: PropTypes.string,
};

Answer.defaultProps = {
  textPlaceholder: '',
};

export default Answer;
