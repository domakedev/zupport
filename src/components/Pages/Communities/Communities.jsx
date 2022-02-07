/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { FaLevelUpAlt } from 'react-icons/fa';
// import axios from '../../../utils/axios';

// import { Link, Outlet } from "react-router-dom";

// Components
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import NewCommunitie from './NewCommunitie/NewCommunitie';
import GOFData from './GOFData/GOFData';
import CommunitieAddCard from '../../Layout/CommunitieAddCard/CommunitieAddCard';
import action from '../../../store/action';
import {
  isUserInCommu,
  // rankingsCommunity,
} from '../../../controller/CommunityPostCtr/utilities';

// General Styled
import {
  SubTitle,
  TitleOrange,
  PageContainer,
} from '../../../css/generalStyled';

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px auto;
  margin-top: 30px;
  flex-grow: 1;
`;

const Comunidades = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Text = styled.h3`
  font-family: var(--principal-font);
  font-style: normal;
  font-weight: normal;
  font-size: 2.6rem;
  line-height: 45px;
  margin: 20px 0;
  color: var(--warning-color);
  text-align: center;
`;

const TextBusqueda = styled.h3`
  font-family: var(--principal-font);
  font-style: normal;
  font-weight: normal;
  font-size: 2.6rem;
  line-height: 45px;
  margin: 20px 0;
  color: var(--principal-color);
  width: 100%;
  text-align: center;
  border-bottom: 1px solid var(--principal-color);
`;

function Communities() {
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);

  const allCommunities = useSelector((state) => state.communities);
  const currentUser = useSelector((state) => state.currentUserOTokencito);
  const userInCommunity = useSelector((state) =>
    isUserInCommu(state.communities, 'userInCommunity', currentUser.username)
  );
  const userInNotCommunity = useSelector((state) =>
    isUserInCommu(state.communities, 'userInNotCommunity', currentUser.username)
  );

  useEffect(async () => {
    await dispatch(action.getAllCommunities());
  }, []);

  // console.log('hola', userInNotCommunity, userInCommunity);
  return (
    <PageContainer>
      <Header />
      <Container>
        <TitleOrange>¿Qué te interesa ahora? </TitleOrange>
        <SubTitle>Sé parte de una comunidad o crea una.</SubTitle>

        <NewCommunitie />

        <GOFData
          setResults={setResults}
          results={results}
          comunidades={allCommunities}
        />
        <hr style={{ marginTop: '30px' }} />

        {/* Impresion de resultados de busqueda */}
        <Comunidades>
          {results.length !== allCommunities.length
            ? results?.map((e) => (
                <CommunitieAddCard
                  key={uuidv4()}
                  id={e._id}
                  image={e.image}
                  users={e.users} // se manda el array de post que pertenecen a esa users
                  checks={e.posts} // se manda el array de post que pertenecen a esa comunidad
                  title={e.title}
                  description={e.description}
                  buttonText="UNIRME"
                />
              ))
            : null}
          {}
        </Comunidades>
        <TextBusqueda>
          Resultados de Busqueda <FaLevelUpAlt />
        </TextBusqueda>

        {userInCommunity.length !== 0 ? <Text>Mis Comunidades :</Text> : null}

        <Comunidades>
          {userInCommunity?.map((e) => (
            <CommunitieAddCard
              key={uuidv4()}
              id={e._id}
              image={e.image}
              users={e.users} // se manda el array de post que pertenecen a esa users
              checks={e.posts} // se manda el array de post que pertenecen a esa comunidad
              title={e.title}
              description={e.description}
              buttonText="MI COMUNIDAD"
              creator={e.creator}
            />
          ))}
        </Comunidades>
        <Text>Únete a las siguientes comunidades :</Text>
        <Comunidades>
          {userInNotCommunity?.map((e) => (
            <CommunitieAddCard
              key={uuidv4()}
              id={e._id}
              image={e.image}
              users={e.users} // se manda el array de post que pertenecen a esa users
              checks={e.posts} // se manda el array de post que pertenecen a esa comunidad
              title={e.title}
              description={e.description}
              buttonText="UNIRME"
            />
          ))}
        </Comunidades>
      </Container>

      <Footer />
    </PageContainer>
  );
}

export default Communities;
