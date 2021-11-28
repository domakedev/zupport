import styled from "styled-components";

const InputStyle = styled.input`
  padding: 1rem;  
  border-radius: 3px;
  border: 0;  
  font-family: var(--secondary-font); 
  font-size: var(--secondarey-font-size);
  background: rgba(41, 171, 224, 0.08);
`;
export const Input = ({typeInput, textPlaceholder}) =>(
  <InputStyle type = {typeInput} placeholder ={textPlaceholder} />  
);

/**
 * 
 * 
  background: ${ props => props.typeInput ? "rgba(41, 171, 224, 0.08)" : "var(--principal-color)"};
  color: ${ props => "text" ? "var(--boring-color);" : "var(--light-color);)"};
  font-weight : ${ props => "text" ? "normal" : "bold"};
 */