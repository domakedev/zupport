import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonContainer = styled.button`
  margin-left: auto;
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
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/${titulo}`);
  };
  return <ButtonContainer onClick={onClick}>{titulo}</ButtonContainer>;
}

NavButton.propTypes = {
  titulo: PropTypes.string,
};

NavButton.defaultProps = {
  titulo: 'Login',
};

export default NavButton;
