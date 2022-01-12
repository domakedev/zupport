import React from 'react';

import { BsCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';

import styled, { css } from 'styled-components';
import '../../../css/index.css';

function InputArea({
  state,
  changeState,
  inputType,
  label,
  textPlaceholder,
  inputName,
  errorText,
  inputParameters,
  functionx,
}) {
  const onChange = (e) => {
    changeState({ ...state, field: e.target.value });
  };

  const checking = () => {
    if (inputParameters) {
      if (inputParameters.test(state.field)) {
        changeState({ ...state, check: 'true' });
      } else {
        changeState({ ...state, check: 'false' });
      }
    }

    if (functionx) {
      functionx();
    }
  };

  return (
    <InputContainer>
      <Label htmlFor={inputName} check={state.check}>
        {label}
      </Label>
      <InputGroup>
        <InputBox
          type={inputType}
          placeholder={textPlaceholder}
          id={inputName}
          value={state.field}
          onChange={onChange}
          onKeyUp={checking}
          onBlur={checking}
          check={state.check}
        />
        <IconChecking check={state.check}>
          {state.check === 'true' ? (
            <BsCheckCircleFill />
          ) : (
            <BsFillXCircleFill />
          )}
        </IconChecking>
      </InputGroup>
      <ErrorText check={state.check}>{errorText}</ErrorText>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: block;
`;

const Label = styled.label`
  display: none;
`;

const InputGroup = styled.div`
  position: relative;
  z-index: 90;
`;

const InputBox = styled.textarea`
  font-family: var(--secondary-font);
  font-size: 1.8rem;
  width: 100%;
  max-width: 100%;
  max-height: 300px;
  background: rgba(41, 171, 224, 0.08);
  border-radius: 3px;
  height: 300px;
  resize: none;
  line-height: 22px;
  padding: 10px 20px;
  transition: 0.3s ease all;
  border: 3px solid transparent;
  &:focus {
    border: 2px solid var(--secondary-color);
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  ${(props) =>
    props.check === 'true' &&
    css`
      border: 2px solid transparent;
    `}
  ${(props) =>
    props.check === 'false' &&
    css`
      border: 2px solid var(--alert-color) !important;
    `}
`;

const ErrorText = styled.p`
  font-family: var(--secondary-font);
  font-size: 1.4rem;
  color: var(--alert-color);
  display: none;
  text-align: start;
  ${(props) =>
    props.check === 'true' &&
    css`
      display: none;
    `}
  ${(props) =>
    props.check === 'false' &&
    css`
      display: block;
    `}
`;

const IconChecking = styled.div`
  position: absolute;
  right: 25px;
  bottom: 7.5px;
  z-index: 100;
  font-size: 20px;
  opacity: 0;
  ${(props) =>
    props.check === 'false' &&
    css`
      opacity: 1;
      color: var(--alert-color);
    `}
  ${(props) =>
    props.check === 'true' &&
    css`
      opacity: 1;
      color: var(--sucess-color);
    `}
`;

export default InputArea;
