import React, { useState, useEffect } from "react";

import styled from "styled-components";
import InputText from "../../../../../../Layout/Inputs/InputText";
import { AiFillCheckSquare } from "react-icons/ai";

const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 32px;

  margin-top: 10px;

  
`;

const Helper = styled.div`
  width: 50px;
  height: 50px;
  background-color: grey;
`;

const Validated = styled.div`
  svg {
    font-size: 45px;
    border-radius: 1px;
    color: ${({ validated }) => (validated ? `var(--sucess-color)` : "#000")};
  }
`;

const InputComment = styled.div`
  width: 70%;
`;

const Answer = ({ state = {}, textPlaceholder = "" }) => {
  //Si quien esta en la pagina no es el autor
  //Entonces: Disabled == true
  //Para lo cual se consultara al state general el id del user
  //y se contrastara con el id del comment

  const [comment, setComment] = useState(state);

  useEffect(() => {

  }, [comment]);

  return (
    <Comment>
      <Helper />

      <InputComment>
        <InputText
          state={comment}
          disabled={false}
          textPlaceholder={textPlaceholder}
          changeState={setComment}
        />
      </InputComment>

      <Validated validated={state.validated}>
        <AiFillCheckSquare />
      </Validated>
    </Comment>
  );
};

export default Answer;
