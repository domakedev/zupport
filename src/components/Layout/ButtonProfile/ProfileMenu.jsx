import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IconContext } from 'react-icons';

import {
  BsQuestionCircleFill,
  BsFillGearFill,
  BsBoxArrowInRight,
  BsTranslate,
} from 'react-icons/bs';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import actions from '../../../store/action';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  .Iconos {
    color: var(--principal-color);
    width: 30px;
    height: 30px;
  }
`;

const ListItem = styled.li`
  border-bottom: 1px solid #dddddd;
  display: flex;
  align-items: center;
  cursor: pointer;

  & a,
  button {
    text-decoration: none;
    color: var(--boring-color);
    font-family: var(--secondary-font);
    font-size: 18px;
    padding: 15px 15px;
    display: block;
  }

  & button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const ProfileMenuImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 10px;
  object-fit: cover;
`;

const Icon = styled.div`
  margin: 10px 20px;
`;

function ProfileMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUserOTokencito);
  const value = useMemo(() => ({ className: 'Iconos' }));
  return (
    <List>
      <ListItem>
        <ProfileMenuImg src={currentUser.photo} alt="Imagen de Perfil" />
        <a href="/profile"> Perfil</a>
      </ListItem>
      <IconContext.Provider value={value}>
        <ListItem>
          <Icon>
            <BsQuestionCircleFill />
          </Icon>
          <a href="/help">Ayuda</a>
        </ListItem>
        <ListItem>
          <Icon>
            <BsTranslate />
          </Icon>
          <a href="/lang">Idioma</a>
        </ListItem>
        <ListItem>
          <Icon>
            <BsFillGearFill />
          </Icon>
          <a href="/config">Configuración</a>
        </ListItem>
        <ListItem>
          <Icon>
            <BsBoxArrowInRight />
          </Icon>
          <button
            type="button"
            onClick={async () => {
              await dispatch(
                actions.closeSession(currentUser.username, { isOnline: false })
              );
              navigate('/');
            }}
          >
            Cerrar Sesión
          </button>
        </ListItem>
      </IconContext.Provider>
    </List>
  );
}

export default ProfileMenu;
