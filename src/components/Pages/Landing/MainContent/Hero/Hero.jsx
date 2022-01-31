import React from 'react';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Actions de Redux
// import actions from '../../../../../store/action';

// Images
// import IconoPerfil from '../../../../../images/perfil.svg';
import Capitan from '../../../../../images/DefaultImage.png';
import MainHeroIMG from '../../../../../images/fondo-hero.svg';

const Container = styled.div`
  max-width: 483px;
  width: 100%;
  height: 453px;
  background-image: url(${MainHeroIMG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;

  @media screen and (min-width: 768px) {
    order: 1;
  }
`;

const Description = styled.p`
  position: absolute;
  bottom: 120px;
  right: 10%;

  font-size: 1.8rem;
  width: 100px;
  text-align: right;

  font-family: var(--secondary-font);
`;

// Como cargar ruta dinamicamente aqui fuera del componente principal?

const HeroCard1 = styled.div`
  display: inline-block;
  cursor: pointer;

  position: absolute;

  height: 133px;
  width: 137px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  background-image: url(${(props) => props.image});

  border-radius: 43px 3px 3px 3px;
  top: 53px;
  left: 15px;
`;

const HeroCard2 = styled.div`
  display: inline-block;
  cursor: pointer;

  position: absolute;

  height: 133px;
  width: 137px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  background-image: url(${(props) => props.image});

  border-radius: 3px 43px 3px 3px;
  right: 15px;
  top: 79px;
`;

const HeroCard3 = styled.div`
  display: inline-block;
  cursor: pointer;

  position: absolute;

  height: 133px;
  width: 137px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  background-image: url(${(props) => props.image});

  border-radius: 3px 3px 3px 43px;
  top: 240px;
  left: 14%;
`;

// const HeroCardIcon = styled.img`
//   position: absolute;
//   bottom: 10px;
//   right: 10px;

//   background-color: white;
//   padding: 5px;

//   border-radius: 50%;
//   border: 1px solid black;
// `;

function Hero({ topUsers = [] }) {
  const navigate = useNavigate();

  // const dispatch = useDispatch();

  const visitUser = (user) => {
    if (user) {
      // dispatch(actions.setVisitedUser(user.username));
      navigate(`/profile/${user.username}`);
    }
  };

  return (
    <Container>
      <Description>Top Helpers en sus comunidades</Description>

      <HeroCard1
        image={topUsers[0]?.photo || Capitan}
        onClick={() => visitUser(topUsers[0] ? topUsers[0] : null)}
      >
        {/* <HeroCardIcon src={IconoPerfil} alt="icono de perfil" /> */}
      </HeroCard1>

      <HeroCard2
        image={topUsers[1]?.photo || Capitan}
        onClick={() => visitUser(topUsers[1] ? topUsers[1] : null)}
      >
        {/* <HeroCardIcon src={IconoPerfil} alt="icono de perfil" /> */}
      </HeroCard2>

      <HeroCard3
        image={topUsers[2]?.photo || Capitan}
        onClick={() => visitUser(topUsers[2] ? topUsers[2] : null)}
      >
        {/* <HeroCardIcon src={IconoPerfil} alt="icono de perfil" /> */}
      </HeroCard3>
    </Container>
  );
}

export default Hero;
