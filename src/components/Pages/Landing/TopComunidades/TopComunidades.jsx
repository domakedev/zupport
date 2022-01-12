import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from '../../../../utils/axios';

// Componentes
import CardComunidadShow from '../../../Layout/CardComunidadShow/CardComunidadShow';

// Mock, NO BORRAR AUNQUE NO SE USE!

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

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 80%;

  margin: 20px auto 0px auto;

  border-radius: 3px;
  gap: 1px;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;
  cursor: pointer;

  display: block;
  border: none;

  padding: 13px 22px;
  margin: 0 auto;

  background-color: var(--secondary-color);
  color: white;
  border-radius: 3px;

  font-weight: bold;
  font-size: 1.8rem;

  font-family: var(--secondary-font);
`;

function TopComunidades() {
  const [comunidades, setComunidades] = useState([]);

  useEffect(() => {
    axios
      .get('/api/communities/')
      .then((response) => {
        // console.log("Data:", response.data);
        setComunidades(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log('Error:', error)});
  }, []);

  return (
    <Container>
      <Titulo>TOP COMUNIDADES</Titulo>

      <Cards>
        {comunidades.map((card) => (
          <CardComunidadShow
            key={new Date()}
            users={card.users}
            checks={card.cheks}
            title={card.title}
            image={card.image}
          />
        ))}
      </Cards>

      <LinkTo to="/communities">VER MAS COMUNIDADES</LinkTo>
    </Container>
  );
}

export default TopComunidades;
