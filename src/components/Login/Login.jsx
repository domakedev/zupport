import styled from "styled-components";
import { WelcomeLogin } from "./LoginSlice/WelcomeLogin";
import {InputsLogin} from "./LoginSlice/InputsLogin"
import { BtnRss } from "../Layout/Inputs/BtnRss";
import {SeparatorLine} from "./LoginSlice/SeparatorLine"

const FormContainer = styled.div`
  display: grid;
  grid-template-columns:1fr;
  text-align:center;
  margin: 2rem 0 3rem 0;
  padding: 0 3rem 0 3rem;
`;
const FormLogin = styled.form`
  width: 100%;  
  justify-self:center;
  @media (min-width: 768px) {
    width: 100%;
    max-width: 55rem;
    justify-self:center;
}
`; 
const OptionRegister = styled.p`
  font-family: var(--secondary-font);
  color: var(--dark-color);
  font-size: 1.6rem;
  text-align: end;
`;
const LinkRegister = styled.a`
  text-decoration: none;
  color: var(--secondary-color);
  font-size: 1.6rem;
`;
export const Login = () => (  
  <FormContainer>
    <FormLogin>
      <WelcomeLogin/>
      <InputsLogin/>
      <SeparatorLine/>
      <BtnRss/>    
      <OptionRegister>¿No tienes unacuenta? 
        <LinkRegister>Regístrate aquí</LinkRegister>
      </OptionRegister>
    </FormLogin> 
  </FormContainer>  
);