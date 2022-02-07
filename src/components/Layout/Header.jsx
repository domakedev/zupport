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

function Navigation() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.obtainUser());
  }, []);

  const userAuth = useSelector((state) => state.userAuthenticated);

  return (
    <nav>
      <NavContainer>
        <Link to="/">
          <div>
            <img src={Logo} alt="Imagen Logo" />
          </div>
        </Link>
        {userAuth ? <ProfileButton /> : <NavButton titulo="login" />}
      </NavContainer>

      <Line />
    </nav>
  );
}

export default Navigation;
