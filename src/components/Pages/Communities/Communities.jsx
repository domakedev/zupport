import React,{useEffect, useState} from "react";
import styled from "styled-components";
import axios from 'axios'
//import { Link, Outlet } from "react-router-dom";



//Components
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import NewCommunitie from "./NewCommunitie/NewCommunitie";
import GOFData from "./GOFData/GOFData";
import CommunitieAddCard from "../../Layout/CommunitieAddCard/CommunitieAddCard";

//General Styled
import { SubTitle, TitleOrange, PageContainer } from "../../../css/generalStyled";

//Mock, NO BORRAR AUNQUE NO SE USE!
import mock from "../../../mocks/generalMock"

console.log(mock);


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

`


const Communities = () => {

  const [comunidades, setComunidades] = useState([])

  const [results, setResults] = useState([]);

  useEffect(()=>{
    axios.get("/comunidades").then(function (response) {
      console.log("dataaa",response.data.comunidades)
      setComunidades(response.data.comunidades)
      setResults(response.data.comunidades)
    }).catch(error=> console.log("Errorrrrrr",error))
  },[])

  return (
    <PageContainer>
      <Header />

      <Container>
        <TitleOrange>¿Qué te interesa ahora?</TitleOrange>
        <SubTitle>Sé parte de una comunidad o crea una.</SubTitle>

        <NewCommunitie />

        <GOFData
          setResults={setResults}
          results={results}
          comunidades={comunidades}
        />
        <hr style={{ marginTop: "100px" }} />

        {/* <Comunidades>
          {comunidades.map((e, i) => {
            return (
              <CommunitieAddCard
                key={i}
                id={i}
                image={e.image}
                users={e.users}
                checks={e.cheks}
                title={e.title}
              />
            );
          })}
        </Comunidades> */}

        {/* Impresion de resultados de busqueda */}
        <Comunidades>
          {results?.map((e, i) => {
            return (
              <CommunitieAddCard
                key={i}
                id={i}
                image={e.image}
                users={e.users}
                checks={e.cheks}
                title={e.title}
              />
            );
          })}
        </Comunidades>



      </Container>

      <Footer />


    </PageContainer>
  );
};

export default Communities;
