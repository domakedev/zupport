import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import Swal from 'sweetalert2';
import Input from '../../../Layout/Inputs/InputText';
import InputBtn from '../../../Layout/Inputs/InputBtn';

// Import Register from Redux
import actions from '../../../../store/action';

import '../../../../css/index.css';

const ContainerInputsRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin: auto;
  padding: 30px 0px;
`;

const Label = styled.label`
  font-family: var(--secondary-font);
  font-size: 1.8rem;
  font-weight: 700;
  display: block;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  ${(props) =>
    props.check === 'false' &&
    css`
      color: var(--alert-color);
    `}
`;

const TermsContainer = styled.div`
  input {
    margin-right: 10px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SuccessMsg = styled.p`
  font-family: var(--secondary-font);
  font-size: 14px;
  color: var(--sucess-color);
  padding-top: 30px;
`;

const ErrorMsg = styled.div`
  font-family: var(--secondary-font);
  font-size: 14px;
  height: 45px;
  line-height: 45px;
  background: #f66060;
  padding: 0px 10px;
  border-radius: 3px;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;

function InputsRegister() {
  // Redux
  const dispatch = useDispatch();

  const [user, changeUser] = useState({ field: '', check: null });
  const [name, changeName] = useState({ field: '', check: null });
  const [password, changePassword] = useState({ field: '', check: null });
  const [password2, changePassword2] = useState({ field: '', check: null });
  const [email, changeEmail] = useState({ field: '', check: null });
  const [terms, changeTerms] = useState(false);
  const [formOk, changeFormOk] = useState(null);

  const parameters = {
    user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const checkPassword2 = () => {
    if (password.field.length > 0) {
      if (password.field !== password2.field) {
        changePassword2((prevState) => ({ ...prevState, check: 'false' }));
      } else {
        changePassword2((prevState) => ({ ...prevState, check: 'true' }));
      }
    }
  };

  const onChangeTerms = (e) => {
    changeTerms(e.target.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    console.log();

    if (
      user.check === 'true' &&
      name.check === 'true' &&
      password.check === 'true' &&
      password2.check === 'true' &&
      email.check === 'true' &&
      terms
    ) {
      // Creacion de objeto usuario para enviar a base de datos
      const newUser = {
        fullname: name.field,
        username: user.field,
        email: email.field,
        password: password.field,
      };
      // Con redux
      dispatch(actions.registerUser(newUser));

      // Reset de formulario
      changeFormOk(true);
      changeUser({ field: '', check: null });
      changeName({ field: '', check: null });
      changePassword({ field: '', check: null });
      changePassword2({ field: '', check: null });
      changeEmail({ field: '', check: null });
      Swal.fire('Registrado con exito!', 'Verifica tu correo', 'success');
    } else {
      changeFormOk(false);
    }
  };

  return (
    <ContainerInputsRegister action="" onSubmit={onSubmit}>
      <Input
        state={user}
        changeState={changeUser}
        inputType="text"
        label="Usuario"
        textPlaceholder="Nombre de usuario"
        inputName="usuario"
        errorText="El usuario debe poseer de 4 a 16 digitos y solo puede contener numeros, letras y guión bajo."
        inputParameters={parameters.user}
      />
      <Input
        state={name}
        changeState={changeName}
        inputType="text"
        label="Nombre"
        textPlaceholder="Nombre completo"
        inputName="nombre"
        errorText="El nombre solo debe contener letras y espacios."
        inputParameters={parameters.name}
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
      <Input
        state={password2}
        changeState={changePassword2}
        inputType="password"
        label="Repetir Contraseña"
        textPlaceholder="Repetir Contraseña"
        inputName="password2"
        errorText="Ambas contraseñas deben ser iguales."
        functionx={checkPassword2}
      />
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

      <TermsContainer>
        <Label>
          <input
            type="checkbox"
            // inputName="terminos"
            id="terminos"
            checked={terms}
            onChange={onChangeTerms}
          />
          Acepto los términos y condiciones
        </Label>
      </TermsContainer>

      {formOk === false && (
        <ErrorMsg>
          <p>
            <BsFillExclamationTriangleFill />
            <b>Error:</b> Revisa los campos señalados.
          </p>
        </ErrorMsg>
      )}
      <BtnContainer>
        <InputBtn valueBtn="REGISTRARME" />
        {formOk === true && (
          <SuccessMsg>
            Formulario enviado con éxito! Verifica tu correo
          </SuccessMsg>
        )}
      </BtnContainer>
    </ContainerInputsRegister>
  );
}

export default InputsRegister;
