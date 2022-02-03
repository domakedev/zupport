import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import action from '../../../../store/action';
import { rankingsCommunity } from '../../../../controller/CommunityPostCtr/utilities';
// import axios from '../../../../utils/axios';

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
  const dispatch = useDispatch();
  const [comunidades, setComunidades] = useState([]);

  const allCommunities = useSelector((state) => state.communities);

  useEffect(async () => {
    await dispatch(action.getAllCommunities());
  }, []);
  useEffect(async () => {
    const topCommunities = rankingsCommunity(allCommunities, 6); // filtra las 6 comunidades con más usuarios
    setComunidades(topCommunities);
    // console.log(topCommunities);
  }, [allCommunities]);
  return (
    <Container>
      <Titulo>TOP COMUNIDADES</Titulo>

      <Cards>
        {comunidades.map((card) => (
          <CardComunidadShow
            key={uuidv4()}
            users={card.users.length}
            checks={card.posts}
            title={card.title}
            image={card.image}
            postsResol={card.postsResol}
          />
        ))}
      </Cards>

      <LinkTo to="/communities">VER MAS COMUNIDADES</LinkTo>
    </Container>
  );
}

export default TopComunidades;
