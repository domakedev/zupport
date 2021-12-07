import React from 'react';
import styled from "styled-components";
import WelcomeLogin from "./LoginSlice/WelcomeLogin";
import InputsLogin from "./LoginSlice/InputsLogin";
import BtnRss from "../../Layout/Inputs/InputSocialMediaButton";
import SeparatorLine from "./LoginSlice/SeparatorLine";
import { Link } from "react-router-dom";


//Import layouts
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  text-align: center;
  padding: 3rem 0;
`;

const FormLogin = styled.form`
  width: 100%;
  justify-self: center;
  @media (min-width: 768px) {
    width: 100%;
    max-width: 55rem;
    justify-self: center;
  }
`;

const OptionRegister = styled.p`
  font-family: var(--secondary-font);
  color: var(--dark-color);
  font-size: 1.6rem;
  text-align: end;
`;
const LinkTo = styled(Link)`
  text-decoration: none;
  color: var(--secondary-color);
  /* font-size: 1.6rem; */
`;

const SuperContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

const Login = () => (
  <SuperContainer>
    <Header></Header>

    <FormContainer>
      <FormLogin>
        <WelcomeLogin />

        <InputsLogin />

        <SeparatorLine />
        <BtnRss />

        <OptionRegister>
          ¿No tienes una cuenta?
          <LinkTo to="/register"> Regístrate aquí</LinkTo>
        </OptionRegister>

      </FormLogin>
    </FormContainer>

    <Footer></Footer>
  </SuperContainer>
);

export default Login;
