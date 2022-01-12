import React from 'react';
import styled from 'styled-components';
import InputsRegister from './RegisterSlice/InputsRegister';
import WelcomeRegister from './RegisterSlice/WelcomeRegister';
import BtnRss from '../../Layout/Inputs/InputSocialMediaButton';
import SeparatorLine from '../Login/LoginSlice/SeparatorLine';

// Import layouts
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 20px 0px;
  width: 80%;
  justify-self: center;
  @media (min-width: 768px) {
    width: 100%;
    max-width: 55rem;
  }
`;

function Register() {
  return (
    <>
      <Header />

      <ContainerForm>
        <WelcomeRegister />
        <InputsRegister />
        <SeparatorLine />
        <BtnRss />
      </ContainerForm>

      <Footer />
    </>
  );
}

export default Register;
