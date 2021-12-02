import styled from "styled-components";
import { Input } from "../../Layout/Inputs/InputText";
import { InputBtn } from "../../Layout/Inputs/InputBtn"

const ContainerInputsRegister = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem 0 2rem 0;
  justify-content: center;
`;

export const InputsRegister = () =>(
  <ContainerInputsRegister>
    <Input typeInput="text" textPlaceholder ="Nombre completo"/>
    <Input typeInput="text" textPlaceholder ="Nombre de usuario" />
    <Input typeInput="email" textPlaceholder ="Correo electrónico"/>
    <Input typeInput="password" textPlaceholder ="Contraseña"/>
    <Input typeInput="password" textPlaceholder ="Confirmar contraseña"/>
    <InputBtn valueBtn = "REGISTRARME"/>
  </ContainerInputsRegister>
);

