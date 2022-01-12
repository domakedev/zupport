import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  justify-items: flex-end;
  align-self: end;

  @media screen and (min-width: 768px) {
    order: 0;
  }
`;

const Title = styled.h1`
  margin-left: 27px;
  margin-right: 27px;

  font-size: 3.6rem;

  font-family: var(--principal-font);

  @media screen and (min-width: 768px) {
  }
`;

const Description = styled.p`
  margin-left: 27px;
  margin-right: 27px;
  margin-top: 10px;

  font-size: 1.8rem;

  font-family: var(--secondary-font);
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;

  display: block;
  border: none;

  padding: 13px 22px;
  margin: 35px auto;

  background-color: var(--principal-color);
  border-radius: 3px;

  font-weight: bold;
  font-size: 1.8rem;

  font-family: var(--secondary-font);
  width: fit-content;
`;

function TextAndButton() {
  return (
    <Container>
      <Title>
        Disfruta ayudando a los demas. <br />
        Pide y recibe ayuda.
      </Title>

      <Description>
        Unete a una comunidad y solicita ayuda directamente a personas
        dispuestas a ayudarte al instante.
      </Description>

      <LinkTo to="/register">REGISTRARME</LinkTo>
    </Container>
  );
}

export default TextAndButton;
