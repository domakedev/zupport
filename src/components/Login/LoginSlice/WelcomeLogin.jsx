import React from 'react';
import styled from "styled-components";

const WelcomeContainer = styled.section`
  width: 27rem;
  margin: auto;
`;

const TitleLogin = styled.h2`
  color: var(--sucess-color);
  font-family: var(--principal-font);
  font-size: 3rem;
  font-weight: normal;
  margin-top: 2.6rem;
`;

const QuoteContainer = styled.blockquote`
  color: var(--boring-color);
  font-size: 1.6rem;
  font-family: var(--secondary-font);
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  text-align: start;
  margin-left: 4rem;
`;

const QuoteAuthor = styled.cite`
  text-align: end;
  margin-right: 5px;
`;

const WelcomeLogin = ()=>(
  <WelcomeContainer>
    <TitleLogin>Es bueno volver a verte</TitleLogin>
    <QuoteContainer>
        “¿Cuál es la esencia de la vida? <br/>
        Servir a otros y hacer el bien”
      <QuoteAuthor>- Aristóteles</QuoteAuthor>
    </QuoteContainer>
  </WelcomeContainer>
);

export default WelcomeLogin;
