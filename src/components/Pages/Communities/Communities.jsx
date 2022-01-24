import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import axios from '../../../utils/axios';

// import { Link, Outlet } from "react-router-dom";

// Components
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import NewCommunitie from './NewCommunitie/NewCommunitie';
import GOFData from './GOFData/GOFData';
import CommunitieAddCard from '../../Layout/CommunitieAddCard/CommunitieAddCard';

// import actions from '../../../store/action';
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
  // const dispatch = useDispatch();
  // const { userAuthenticated } = useSelector((state) => state);

  const [comunidades, setComunidades] = useState([]);

  const [results, setResults] = useState([]);

  // const userAuth = useSelector((state) => state.userAuthenticated);

  useEffect(() => {
    axios
      .get('/api/communities/')
      .then((response) => {
        // console.log("dataaa",response.data)
        setComunidades(response.data);
        setResults(response.data);
      })
      // eslint-disable-next-line
      .catch((error) => console.log('Errorrrrrr', error));
  }, []);

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
          comunidades={comunidades}
        />
        <hr style={{ marginTop: '100px' }} />

        {/* Impresion de resultados de busqueda */}
        <Comunidades>
          {results?.map((e, i) => (
            <CommunitieAddCard
              key={uuidv4()}
              id={i}
              image={e.image}
              users={e.users.length}
              checks={e.cheks}
              title={e.title}
            />
          ))}
        </Comunidades>
      </Container>

      <Footer />
    </PageContainer>
  );
}

export default Communities;
