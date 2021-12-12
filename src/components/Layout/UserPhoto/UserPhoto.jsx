import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { AiTwotoneCrown } from "react-icons/ai";
import { IconContext } from "react-icons";
import defaultPhoto from "../../../images/Icon/user.png";


    //--alert-color : #D9534F; FaUserCircle
    //oro #FFC107; bronce : #CD7F32; plata: #C0C0C
const crownColor = (points) =>{
  if(points > 30000){
    return '#FFC107'
  }else if(points > 15000){
    return '#C0C0C0'
  }else{
    return '#CD7F32'
  }
}

const Container = styled('div')(
  ({userPoints}) => css`
    .icon-crow{
      color:${crownColor(userPoints)};
      height: 2rem;
      width: 2rem;
      stroke-width: 1rem;
      stroke: var(--dark-color);
      position: absolute;
      z-index: 2;
    }

  `
)
const PhotoContainer = styled('div')(
  () => css`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: var(--sucess-color);
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;
  `);
  const Photo = styled('img')(
    ()=> css`
    height: 34px;
    width: 34px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    object-fit: cover;
    object-position: center center;
  `);


const UserPhoto = ({userPhoto=defaultPhoto, userPoints=0}) => {

  return (
    <Container userPoints = {userPoints}>
      <IconContext.Provider
        userPoints = {userPoints}
        value={{className: "icon-crow"}}>
          <AiTwotoneCrown/>
      </IconContext.Provider>

      <PhotoContainer>
        <Photo src ={userPhoto}/>
      </PhotoContainer>
    </Container>
  )
}

UserPhoto.propTypes = {
  userPhoto : PropTypes.string,
  userPoints : PropTypes.number
}

export default UserPhoto
