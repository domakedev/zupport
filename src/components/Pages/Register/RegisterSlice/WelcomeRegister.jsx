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
export const WelcomeRegister = ()=>(
  <WelcomeContainer>
    <TitleLogin>Bienvenid@</TitleLogin>
  </WelcomeContainer>
);