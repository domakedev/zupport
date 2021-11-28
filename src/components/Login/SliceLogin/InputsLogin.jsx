import styled from "styled-components";
import { Input } from "../../Layout/Inputs/InputText";
import { InputBtn } from "../../Layout/Inputs/InputBtn"

const ContainerInputsLogin = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 2rem 0 2rem 0;
`;
const ForgotPassword = styled.a`
  text-decoration: none;
  font-size: 1.6rem;
  font-family: var(--secondary-font);
  color: #325D88;
  text-align: end;
`;
export const InputsLogin = () =>(
  <ContainerInputsLogin>
    <Input typeInput="email" textPlaceholder ="Correo electrónico"/>
    <Input typeInput="password" textPlaceholder ="Contraseña"/>
    <InputBtn valueBtn = "INICIAR SESIÓN"/>
    <ForgotPassword>¿Olvidaste tu contraseña?</ForgotPassword>
  </ContainerInputsLogin>  
);

