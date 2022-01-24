/* eslint-disable no-param-reassign */
import React from 'react';
import styled from 'styled-components';

const InputBox = styled.textarea`
  font-family: var(--secondary-font);
  font-size: 1.8rem;
  width: 100%;
  background: rgba(41, 171, 224, 0.08);
  border-radius: 3px;
  padding-left: 20px;
  padding-right: 40px;
  transition: 0.3s ease all;
  border: 3px solid transparent;
  resize: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    border: 2px solid var(--secondary-color);
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;

function Input({
  state = {},
  inputType = 'text',
  textPlaceholder = '',
  onChangeCe,
  name = '',
  disabled = false,
  textEdit = '',
  flag,
}) {
  const onChange = (e) => {
    onChangeCe(e.target.value);
  };
  return (
    <InputBox
      name={name}
      type={inputType}
      placeholder={textPlaceholder}
      value={flag ? textEdit : state.answer}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default Input;
