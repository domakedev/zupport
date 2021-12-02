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
  &:hover{
    background: var(--sucess-color);
  }
`;
export const InputBtn = ({valueBtn}) =>(
  <InputBtnStyle type = "Button" value ={valueBtn} />
);
