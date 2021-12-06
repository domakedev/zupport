import styled from "styled-components";

const WelcomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 0 2rem;
  p{
    color: var(--dark-color);
    font-size: 1.4rem;
    font-family: var(--secondary-font);
  }
  @media screen and (min-width: 1024px) {
    grid-area: welcome;
    min-width: 40rem;
    h2{
      font-size: 3.5rem;
    }
    p{
      font-size: 1.8rem;
    }
  } 
`;
const WelcomeCommnityTitle = styled.h2`  
  color: var(--warning-color);
  font-size: var(--secondarey-font-size);
  font-family: var(--principal-font);
  font-weight: normal;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  } 
 
`;

export const WelcomeCommunity = ({title}) =>(
  <WelcomeContainer>
  <WelcomeCommnityTitle>Bienvenid@ a tu comunidad {title} </WelcomeCommnityTitle>
    <p>Conoce a l@s 5 top helpers de tu comunidad</p>  
  </WelcomeContainer>
);
