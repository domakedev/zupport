import React from 'react';
import styled from 'styled-components';

const InputBtnStyle = styled.button`
  padding: 1rem;
  border-radius: 3px;
  border: 0;
  height: 45px;
  font-family: var(--secondary-font);
  font-size: var(--secondarey-font-size);
  background: var(--principal-color);
  color: var(--light-color);
  font-weight: bold;
  box-shadow: 0 4px 2px 0 var(--boring-color);
  &:hover {
    background: var(--sucess-color);
  }
`;
function InputBtn({ valueBtn, EnviarDataLogin }) {
  return <InputBtnStyle onClick={EnviarDataLogin}>{valueBtn}</InputBtnStyle>;
}

export default InputBtn;
