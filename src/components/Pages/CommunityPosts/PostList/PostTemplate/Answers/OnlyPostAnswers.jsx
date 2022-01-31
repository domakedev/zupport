/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsX } from 'react-icons/bs';
import PostTemplate from '../PostTemplate';
import Answers from './Answers';
import {
  getPostTime,
  softNumber,
} from '../../../../../../controller/CommunityPostCtr/utilities';
// import action from '../../../../../../store/action';

const PostCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: rgba(41, 171, 224, 0.08); */
  @media screen and (min-width: 1024px) {
    background: none;
    grid-area: postList;
    margin: 0 14rem 0 14rem;
  }
`;
const MainTitleContainer = styled.div`
  padding: 2rem 0 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;
const MainTitle = styled.h1`
  font-family: var(--principal-font);
  color: var(--boring-color);
  text-align: center;
  padding-left: 10rem;
  font-weight: normal;
  font-size: 2.5rem;
`;
const GoBack = styled.button`
  color: var(--boring-color);
  font-size: 3rem;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.5rem 1rem 0 1rem;
  :hover {
    background: #d3d2ce5b;
  }
`;
const Line = styled.hr`
  border-top: 0.1rem solid var(--boring-color);
  opacity: 0.3;
`;
function OnlyPostAnswers() {
  const [post, setPost] = useState({});
  const currentPost = useSelector((state) => state.loadOnlyPost);
  // console.log('currentt', currentPost);
  const navigate = useNavigate();

  useEffect(() => {
    setPost(currentPost);
  }, [currentPost]);
  // console.log(!post, post);
  const handleClick = () => {
    // regresando a la página anterior
    navigate(-1);
  };
  return (
    <PostCont>
      <MainTitleContainer>
        <MainTitle>Ver Detalle</MainTitle>
        <GoBack type="button" onClick={handleClick}>
          <BsX />
        </GoBack>
      </MainTitleContainer>

      <Line />

      {Object.entries(post).length === 0 ? (
        <h1>cargando</h1>
      ) : (
        <div>
          <PostTemplate
            userPhoto={post.user.photo === null ? '' : post.user.photo}
            userName={post.user.username}
            timePost={getPostTime(post.timePosted)}
            postTitle={post.title}
            postDescription={post.description}
            points={softNumber(post.points)}
            userPoints={post.userPoints}
            resolved={post.resolved}
            likes={softNumber(post.likes)}
            urlPost={post.image}
            idPost={post._id}
          />
          <Answers idPost={post._id} postUser={post.user} />
        </div>
      )}
    </PostCont>
  );
}

export default OnlyPostAnswers;
