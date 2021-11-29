import styled from "styled-components";
import { InputsRegister } from "./RegisterSlice/InputsRegister";
import { WelcomeRegister } from "./RegisterSlice/WelcomeRegister";
import { BtnRss } from "../Layout/Inputs/BtnRss";
import { SeparatorLine } from "../Login/LoginSlice/SeparatorLine";


const ContainerRegister = styled.div`
  display: grid;
  grid-template-columns:1fr;
  text-align:center;
  margin: 2rem 0 3rem 0;
  padding: 0 3rem 0 3rem;
`;
const FormRegister = styled.form`
  width: 100%;  
  justify-self:center;
  @media (min-width: 768px) {
    width: 100%;
    max-width: 55rem;
    justify-self:center;
  }
`; 
export const Register = () =>(
  <ContainerRegister>
    <FormRegister action="">
      <WelcomeRegister/>
      <InputsRegister/>
      <SeparatorLine/>
      <BtnRss/>
    </FormRegister>
  </ContainerRegister>
);