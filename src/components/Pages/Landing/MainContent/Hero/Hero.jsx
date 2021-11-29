import React from "react";
import styled from "styled-components";

//Images
import IconoPerfil from "../../../../../images/perfil.svg";
import Scaled from "../../../../../images/scaled.jpg";
import IronMan from "../../../../../images/iron-man.jpg";
import Capitan from "../../../../../images/capi.jfif";
import MainHeroIMG from "../../../../../images/fondo-hero.svg";

const Container = styled.div`
  max-width: 483px;
  width: 100%;
  height: 453px;
  background-image: url(${MainHeroIMG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;

  @media screen and (min-width: 768px) {
    order: 1;
  }
`;

const Description = styled.p`
  position: absolute;
  bottom: 120px;
  right: 10%;

  font-size: 1.8rem;
  width: 100px;
  text-align: right;

  font-family: var(--secondary-font);
`;

//Como cargar ruta dinamicamente aqui fuera del componente principal?

const HeroCard1 = styled.div`
  display: inline-block;

  position: absolute;

  height: 133px;
  width: 137px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  background-image: url(${Scaled});

  border-radius: 43px 3px 3px 3px;
  top: 53px;
  left: 15px;
`;

const HeroCard2 = styled.div`
  display: inline-block;

  position: absolute;

  height: 133px;
  width: 137px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  background-image: url(${IronMan});

  border-radius: 3px 43px 3px 3px;
  right: 15px;
  top: 79px;
`;

const HeroCard3 = styled.div`
  display: inline-block;

  position: absolute;

  height: 133px;
  width: 137px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  background-image: url(${Capitan});

  border-radius: 3px 3px 3px 43px;
  top: 240px;
  left: 14%;
`;

const HeroCardIcon = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;

  background-color: white;
  padding: 5px;

  border-radius: 50%;
  border: 1px solid black;
`;

const Hero = () => {
  return (
    <Container>
      <Description>Top Helpers en sus comunidades</Description>

      <HeroCard1 className="hero__card--TL">
        <HeroCardIcon
          src={IconoPerfil}
          alt="icono de perfil"
        />
      </HeroCard1>

      <HeroCard2 className="hero__card--TRC">
        <HeroCardIcon
          src={IconoPerfil}
          alt="icono de perfil"
        />
      </HeroCard2>

      <HeroCard3 className="hero__card--BC">
        <HeroCardIcon
          src={IconoPerfil}
          alt="icono de perfil"
        />
      </HeroCard3>
    </Container>
  );
};

export default Hero;
