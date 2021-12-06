import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';


//General Styled
//import { SubTitle, TitleOrange } from "../../../css/generalStyled";


//Icons
import {
  BsPeopleFill,
  BsFillBookmarkCheckFill,
  BsFillPersonPlusFill as AddPerson,
} from "react-icons/bs";

const Container = styled.div`
  height: 200px;
  width: 320px;
  margin: 20px;

  position: relative;

  border: none;
  border-radius: 3px;
  background-color: var(--light-blue);

  font-family: var(--secondary-font);
`;

const Imagen = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  border-radius: 50%;

  background-color: aquamarine;

  object-fit: cover;
  object-position: center center;
`;

const Name = styled.h3`
  font-size: 2rem;
  font-family: var(--secondary-font);
  font-weight: normal;
  color: var(--dark-color);
`;

const ContainerUsers = styled.div`
  position: absolute;

  padding: 10px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: none;

  top: 0px;

  border-bottom-right-radius: 3px;

  border-top: none;
  border-left: none;

  svg {
    margin-right: 5px;
  }
`;

const ContainerChecks = styled.div`
  position: absolute;

  padding: 10px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  top: 0px;
  right: 0;

  border-bottom-left-radius: 3px;

  border-top: none;
  border-right: none;

  svg {
    margin-right: 5px;
  }
`;

const Number = styled.span`
  font-size: 1.4rem;

  color: var(--boring-color);

  font-weight: bold;
  letter-spacing: 2px;
`;

const DataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 30px;
`;

const AddButton = styled.button`
  position: absolute;
  bottom: 5px;
  width: 200px;
  height: 50px;
  left: 60px;
  padding: 10px;

  border: none;
  background-color: var(--principal-color);

  color: var(--light-color);

  font-size: 1.8rem;
  font-weight: normal;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  border-radius: 3px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  cursor: pointer;
`;

const Linea = styled.hr`
  width: 18%;
  position: absolute;
  color: var(--principal-color);
`;

const LineaI = styled(Linea)`
  bottom: 30px;
`;
const LineaD = styled(Linea)`
  bottom: 30px;
  right: 0;
`;

const CommunitieAddCard = ({ image, users, checks, title }) => {

  const unirmeA = () =>{
    console.log("Me uni a la comunidad de:", title);
  }

  return (
    <Container>
      <DataContainer>
        <Imagen src={image} alt="" />
        <Name>{title}</Name>
      </DataContainer>

      <ContainerUsers>
        <BsPeopleFill color="#797770" size="30px" />
        <Number>{users}</Number>
      </ContainerUsers>

      <ContainerChecks>
        <BsFillBookmarkCheckFill color="#797770" size="30px" />
        <Number>{checks}</Number>
      </ContainerChecks>

      <AddButton onClick={unirmeA}>
        <AddPerson size="40px" />
        UNIRME
      </AddButton>

      <LineaI />
      <LineaD />
    </Container>
  );
};

CommunitieAddCard.propTypes = {
  title:PropTypes.string,
  users: PropTypes.number,
  cheks: PropTypes.number,
  image: PropTypes.string,

}

export default CommunitieAddCard;
