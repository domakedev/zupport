import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../store/action';

import NavButton from './ButtonNav/NavButton';
import ProfileButton from './ButtonProfile/ProfileButton';

import Logo from '../../images/Logo.png';

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 375px) {
    div > img {
      width: 100px;
    }
  }
`;

const Line = styled.hr`
  border-top: 2px solid var(--boring-color);
  opacity: 0.67;
  margin-top: 2px;
  box-shadow: 0 4px 4px 0 #b0afab;
`;

const LogoP = styled.img`
  width: 180px;
`;

function Navigation() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.obtainUser());
  }, []);

  const userAuth = useSelector((state) => state.userAuthenticated);
  const currentUser = useSelector((state) => state.currentUserOTokencito);

  return (
    <nav>
      <NavContainer>
        <Link to="/">
          <LogoP src={Logo} alt="Imagen Logo" />
        </Link>
        {userAuth ? (
          <ProfileButton currentUser={currentUser} />
        ) : (
          <NavButton titulo="login" />
        )}
        <div
          style={{
            padding: '10px',
            backgroundColor: 'red',
            marginLeft: '10px',
            color: 'white',
          }}
        >
          Iniciar sesión o registrarte se encuentra DESHABILITADO
        </div>
      </NavContainer>

      <Line />
    </nav>
  );
}

export default Navigation;
