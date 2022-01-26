import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = styled(Link)`
  margin-left: auto;
  padding-top: 9px;
  width: 170px;
  height: 48px;
  border: 2px solid var(--principal-color);
  border-radius: 3px;
  background-color: transparent;
  &:hover {
    background-color: var(--light-color);
  }

  text-align: center;
  color: var(--principal-color);
  text-transform: uppercase;
  text-decoration: none;
  font-family: var(--secondary-font);
  font-size: 18px;
  font-weight: bold;
`;

function NavButton({ titulo }) {
  return <ButtonContainer to="/login">{titulo}</ButtonContainer>;
}

export default NavButton;
