import styled, {css} from "styled-components";
import { IconContext } from "react-icons";
import {IoHeartCircle} from "react-icons/io5";
import PropTypes from 'prop-types'; 


const IconHeartContainer = styled('div')(
  ()=> css`
    display: flex;
    .icon-heart{      
      color: var(--warning-color);
      width: 2.5rem;
      height: 2.5rem;
      margin-top: 0;
    }  
  `);
const IconText = styled.p`
  color: var(--warning-color);
  font-size: 1.3rem;
  font-family: var(--secondary-font);
  font-weight: normal;
  margin-top: 3.5px;
  margin-left: 2px;
`;
export const IconHeart = ({likes}) =>(
  <IconHeartContainer>
    <IconContext.Provider value={{className: "icon-heart"}}>
      <IoHeartCircle/>    
    </IconContext.Provider>    
    <IconText>{likes}</IconText>    
  </IconHeartContainer>
);
IconHeart.propTypes = {
  likes : PropTypes.number.isRequired
};
