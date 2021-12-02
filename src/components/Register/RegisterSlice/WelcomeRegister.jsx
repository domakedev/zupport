import styled from "styled-components";

const WelcomeContainer = styled.section`
`;
const TitleLogin = styled.h2`
  color: var(--sucess-color);
  font-family: var(--principal-font);
  font-size: 3.6rem;
  font-weight: normal;

`;
export const WelcomeRegister = ()=>(
  <WelcomeContainer>
    <TitleLogin>¡Unete!</TitleLogin>
  </WelcomeContainer>
);
