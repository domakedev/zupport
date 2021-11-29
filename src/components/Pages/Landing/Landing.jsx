import React from "react";
import styled from "styled-components";

//Componente
import Hero from "./MainContent/Hero/Hero";
import TextAndButton from "./MainContent/TextAndButton/TextAndButton";
import TopComunidades from "./TopComunidades/TopComunidades";
import Caracteristicas from "./Caracteristicas/Caracteristicas";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

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

const Landing = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerContent>
          <Hero></Hero>
          <TextAndButton></TextAndButton>
        </ContainerContent>

        <TopComunidades></TopComunidades>
        <Caracteristicas></Caracteristicas>
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
