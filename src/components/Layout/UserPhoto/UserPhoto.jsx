import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { AiTwotonePropertySafety, AiFillMinusCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import defaultPhoto from '../../../images/Icon/user.png';

// --alert-color : #D9534F; FaUserCircle
// oro #FFC107; bronce : #CD7F32; plata: #C0C0C
const crownColor = (points) => {
  if (points > 30000) {
    return '#FFC107';
  }
  if (points > 15000) {
    return '#C0C0C0';
  }
  return '#CD7F32';
};

const Container = styled('div')(
  ({ userPoints }) => css`
    position: relative;
    cursor: pointer;
    border-radius: 50%;
    .icon-crow {
      color: ${crownColor(userPoints)};
      height: 1.7rem;
      width: 1.7rem;
      left: -3px;
      top: -2px;
      bottom: 28px;
      stroke-width: 1rem;
      stroke: var(--dark-color);
      position: absolute;
      z-index: 2;
    }
  `
);
const PhotoContainer = styled('div')(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e2e2e2;
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;
    font-size: 1rem;
    color: var(--secondary-color);
  `
);

const Photo = styled('img')(
  () => css`
    height: 40px;
    width: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;
    /* border: 3px solid var(--sucess-color); //el color cambiara a --alert-color si está activo */
    ${(props) =>
      props.isOnline === true &&
      css`
        outline: 4px solid var(--sucess-color) !important;
      `}
    ${(props) =>
      props.isOnline === false &&
      css`
        outline: 2px solid var(--boring-color) !important;
      `}
  `
);

const DeleteUser = styled.div`
  color: var(--alert-color);
  height: 2rem;
  width: 2rem;
  stroke-width: 1rem;
  stroke: var(--dark-color);
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 70%;
  background-color: white;
  border-radius: 50%; ;
`;

function UserPhoto({
  userPhoto,
  userPoints,
  selectUser,
  user,
  selected = false,
  deleteUserSelected,
  isOnline = false,
}) {
  const value = useMemo(() => ({ className: 'icon-crow' }));
  return (
    <Container userPoints={userPoints} onClick={() => selectUser(user)}>
      <IconContext.Provider userPoints={userPoints} value={value}>
        <AiTwotonePropertySafety />
      </IconContext.Provider>

      <PhotoContainer>
        <Photo
          isOnline={isOnline}
          src={!userPhoto ? defaultPhoto : userPhoto}
          alt={!user?.fullname ? 'userPhoto' : user?.fullname}
        />
      </PhotoContainer>

      {selected ? (
        <DeleteUser onClick={() => deleteUserSelected(user)}>
          <AiFillMinusCircle />
        </DeleteUser>
      ) : null}
    </Container>
  );
}

UserPhoto.propTypes = {
  userPhoto: PropTypes.string,
};

UserPhoto.defaultProps = {
  userPhoto: defaultPhoto,
};

export default UserPhoto;
