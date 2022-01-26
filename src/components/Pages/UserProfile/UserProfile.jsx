import React from 'react';
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
// import CardComunidadShow from '../../Layout/CardComunidadShow/CardComunidadShow';

const UserProfile = function UserProfile() {
  const detectaLogoRed = (red) => {
    if (red === 'github') {
      return 'https://cdn-icons-png.flaticon.com/512/25/25231.png';
    }
    if (red === 'linkedin') {
      return 'https://www.ckmperu.com/wp-content/uploads/2016/10/linkedin-logo.png';
    }
    if (red === 'twitter') {
      return 'https://i0.wp.com/openvisualfx.com/wp-content/uploads/2019/10/pnglot.com-twitter-bird-logo-png-139932.png?fit=2186%2C2187&ssl=1';
    }
    return '';
  };
  return (
    <>
      <Header />
      <MainContainer>
        <UserPhotoContainer>
          <UserPhoto photoSize="131px" medalSize="50px" borderSize="9px" />
        </UserPhotoContainer>
        <NameUser>
          <p>Cesar Guevara Cabrera</p>
        </NameUser>

        <DataCards>
          <MyDataCard>
            <p>Mis estadisticas</p>
            <IndividualStatContainer>
              <IndividualStat>
                <StatBox>45</StatBox>
                <StatName>
                  <p>Nivel</p>
                </StatName>
              </IndividualStat>
              <IndividualStat>
                <StatBox>45</StatBox>
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
              <IndividualStat>
                {/* Aqui hacer un map de las redes del usuario */}
                <StatSocial>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    without
                    rel="noreferrer"
                  >
                    <img src={detectaLogoRed('github')} alt="github" />
                  </a>
                </StatSocial>
              </IndividualStat>
              <IndividualStat>
                {/* Aqui hacer un map de las redes del usuario */}
                <StatSocial>
                  <img src={detectaLogoRed('linkedin')} alt="github" />
                </StatSocial>
              </IndividualStat>
              <IndividualStat>
                {/* Aqui hacer un map de las redes del usuario */}
                <StatSocial>
                  <img src={detectaLogoRed('twitter')} alt="github" />
                </StatSocial>
              </IndividualStat>
            </IndividualStatContainer>
          </MyDataCard>
          <MyDataCard>
            <p>Algo sobre mí</p>
            <AboutMe>
              Soy un gato, que se cree loro. Pero además como croquetas Ricocan.
              🐈
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
