// Import React
import React from 'react';
// Import React Router
import { Link } from 'react-router-dom';
// Import Styled Components
import styled from 'styled-components';
// Import Images
import Cloud from '../../../images/cloud.png';
import I404 from '../../../images/404.png';
import CFail from '../../../images/confail.png';
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

const CloudContainer = styled.img`
  margin-left: auto;
  padding: 10px;
`;

const ConectionFailContainer = styled.img`
  padding-top: 40px;
  margin-right: auto;
  margin-bottom: 30px;
`;

const Container404Img = styled.img``;

const Container404 = styled.div`
  margin: auto;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Titulo = styled.h1`
  text-align: center;
  padding: 40px 0 30px 0;
  font-family: var(--principal-font);
  font-size: 3.6rem;
  color: var(--boring-color);
`;

function P404() {
  return (
    <>
      <Header />
      <MainContainer>
        <CloudContainer src={Cloud} alt="Cloud" />
        <Container404>
          <Container404Img src={I404} alt="404" />
          <Titulo>PAGE NOT FOUND</Titulo>
          <Link Style="text-decoration: none" to="/">
            <Button>VOLVER</Button>
          </Link>
        </Container404>
        <ConectionFailContainer src={CFail} alt="ConectionFail" />
      </MainContainer>
      <Footer />
    </>
  );
}

export default P404;
