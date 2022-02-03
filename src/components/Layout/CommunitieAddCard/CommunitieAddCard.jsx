/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link, useNavigate } from 'react-router-dom';
// import { useParams } from "react-router-dom";

// General Styled
// import { SubTitle, TitleOrange } from "../../../css/generalStyled";

// Icons
import {
  BsPeopleFill,
  BsFillBookmarkCheckFill,
  BsFillPersonPlusFill as AddPerson,
  BsCheckLg,
} from 'react-icons/bs';
import { AiOutlineEllipsis } from 'react-icons/ai';
import action from '../../../store/action';
import alert from '../../../images/alert.gif';

const FirstCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const SecondCont = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 200px;
  width: 320px;
  margin: ${({ isAdmin, buttonText }) =>
    isAdmin === 'admin' || (isAdmin === 'user' && buttonText !== 'UNIRME')
      ? '0 20px 20px 20px'
      : '20px'};

  position: relative;

  border: none;
  border-radius: 3px;
  background-color: var(--light-blue);

  font-family: var(--secondary-font);
`;

const Imagen = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  border-radius: 50%;

  background-color: aquamarine;

  object-fit: cover;
  object-position: center center;
`;

const Name = styled.h3`
  font-size: 2rem;
  font-family: var(--secondary-font);
  font-weight: normal;
  color: var(--dark-color);
`;

const ContainerUsers = styled.div`
  position: absolute;

  padding: 10px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: none;

  top: 0px;

  border-bottom-right-radius: 3px;

  border-top: none;
  border-left: none;

  svg {
    margin-right: 5px;
  }
`;

const ContainerChecks = styled.div`
  position: absolute;

  padding: 10px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  top: 0px;
  right: 0;

  border-bottom-left-radius: 3px;

  border-top: none;
  border-right: none;

  svg {
    margin-right: 5px;
  }
`;

const Number = styled.span`
  font-size: 1.4rem;

  color: var(--boring-color);

  font-weight: bold;
  letter-spacing: 2px;
`;

const DataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 30px;
`;

const LinkTo = styled(Link)`
  position: absolute;
  bottom: 5px;
  width: 200px;
  height: 50px;
  left: 60px;
  padding: 10px;

  border: none;
  background-color: var(--principal-color);

  color: var(--light-color);

  font-size: 1.8rem;
  font-weight: normal;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  border-radius: 3px;
  text-decoration: none;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  cursor: pointer;
`;

const Linea = styled.hr`
  width: 18%;
  position: absolute;
  color: var(--principal-color);
`;

const LineaI = styled(Linea)`
  bottom: 30px;
`;
const LineaD = styled(Linea)`
  bottom: 30px;
  right: 0;
`;
const ActionButtonCont = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-right: 20px;
  margin-bottom: 7px;
`;
const ActionButton = styled.button`
  border: none;
  background: none;
  color: rgba(0, 0, 0, 0.55);
  font-size: 1.3rem;
  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background: #d3d2ce5b;
  }
`;
const MoreButton = styled.button`
  border: none;
  background: none;
  font-size: 2.5rem;
  color: var(--boring-color);
  padding-top: 6px;
  margin-left: 20px;
  margin-bottom: 5px;
  &:hover {
    background: #d3d2ce5b;
    border-radius: 3px;
  }
`;
function CommunitieAddCard({
  id,
  image,
  users,
  checks = [],
  title,
  description,
  buttonText,
  creator,
}) {
  const [showButton, setShowButton] = useState(true);
  // const [buttonTextCard, setButtonTextCard] = useState('Editar');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUserOTokencito);
  // const postResolved = checks.filter((e) => e.resolved);
  // console.log(currentUser);

  const unirmeA = () => {
    // eslint-disable-next-line
    const userExists = users.find((e) => e === currentUser.username);
    if (!userExists) {
      users.push(currentUser.username);
      dispatch(action.editCommunities(id, { users }));
    }
  };
  const postResolved = checks.filter((e) => e.resolved);
  // console.log(checks);
  const handleClickMore = () => {
    setShowButton(!showButton);
  };

  const handleEdit = async () => {
    // lo primero que haria seria setear un estado en el redux
    await dispatch(
      action.loadEditedCommunity({
        id,
        title,
        image,
        description,
      })
    );
    // Llevarme con navigate a la pagina de edicion
    navigate('edit-community');
    // En la pagina de edicion del State debo leer todas las propiedades que necesito
  };
  const handleDelete = () => {
    Swal.fire({
      title: 'Salir de Comunidad',
      text: 'Podras volver a unirte cuando quieras :)',
      imageUrl: `${alert}`,
      showCancelButton: true,
      confirmButtonColor: '#29ABE0',
      cancelButtonColor: '#D9534F',
      confirmButtonText: 'Sí, Salir',
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Salir!', 'Ya no pertences a esta comunidad', 'success');
        // Asignar puntos del post a la answer
        const userDelete = users.filter((e) => e !== currentUser.username);
        dispatch(
          action.editCommunities(id, {
            users: userDelete,
          })
        );
        // setStateResolved()
      }
    });
  };
  const allDeleteHandle = () => {
    if (currentUser.role === 'admin') {
      // alerta para verifivar si el uario quiere validar respuesta
      Swal.fire({
        title: 'Eliminar comunidad',
        text: 'Recuerda que se eliminaran todos las publicaciones y respuestas',
        imageUrl: `${alert}`,
        showCancelButton: true,
        confirmButtonColor: '#29ABE0',
        cancelButtonColor: '#D9534F',
        confirmButtonText: 'Sí, Eliminar',
        imageWidth: 300,
        imageHeight: 250,
        imageAlt: 'Custom image',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Se eliminó!', '', 'success');
          // Asignar puntos del post a la answer
          dispatch(action.deletedCommunities(id));
          // setStateResolved()
        }
      });
    }
  };
  return (
    <FirstCont>
      {currentUser.role === 'admin' ||
      (currentUser.role === 'user' && buttonText !== 'UNIRME') ? (
        <SecondCont>
          {currentUser.username ? (
            <MoreButton
              type="button"
              onClick={handleClickMore}
              aria-label="moreAnswer"
            >
              <AiOutlineEllipsis />
            </MoreButton>
          ) : null}
          {showButton ? null : (
            <ActionButtonCont>
              {creator === currentUser.username ||
              currentUser.role === 'admin' ? (
                <ActionButton type="input" onClick={handleEdit} name="Editar">
                  Editar
                </ActionButton>
              ) : null}
              {currentUser.role === 'admin' ? (
                <ActionButton type="button" onClick={allDeleteHandle}>
                  Eliminar
                </ActionButton>
              ) : (
                <ActionButton type="button" onClick={handleDelete}>
                  Salir de Comunidad
                </ActionButton>
              )}
            </ActionButtonCont>
          )}
        </SecondCont>
      ) : null}
      <Container isAdmin={currentUser.role} buttonText={buttonText}>
        <DataContainer>
          <Imagen src={image} alt="" />
          <Name>{title}</Name>
        </DataContainer>

        <ContainerUsers>
          <BsPeopleFill color="#797770" size="30px" />
          <Number>{users.length}</Number>
        </ContainerUsers>

        <ContainerChecks>
          <BsFillBookmarkCheckFill color="#797770" size="30px" />
          <Number>
            {checks.length > 0
              ? postResolved.length > 0
                ? `${Math.round((postResolved.length / checks.length) * 100)}%`
                : ''
              : ''}
          </Number>
        </ContainerChecks>

        <LinkTo to={`${title}/posts`} onClick={unirmeA}>
          {buttonText === 'UNIRME' ? (
            <AddPerson size="40px" />
          ) : (
            <BsCheckLg size="25px" />
          )}
          {buttonText}
        </LinkTo>

        <LineaI />
        <LineaD />
      </Container>
    </FirstCont>
  );
}

CommunitieAddCard.propTypes = {
  title: PropTypes.string,
  // users: PropTypes.number,
  image: PropTypes.string,
};

CommunitieAddCard.defaultProps = {
  title: '',
  // users: 0,
  image: '',
};

export default CommunitieAddCard;
