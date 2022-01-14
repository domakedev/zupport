import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { AiFillCheckSquare } from 'react-icons/ai';
import PropTypes from 'prop-types';
import InputText from '../../../../../../Layout/Inputs/InputText';

// User component
import UserPhoto from '../../../../../../Layout/UserPhoto/UserPhoto';

const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 32px;

  margin-top: 10px;
`;

const Validated = styled.div`
  svg {
    font-size: 45px;
    border-radius: 1px;
    color: ${({ validated }) => (validated ? `var(--sucess-color)` : '#000')};
  }
`;

const InputComment = styled.div`
  width: ${({ validated }) => (validated ? '70%' : '80%')};
`;

function Answer({ state = {}, textPlaceholder = '' }) {
  // Si quien esta en la pagina no es el autor
  // Entonces: Disabled == true
  // Para lo cual se consultara al state general el id del user
  // y se contrastara con el id del comment

  const [comment, setComment] = useState(state);

  useEffect(() => {}, [comment]);

  return (
    <Comment>
      <UserPhoto
        userPhoto={comment.user.photo}
        userPoints={comment.user.points}
      />
      <InputComment validated={state.resolved}>
        <InputText
          state={comment}
          disabled={false}
          textPlaceholder={textPlaceholder}
          changeState={setComment}
        />
      </InputComment>

      <Validated validated={state.resolved}>
        {state.resolved ? <AiFillCheckSquare /> : null}
      </Validated>
    </Comment>
  );
}

Answer.propTypes = {
  textPlaceholder: PropTypes.string,
};

Answer.defaultProps = {
  textPlaceholder: '',
};

export default Answer;
