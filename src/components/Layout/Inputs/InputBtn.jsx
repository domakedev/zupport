import styled from "styled-components";

const InputBtnStyle = styled.input`
  padding: 1rem;  
  border-radius: 3px;
  border: 0;  
  font-family: var(--secondary-font); 
  font-size: var(--secondarey-font-size);
  background: var(--principal-color);
  color: var(--light-color);
  font-weight: bold;
  box-shadow: 0 4px 2px 0 var(--boring-color);
  &:hover{
    background: var(--alert-color);
  }
`;
export const InputBtn = ({valueBtn}) =>(
  <InputBtnStyle type = "Button" value ={valueBtn} />  
);