import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { AiTwotonePropertySafety } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import UserPhoto from '../../Layout/UserPhoto/UserPhoto';
import {
  MainContainer,
  UserPhotoContainer,
  NameUser,
  DataCards,
  MyDataCard,
  StatName,
  StatBox,
  IndividualStat,
  IndividualStatContainer,
  StatSocial,
  AboutMe,
  ContainerCrown,
} from './styleds';
import actions from '../../../store/action';
import CardComunidadShow from '../../Layout/CardComunidadShow/CardComunidadShow';

// Iconos
import Github from '../../../images/Icon/redes/GitHub.svg';
import Linkedin from '../../../images/Icon/redes/Linkedin.svg';
import Twitter from '../../../images/Icon/redes/Twitter.svg';

const UserProfile = function UserProfile() {
  const dispatch = useDispatch();
  const location = useLocation();

  const user = useSelector((state) => state.visitProfileUser);
  console.log(
    '🚀 ~ file: UserProfile.jsx ~ line 43 ~ UserProfile ~ user',
    user
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const usernameFromURL = location.pathname.split('/').pop();
    dispatch(actions.setVisitedUser(usernameFromURL));
  }, []);

  const detectaLogoRed = (red) => {
    if (red === 'Github') {
      return Github;
    }
    if (red === 'Linkedin') {
      return Linkedin;
    }
    if (red === 'Twitter') {
      return Twitter;
    }
    return '';
  };

  const crownColor = (points) => {
    if (points > 100) {
      return '#FFC107';
    }
    if (points > 50) {
      return '#C0C0C0';
    }
    return '#CD7F32';
  };

  const definirNivel = (points) => {
    if (points > 100) {
      return 'Oro';
    }
    if (points > 50) {
      return 'Plata';
    }
    return 'Bronce';
  };

  const value = useMemo(() => ({ className: 'icon-crow' }));
  return (
    <>
      <Header />
      <MainContainer>
        <UserPhotoContainer>
          <UserPhoto
            user={user}
            userPhoto={user.photo}
            photoSize="131px"
            medalSize="50px"
            borderSize="9px"
          />
        </UserPhotoContainer>

        <NameUser>
          <p>{user.fullname}</p>
        </NameUser>

        <DataCards>
          <MyDataCard>
            <p>Mis estadisticas</p>
            <IndividualStatContainer>
              <IndividualStat>
                {/* <StatBox>{user.levelPoints}</StatBox> */}
                <StatBox>
                  <ContainerCrown>
                    <IconContext.Provider
                      userPoints={user?.levelPoints}
                      value={value}
                    >
                      <AiTwotonePropertySafety
                        color={crownColor(user?.levelPoints)}
                      />
                    </IconContext.Provider>
                  </ContainerCrown>
                </StatBox>
                <StatName>
                  <p>{definirNivel(user?.levelPoints)}</p>
                </StatName>
              </IndividualStat>
              <IndividualStat>
                <StatBox>{user.points}</StatBox>
                <StatName>
                  <p>Puntos</p>
                </StatName>
              </IndividualStat>
            </IndividualStatContainer>
          </MyDataCard>
          {/*  */}
          <MyDataCard>
            <p>Mis redes</p>
            <IndividualStatContainer>
              {/* Aqui hacer un map de las redes del usuario, sn: social network */}
              {user.socialNetworks?.map((sn) => (
                <IndividualStat key={uuidv4()}>
                  <StatSocial>
                    <a href={sn.link} target="_blank" rel="noreferrer">
                      <img src={detectaLogoRed(sn.name)} alt={sn.name} />
                    </a>
                  </StatSocial>
                </IndividualStat>
              ))}
            </IndividualStatContainer>
          </MyDataCard>
          <MyDataCard>
            <p>Algo sobre mí</p>
            <AboutMe>
              {user?.about || 'Mis puntos espero puedan decir algo de mi 😄'}
            </AboutMe>
          </MyDataCard>
          <MyDataCard>
            <p>Mis comunidades</p>
            {/* Map de array de comunidades del user */}
            {user?.myCommunities?.map((comu) => (
              <CardComunidadShow
                key={uuidv4()}
                image={comu.image}
                users={comu.users.length}
                // checks, esto lo tiene Nayruth
                title={comu.title}
              />
            ))}
            {/* <CardComunidadShow image  users checks title/> */}
          </MyDataCard>
        </DataCards>
      </MainContainer>
      <Footer />
    </>
  );
};

export default UserProfile;
