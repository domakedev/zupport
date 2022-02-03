// Import React
import React from 'react';
// Import React Router
import { Link } from 'react-router-dom';
// Import Styled Components
import styled from 'styled-components';
// Import Images
// import Cloud from '../../../images/cloud.png';
import coffe from '../../../images/coffee-like.gif';
// Import Layout Components
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';

const Button = styled.button`
  width: 110px;
  height: 35px;
  background-color: var(--principal-color);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 2px 0 var(--boring-color);
  margin: auto;
  text-align: center;
  font-family: var(--secondary-font);
  font-size: 1.8rem;
  color: var(--light-color);
  text-decoration: none;
  border: none;

  &:hover {
    background-color: var(--secondary-color);
    color: var(--light-color);
  }
`;

const ContainerCoffe = styled.img`
  width: 50%;
`;

const Container = styled.div`
  margin: auto;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
  }
`;

const Titulo = styled.h1`
  text-align: center;
  padding: 40px 0 30px 0;
  font-family: var(--principal-font);
  font-size: 3.6rem;
  color: var(--sucess-color);
`;
// const Text = styled.p`
//   text-align: center;
//   padding: 40px 0 30px 0;
//   font-family: var(--principal-font);
//   font-size: 3.6rem;
//   color: var(--boring-color);
// `;

function SucceedPayment() {
  return (
    <>
      <Header />
      <MainContainer>
        <ContainerCoffe src={coffe} alt="coffe" />
        <Container>
          <Titulo>Tu donación fue exitosa!</Titulo>
          <Link Style="text-decoration: none" to="/">
            <Button>VOLVER</Button>
          </Link>
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}

export default SucceedPayment;
