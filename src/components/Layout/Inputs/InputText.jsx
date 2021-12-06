import React from "react";

import styled from "styled-components";

const InputStyle = styled.input`
  padding: 1rem;
  border-radius: 3px;
  border: 0;
  font-family: var(--secondary-font);
  font-size: var(--secondarey-font-size);
  background: rgba(41, 171, 224, 0.08);
  width: 100%;
`;
export const Input = ({typeInput, textPlaceholder, onChange, name}) =>{

  const onChangeInput = (e) =>{
    onChange(e)
  }

  return(
  <InputStyle
  name={name}
  type = {typeInput}
  placeholder ={textPlaceholder}
  onChange={onChangeInput}
  />
  )
};
