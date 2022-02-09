import React from 'react';

import { BsCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';

import styled, { css } from 'styled-components';

function InputPoints({
  state = { field: '', check: 'true' },
  changeState = () => {},
  inputType = 'number',
  label = '',
  inputName = '',
  textPlaceholder = '',
  errorText = '',
  inputParameters,
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
  };

  return (
    <InputContainer>
      <Label htmlFor={inputName} check={state.check}>
        {label}
      </Label>
      <InputGroup>
        <InputBox
          data-test="pointsin"
          type={inputType}
          placeholder={textPlaceholder}
          id={inputName}
          value={state.field}
          onChange={onChange}
          onKeyUp={checking}
          onBlur={checking}
          check={state.check}
          min={0}
          max={9999}
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

const ErrorText = styled.p`
  font-family: var(--secondary-font);
  font-size: 1.4rem;
  color: var(--alert-color);
  display: none;
  text-align: start;
  ${(props) =>
    props.check === 'false' &&
    css`
      display: block;
    `}
`;

const IconChecking = styled.div`
  position: absolute;
  right: 40px;
  bottom: 7.5px;
  z-index: 10;
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

const InputBox = styled.input`
  font-family: var(--secondary-font);
  font-size: 1.8rem;
  width: 110px;
  background: rgba(41, 171, 224, 0.08);
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
  margin-right: 10px;
  // transition: 0.3s ease all;
  border: 3px solid transparent;
  border-radius: 3px;
  &:focus {
    border: 2px solid var(--secondary-color);
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  ${(props) =>
    props.check === 'false' &&
    css`
      border: 2px solid var(--alert-color) !important;
    `}
`;

const InputContainer = styled.div``;

const InputGroup = styled.div`
  position: relative;
`;

const Label = styled.label`
  display: none;
`;

export default InputPoints;
