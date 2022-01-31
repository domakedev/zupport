import React, { useEffect, useMemo, useState } from 'react';

import styled, { css } from 'styled-components';
import { IconContext } from 'react-icons';
import { IoHeartCircle, IoHeartDislikeCircle } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../../../../store/action';

const IconHeartContainer = styled('button')(
  () => css`
    display: flex;
    background: none;
    border: none;
    padding: 0.3rem 1rem 0.5rem 1rem;
    margin-top: 0.5rem;
    border-radius: 3px;
    :hover {
      background: #d3d2ce5b;
    }
    .icon-heart {
      color: #fff;
      width: 2.5rem;
      height: 2.5rem;
      margin-top: 4px;
      stroke-width: 2rem;
      stroke: var(--boring-color);
    }
  `
);
const IconText = styled.p`
  color: var(--boring-color);
  font-size: var(--secondarey-font-size);
  font-family: var(--secondary-font);
  font-weight: normal;
  margin-top: 3.5px;
  margin-left: 2px;
`;

function LikeButtonPost({ idPost, likes }) {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserOTokencito);

  const [liked, setLiked] = useState(likes?.includes(User.username));

  useEffect(() => {}, [liked]);

  const handleOnclick = async () => {
    if (!likes.includes(User.username)) {
      likes.push(User.username);
      await dispatch(actions.likedPost(idPost, { likes }));
      setLiked(true);
    }
  };

  const handleOnClick2 = async () => {
    if (likes.includes(User.username)) {
      const i = likes.indexOf(User.username);
      likes.splice(i, 1);
      await dispatch(actions.likedPost(idPost, { likes }));
      setLiked(false);
    }
  };
  const value = useMemo(() => ({ className: 'icon-heart' }));
  return (
    <IconContext.Provider value={value}>
      {liked ? (
        <IconHeartContainer onClick={handleOnClick2}>
          <IoHeartDislikeCircle />
          <IconText>Apoyado</IconText>
        </IconHeartContainer>
      ) : (
        <IconHeartContainer onClick={handleOnclick}>
          <IoHeartCircle />
          <IconText>Te Apoyo</IconText>
        </IconHeartContainer>
      )}
    </IconContext.Provider>
  );
}

export default LikeButtonPost;
