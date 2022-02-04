// Import React
import React, { useMemo } from 'react';
// Import Styled Components
import styled from 'styled-components';
// Import icons and context
import { BsLinkedin } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    display: block;
    justify-content: center;
    text-align: center;
  }
`;

const Description = styled.p`
  line-height: 1.5;
  font-family: var(--secondary-font);
  color: var(--light-color);
  font-size: 1.8rem;
`;

const DescriptionContainer = styled.div`
  font-family: var(--secondary-font);
  color: var(--light-color);
  font-size: 1.8rem;
  width: 30%;

  @media screen and (min-width: 768px) {
    width: 100%;
    text-align: center;
    padding-top: 20px;
  }
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--light-color);
  padding: 5px 0px;
  @media screen and (min-width: 768px) {
    padding: 0px 20px;
  }
`;

const FooterStamp = styled.div`
  font-family: var(--secondary-font);
  font-size: 1.2rem;
  color: var(--light-color);
  text-align: center;
  bottom: 0;
  padding: 20px 0;
`;

const LinkedInContainer = styled.div`
  line-height: 1;
  font-family: var(--secondary-font);
  color: var(--light-color);
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: block;
    justify-content: center;
    padding-top: 20px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  bottom: 0;
  background-color: var(--dark-color);
`;

const Title = styled.span`
  font-family: var(--secondary-font);
  font-size: 2rem;
  font-weight: bold;
  color: var(--light-color);
`;

function Footer() {
  const value = useMemo(() => ({ color: 'red', size: '12px' }));
  return (
    <MainContainer>
      <DataContainer>
        <ContactContainer>
          <Title>Contactanos</Title>
          <LinkedInContainer>
            <FooterLink href="https://www.linkedin.com/in/nayruth-calla/">
              <BsLinkedin /> Nayruth
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/domakedev/">
              <BsLinkedin /> Cesar
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/danieloch/">
              <BsLinkedin /> Daniel
            </FooterLink>
          </LinkedInContainer>
        </ContactContainer>
        <DescriptionContainer>
          <Title>Zupport</Title>
          <Description>
            Descubre el poder que tienes al ayudar a otros y encuentra ayuda
            facilmente en tu comunidad.
          </Description>
        </DescriptionContainer>
      </DataContainer>
      <FooterStamp>
        Zupport © 2021{' '}
        <IconContext.Provider value={value}>
          <FaHeart />
        </IconContext.Provider>
      </FooterStamp>
    </MainContainer>
  );
}

export default Footer;
