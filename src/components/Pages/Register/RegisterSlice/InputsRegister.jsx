import styled from "styled-components";
import { Input } from "../../../Layout/Inputs/InputText";
import { InputBtn } from "../../../Layout/Inputs/InputBtn"

const ContainerInputsRegister = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 2rem 0 2rem 0;
  justify-content: center;
`;

export const InputsRegister = () =>(
  <ContainerInputsRegister>    
    <Input typeInput="text" textPlaceholder ="Nombre Completo"/>
    <Input typeInput="text" textPlaceholder ="Nombre de Usuario" />
    <Input typeInput="email" textPlaceholder ="Correo electrónico"/>
    <Input typeInput="password" textPlaceholder ="Contraseña"/>
    <InputBtn valueBtn = "REGISTRARME"/>
  </ContainerInputsRegister>  
);

