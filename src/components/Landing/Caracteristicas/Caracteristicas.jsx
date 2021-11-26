import React from "react";
import styled from "styled-components";
import Caracteristica from "./Caracteristica";

import ImageVoice from "../../../images/voice.svg";
import ImageChat from "../../../images/Chat.svg";
import ImagePoints from "../../../images/points.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`;

const Titulo = styled.h2`
  font-size: 3.6rem;
  text-align: center;
  margin-top: 70px;
  padding-right: 15px;
  padding-left: 15px;

  font-family: var(--principal-font);
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const fakeData = [
  {
    description: "Dentro de tu comunidad únete a canales de voz",
    image: ImageVoice,
  },
  {
    description: "Gana puntos, sube de rango mientras ayudas a tu comunidad",
    image: ImagePoints,
  },
  {
    description: "Crea un post de tu problema y tu comunidad te ayudara.",
    image: ImageChat,
  },
];

const Caracteristicas = () => {
  return (
    <Container>
      <Titulo>DESCUBRE LA PLATAFORMA</Titulo>

      <CardsContainer>
        {fakeData.map((data, index) => (
          <Caracteristica key={index} description={data.description} image={data.image} />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Caracteristicas;
