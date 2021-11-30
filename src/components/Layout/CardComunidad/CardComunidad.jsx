import React from "react";
import styled from "styled-components";

//Images and Icons
import IconUsers from "../../../images/users.svg"
import IconCheck from "../../../images/check.svg"

const Container = styled.div`
  height: 150px;
  width: 240px;
  margin: 20px;

  position: relative;

  border: 2px solid black;
  border-radius: 3px;

  font-family: var(--secondary-font);
`;

const CardComunidadIMG = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
  object-position: center center;

  border-radius: 3px;
`;

const CardStatsUsers = styled.div`
  position: absolute;

  padding: 5px 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 2px solid black;

  top: 0px;

  background-color: darkcyan;

  border-bottom-right-radius: 3px;

  border-top: none;
  border-left: none;
`;

const CardIcon = styled.img`
  margin-right: 5px;
`;

const StatsNumber = styled.span`
  font-size: 1.4rem;

  color: var(--light-color);

  font-weight: bold;
  letter-spacing: 2px;
`;

const CardStatsChecks = styled.div`
  position: absolute;

  padding: 5px 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 2px solid black;

  top: 0px;
  right: 0;

  background-color: steelblue;

  border-bottom-left-radius: 3px;

  border-top: none;
  border-right: none;
`;

const CardName = styled.h3`
  position: absolute;

  padding: 5px 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 2px solid black;

  bottom: 0px;
  right: 0;

  width: 100%;

  background-color: white;

  border: none;

  border-top: 2px solid black;

  display: flex;
  justify-content: center;

  font-size: 1.8rem;
`;

const CardComunidad = ({image, users, checks, title}) => {
  return (
    <Container>
      <CardComunidadIMG src={image} alt="" />

      <CardStatsUsers>
        <CardIcon src={IconUsers} alt="cantidad de usuarios en la comunidad" />
        <StatsNumber>{users}</StatsNumber>
      </CardStatsUsers>

      <CardStatsChecks>
        <CardIcon src={IconCheck} alt="cantidad de problemas resueltos" />
        <StatsNumber>{checks}</StatsNumber>
      </CardStatsChecks>

      <CardName>{title}</CardName>
    </Container>
  );
};

export default CardComunidad;
