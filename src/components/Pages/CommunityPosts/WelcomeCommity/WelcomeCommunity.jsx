import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GoBackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min-content;
  color: var(--boring-color);
  font-size: 1.5rem;
  font-family: var(--secondary-font);
  cursor: pointer;
  font-weight: 700;
`;

const WelcomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  @media screen and (min-width: 1024px) {
    grid-area: welcome;
    justify-self: center;
    min-width: 62.5rem;
    h2 {
      font-size: 3.5rem;
    }
  }
`;
const WelcomeCommnityTitle = styled.h2`
  display: flex;
  flex-direction: column;

  color: var(--warning-color);
  font-size: var(--secondarey-font-size);
  font-family: var(--principal-font);
  font-weight: normal;
  p {
    color: var(--dark-color);
    font-size: 1.4rem;
    font-family: var(--secondary-font);
  }
  @media screen and (min-width: 768px) {
    font-size: 2rem;
    p {
      font-size: 1.8rem;
    }
  }
`;

function WelcomeCommunity({ title }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/communities');
  };
  return (
    <WelcomeContainer>
      <WelcomeCommnityTitle>
        Bienvenid@ a la comunidad {title}
        <p>Conoce l@s 5 top helpers de tu comunidad</p>
      </WelcomeCommnityTitle>
      <GoBackContainer onClick={goBack}>
        <BiArrowBack /> Volver
      </GoBackContainer>
    </WelcomeContainer>
  );
}

export default WelcomeCommunity;
