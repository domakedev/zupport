import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { AiTwotoneCrown, AiFillMinusCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import defaultPhoto from "../../../images/Icon/user.png";

//--alert-color : #D9534F; FaUserCircle
//oro #FFC107; bronce : #CD7F32; plata: #C0C0C
const crownColor = (points) => {
  if (points > 30000) {
    return "#FFC107";
  } else if (points > 15000) {
    return "#C0C0C0";
  } else {
    return "#CD7F32";
  }
};

const Container = styled("div")(
  ({ userPoints }) => css`
    position: relative;
    cursor: pointer;
    .icon-crow {
      color: ${crownColor(userPoints)};
      height: 2rem;
      width: 2rem;
      stroke-width: 1rem;
      stroke: var(--dark-color);
      position: absolute;
      z-index: 2;
    }
  `
);
const PhotoContainer = styled("div")(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: var(--sucess-color);
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;
    font-size: 1rem;
    color: var(--secondary-color);
  `
);

const Photo = styled("img")(
  () => css`
    height: 34px;
    width: 34px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;
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

const UserPhoto = ({
  userPhoto = defaultPhoto,
  userPoints,
  selectUser,
  user,
  alt,
  selected = false,
  deleteUserSelected
}) => {
  return (
    <Container userPoints={userPoints} onClick={() => selectUser(user)}>
      <IconContext.Provider
        userPoints={userPoints}
        value={{ className: "icon-crow" }}
      >
        <AiTwotoneCrown />
      </IconContext.Provider>

      <PhotoContainer>
        <Photo src={userPhoto} alt={user?.fullname} />
      </PhotoContainer>

      {selected ?
        <DeleteUser onClick={() => deleteUserSelected(user)}>
          <AiFillMinusCircle />
        </DeleteUser>
       : null}
    </Container>
  );
};

UserPhoto.propTypes = {
  userPhoto: PropTypes.string,
};

export default UserPhoto;
