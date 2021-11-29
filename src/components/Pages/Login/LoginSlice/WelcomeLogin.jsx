import styled from "styled-components";

const WelcomeContainer = styled.section`    
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
`;
const Quote = styled.p`
  margin: 0 0 7px 0;
`;
const QuoteAuthor = styled.cite`
  justify-self: start;
`;
export const WelcomeLogin = ()=>(
  <WelcomeContainer>
    <TitleLogin>Es bueno volver a verte</TitleLogin>
    <QuoteContainer>
      <Quote>
        “¿Cuál es la esencia de la vida? <br/>
        Servir a otros y hacer el bien”
      </Quote>
      <QuoteAuthor>- Aristóteles</QuoteAuthor>
    </QuoteContainer>
  </WelcomeContainer>
);