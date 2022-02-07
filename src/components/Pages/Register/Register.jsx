import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

const Registered = styled.div`
  font-family: var(--secondary-font);
  color: var(--dark-color);
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

const Link = styled.a`
  color: var(--dark-color);
  padding-left: 10px;
  :hover {
    color: var(--secondary-color);
  }
`;

function Register() {
  const userAuth = useSelector((state) => state.userAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (userAuth) {
      navigate('/');
    }
  }, []);
  return (
    <>
      <Header />

      <ContainerForm>
        <WelcomeRegister />
        <InputsRegister />
        <SeparatorLine />
        <BtnRss />
        <Registered>
          ¿Ya estas registrado? <Link href="/login"> Accede Aqui</Link>
        </Registered>
      </ContainerForm>

      <Footer />
    </>
  );
}

export default Register;
