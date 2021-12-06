import styled from "styled-components";
import {IoChatbubbleEllipsesOutline} from "react-icons/io5";
import { IconContext } from "react-icons";

const IconText = styled.p`
  color: var(--boring-color);
  font-size: var(--secondarey-font-size);
  font-family: var(--secondary-font);
  font-weight: normal;
  margin-top: 3.5px;
  margin-left: 2px;
`;
const CommentButton = styled.button`
  display: flex;
  background: none;
  border: none;
  padding: 0.3rem 1rem 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 3px;
  :hover{
    background:#d3d2ce5b;
  }
`;

export const CommentButtonPost = () =>(
  <CommentButton type = "button">  
    <IconContext.Provider value ={{className: "icon-comments"}}>
     <IoChatbubbleEllipsesOutline/>
     </IconContext.Provider>
     <IconText>Responder</IconText>
  </CommentButton>
);
