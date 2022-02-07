import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';

const AuthTitle = styled.div`
  display: flex;
  width: max-content;
  margin: 120px auto;
  font-family: var(--principal-font);
  color: var(--boring-color);
  text-align: center;
  font-weight: normal;
  font-size: 3.6rem;
  padding: 2rem 0;
`;

const AuthSubTitle = styled.div`
  display: flex;
  margin: 80px auto;
  text-decoration: underline;
  width: max-content;
  font-family: var(--principal-font);
  color: var(--boring-color);
  text-align: center;
  font-weight: normal;
  font-size: 3.6rem;
  padding: 2rem 0;
  cursor: pointer;
  :hover {
    color: var(--secondary-color);
  }
`;

function AuthReadirect() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <AuthTitle>¿Qué tal si iniciamos sesión primero?</AuthTitle>
      <AuthSubTitle
        onClick={() => {
          navigate('/login');
        }}
      >
        Inicia sesión aquí
      </AuthSubTitle>
      <AuthSubTitle
        onClick={() => {
          navigate('/register');
        }}
      >
        o Registrate
      </AuthSubTitle>
      <Footer />
    </div>
  );
}

export default AuthReadirect;
