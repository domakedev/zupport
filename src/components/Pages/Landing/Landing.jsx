import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// Componente
import Hero from './MainContent/Hero/Hero';
import TextAndButton from './MainContent/TextAndButton/TextAndButton';
import TopComunidades from './TopComunidades/TopComunidades';
import Caracteristicas from './Caracteristicas/Caracteristicas';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';

// Actions de Redux
import actions from '../../../store/action';

const ContainerContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
  }
`;

const Container = styled.div`
  flex-grow: 1;
  max-width: 1200px;
  margin: 0 auto;
`;

function Landing() {
  const dispatch = useDispatch();
  const topUsers = useSelector((state) => state.topLandingUSers);

  useEffect(() => {
    dispatch(actions.getTopUsersLanding());
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ContainerContent>
          <Hero topUsers={topUsers} />
          <TextAndButton />
        </ContainerContent>

        <TopComunidades />
        <Caracteristicas />
      </Container>
      <Footer />
    </>
  );
}

export default Landing;
