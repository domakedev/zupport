import React from 'react';
import styled from "styled-components";


const TitleLogin = styled.h1`
  color: var(--sucess-color);
  font-family: var(--principal-font);
  font-size: 3.6rem;
  font-weight: normal;
  text-align: center;

`;

const WelcomeRegister = ()=>(

    <TitleLogin>¡Unete!</TitleLogin>

);

export default WelcomeRegister;
