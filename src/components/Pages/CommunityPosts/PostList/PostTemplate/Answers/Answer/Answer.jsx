/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

const Validated = styled.button`
  border: none;
  background: none;
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
  idPost,
  postUser,
  validatedAnswer,
}) {
  // const [comment] = useState(state);
  const [disabledInp, setDisabledInp] = useState(false);
  const [editAnswer, setEditAnswer] = useState(state.answer);
  const [disableInput, setDisableInput] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [buttonText, setButtonText] = useState('Editar');
  // const [stateResolved, setStateResolved] = useState(true);
  // const [isAutor, setIsAutor] = useState(true);
  const focusInput = useRef();
  const dispatch = useDispatch();

  const currentUser = useSelector(
    (stateUser) => stateUser.currentUserOTokencito
  );

  const handleClickMore = () => {
    setDisabledInp(true);
    setShowButton(!showButton);
  };

  const handleEdit = (e) => {
    setDisableInput(false);
    setButtonText('Guardar');
    if (e.target.name === 'Guardar') {
      dispatch(
        action.editAnswerPut(
          state._id,
          {
            answer: editAnswer,
            likes: 0,
            post: idPost,
            resolved: false,
          },
          idPost
        )
      );
      setDisableInput(true);
      setButtonText('Editar');
    }
  };
  const handleDelete = () => {
    dispatch(action.deletedAnswer(state._id, idPost));
  };
  const handleValidated = () => {
    // editando una respuesta cuando el dueño del post la valida;
    dispatch(
      action.editAnswerPut(
        state._id,
        {
          resolved: true,
        },
        idPost
      )
    );
    // setStateResolved()
  };
  const handleCancel = () => {
    setDisableInput(true);
    setButtonText('Editar');
  };
  // console.log('porque', validatedAnswer);
  return (
    <CommentCont>
      {showButton ? null : (
        <ActionButtonCont>
          <ActionButton type="input" onClick={handleCancel} name={buttonText}>
            Cancelar
          </ActionButton>
          <ActionButton type="input" onClick={handleEdit} name={buttonText}>
            {buttonText}
          </ActionButton>
          <ActionButton type="button" onClick={handleDelete}>
            Eliminar
          </ActionButton>
        </ActionButtonCont>
      )}

      <Comment>
        <UserPhoto
          userPhoto={state.user.photo}
          userPoints={state.user.points}
        />
        <InputComment validated={state.resolved}>
          <InputText
            state={state}
            disabled={disableInput}
            textPlaceholder={textPlaceholder}
            onChangeCe={setEditAnswer}
            flag={disabledInp}
            textEdit={editAnswer}
            focusInput={focusInput}
          />
        </InputComment>
        {/* {validatedAnswer.length !== 0 ? null : ( */}
        <Validated
          validated={state.resolved}
          onClick={handleValidated}
          disabled={validatedAnswer.length !== 0}
        >
          {currentUser.username === postUser.username ? (
            currentUser.username === state.user.username ? null : (
              <AiFillCheckSquare />
            )
          ) : null}
        </Validated>
        {/* )} */}
        {currentUser.username === state.user.username ? (
          <MoreButton
            type="button"
            onClick={handleClickMore}
            aria-label="moreAnswer"
          >
            <AiOutlineEllipsis />
          </MoreButton>
        ) : null}
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
