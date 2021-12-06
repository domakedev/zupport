import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";


const PostContainer = styled.div`
  border: 1px solid #79777052;
  border-radius: 20px;
  padding: 1.5rem 1rem 1.5rem 1rem;
  text-align: center;
  margin: 0 2rem 0 2rem;
  h2{
    color: var(--warning-color);
    font-family: var(--principal-font);
    font-size: 3.6rem;
    font-weight: normal;
  }
  @media screen and (min-width: 768px) {
    margin: 0 8rem 0 8rem;
  }
  @media screen and (min-width: 1024px) {
    background: #fff;
    grid-area: createPost;
    margin: 4rem 14rem 3rem 14rem;
  }
`;
const LinkTo = styled(Link)`
  padding: 1rem;
  display: inline-block;
  border:none;
  border-radius: 1rem;
  background:var(--principal-color); //rgba(41, 172, 224, 0.618);
  color: var(--light-color);
  font-family: var(--principal-font);
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: normal;
  cursor: pointer;
  margin: 10px 0 10px 0;
  list-style: none;
  text-decoration: none;
  margin-top: 10px;

  @media screen and (min-width: 1024px) {
    min-width: 30%;
  }
  `;

export const CreatePost = () =>(
  <PostContainer>
    <h2>¿En que deseas ayuda?</h2>
    <LinkTo to="/communities/help-post">Preguntar</LinkTo>
  </PostContainer>
);
