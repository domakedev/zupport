import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
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
} from './styleds';
import actions from '../../../store/action';
// import CardComunidadShow from '../../Layout/CardComunidadShow/CardComunidadShow';

// Iconos
import Github from '../../../images/Icon/redes/GitHub.svg';
import Linkedin from '../../../images/Icon/redes/Linkedin.svg';
import Twitter from '../../../images/Icon/redes/Twitter.svg';

const UserProfile = function UserProfile() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const usernameFromURL = location.pathname.split('/').pop();
    dispatch(actions.setVisitedUser(usernameFromURL));
  }, []);

  const user = useSelector((state) => state.visitProfileUser);
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
                <StatBox>{user.points}</StatBox>
                <StatName>
                  <p>Nivel</p>
                </StatName>
              </IndividualStat>
              <IndividualStat>
                <StatBox>{user.points}</StatBox>
                <StatName>
                  <p>Favores</p>
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
            {/* <CardComunidadShow image  users checks title/> */}
          </MyDataCard>
        </DataCards>
      </MainContainer>
      <Footer />
    </>
  );
};

export default UserProfile;
