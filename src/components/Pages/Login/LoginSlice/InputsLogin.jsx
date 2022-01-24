import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import actions from '../../../../store/action';
import Input from '../../../Layout/Inputs/InputText';
import InputBtn from '../../../Layout/Inputs/InputBtn';

const ContainerInputsLogin = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0 2rem 0;
  justify-content: center;
`;
const ForgotPassword = styled.a`
  text-decoration: none;
  font-size: 1.6rem;
  font-family: var(--secondary-font);
  color: #325d88;
  text-align: end;
`;

function InputsLogin() {
  const dispatch = useDispatch();
  const [password, changePassword] = useState({ field: '', check: null });
  const [email, changeEmail] = useState({ field: '', check: null });

  const parameters = {
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const EnviarDataLogin = (e) => {
    e.preventDefault();
    dispatch(actions.setTheSpinner(true));
    const data = {
      email: email.field,
      password: password.field,
    };

    // Enviar data del login en un POST
    dispatch(actions.loginUser(data));
  };

  return (
    <ContainerInputsLogin>
      <Input
        state={email}
        changeState={changeEmail}
        inputType="email"
        label="Correo electronico"
        textPlaceholder="Correo electrónico"
        inputName="correo"
        errorText="Ingrese un correo electronico válido."
        inputParameters={parameters.email}
      />
      <Input
        state={password}
        changeState={changePassword}
        inputType="password"
        label="Contraseña"
        textPlaceholder="Contraseña"
        inputName="password"
        errorText="La contraseña debe poseer de 4 a 12 digitos."
        inputParameters={parameters.password}
      />
      <InputBtn EnviarDataLogin={EnviarDataLogin} valueBtn="INICIAR SESIÓN" />
      <ForgotPassword>¿Olvidaste tu contraseña?</ForgotPassword>
    </ContainerInputsLogin>
  );
}

export default InputsLogin;
