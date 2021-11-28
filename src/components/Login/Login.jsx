import styled from "styled-components";
import { WelcomeLogin } from "./SliceLogin/WelcomeLogin";
import {InputsLogin} from "./SliceLogin/InputsLogin"
import { BtnRss } from "../Layout/Inputs/BtnRss";

const FormContainer = styled.div`
  display: grid;
  grid-template-columns:1fr;
  text-align:center;
  margin: 2rem 0 3rem 0;
  padding: 0 3rem 0 3rem;
  @media (min-width: 768px) {
  }
`;

  /*Estilos de separador linea*/
const LineLeftLogin  = styled.div`
  grid-area: lineleft;
  background: #79777052;
  height: 1px;
  align-self : center;
`;
const LineRightLogin = styled(LineLeftLogin)`
  grid-area: lineright;
`;
const ContainerLineLogin = styled.section`
  display: grid;
  grid-template-areas: "lineleft . lineright";
`;
const OtherLogin = styled.p`
  font-family: var(--secondary-font);
  font-size: var(--secondarey-font-size);
  color: var(--dark-color);
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
    <WelcomeLogin/>
    <InputsLogin/>    
    <ContainerLineLogin>
      <LineLeftLogin/>
      <OtherLogin>o</OtherLogin>
      <LineRightLogin/>
    </ContainerLineLogin>
    <BtnRss/>    
    <OptionRegister>¿No tienes unacuenta? 
      <LinkRegister>Regístrate aquí</LinkRegister>
    </OptionRegister>  
  </FormContainer>
);