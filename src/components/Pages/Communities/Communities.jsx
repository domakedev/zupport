/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
// import axios from '../../../utils/axios';

// import { Link, Outlet } from "react-router-dom";

// Components
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import NewCommunitie from './NewCommunitie/NewCommunitie';
import GOFData from './GOFData/GOFData';
import CommunitieAddCard from '../../Layout/CommunitieAddCard/CommunitieAddCard';
import action from '../../../store/action';

// General Styled
import {
  SubTitle,
  TitleOrange,
  PageContainer,
} from '../../../css/generalStyled';

// Mock, NO BORRAR AUNQUE NO SE USE!
// import mock from "../../../mocks/generalMock"

// const PageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;

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

function Communities() {
  const dispatch = useDispatch();
  // const { userAuthenticated } = useSelector((state) => state);

  // const [comunidades, setComunidades] = useState([]);

  const [results, setResults] = useState([]);
  // const [check, setCheck] = useState([]);

  // const userAuth = useSelector((state) => state.userAuthenticated);
  const allCommunities = useSelector((state) => state.communities);
  // cuántas posts resueltos existen
  // const postResolved = results.filter(e => e.)

  useEffect(async () => {
    await dispatch(action.getAllCommunities());
    // axios
    //   .get('/api/communities/')
    //   .then((response) => {
    //     // console.log("dataaa",response.data)
    //     setComunidades(response.data);
    //     setResults(response.data);
    //   })
    // eslint-disable-next-line
      // .catch((error) => console.log('Errorrrrrr', error));
    // setResults(allCommunities);
  }, []);

  useEffect(async () => {
    // const postResolved = [];
    setResults(allCommunities);
    // if (results.length !== 0) {
    //   for (let i = 0; i < results.length; i++) {
    //     const resp = results[i].filter((e) => e.resolved);
    //     postResolved.push(...resp);
    //   }
    //   setCheck(postResolved);
    // }
    // console.log('resp filtradas', postResolved);
  }, [allCommunities]);

  // console.log(allCommunities);
  return (
    <PageContainer>
      <Header />
      {results.length === 0 ? (
        <h1>cargando</h1>
      ) : (
        <Container>
          <TitleOrange>¿Qué te interesa ahora? </TitleOrange>
          <SubTitle>Sé parte de una comunidad o crea una.</SubTitle>

          <NewCommunitie />

          <GOFData
            setResults={setResults}
            results={results}
            comunidades={allCommunities}
          />
          <hr style={{ marginTop: '100px' }} />

          {/* Impresion de resultados de busqueda */}
          <Comunidades>
            {results?.map((e) => (
              <CommunitieAddCard
                key={uuidv4()}
                id={e._id}
                image={e.image}
                users={e.users} // se manda el array de post que pertenecen a esa users
                checks={e.posts} // se manda el array de post que pertenecen a esa comunidad
                title={e.title}
              />
            ))}
          </Comunidades>
        </Container>
      )}

      <Footer />
    </PageContainer>
  );
}

export default Communities;
