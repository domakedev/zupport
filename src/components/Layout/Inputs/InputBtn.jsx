import React from 'react';
import styled from "styled-components";

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
  &:hover{
    background: var(--sucess-color);
  }
`;
const InputBtn = ({valueBtn}) =>{
  return(
  <InputBtnStyle>{valueBtn}</InputBtnStyle>
)};

export default InputBtn
