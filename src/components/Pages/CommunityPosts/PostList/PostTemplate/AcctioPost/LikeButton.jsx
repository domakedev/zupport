import React, { useMemo, useState } from 'react';

import styled, { css } from 'styled-components';
import { IconContext } from 'react-icons';
import { IoHeartCircle } from 'react-icons/io5';

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
      stroke-width: 3rem;
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

function LikeButtonPost() {
  const [count, setCount] = useState(0);
  const handleOnclick = () => {
    // eslint-disable-next-line
    console.log(count);
    setCount(count + 1);
  };
  const value = useMemo(() => ({ className: 'icon-heart' }));
  return (
    <IconHeartContainer onClick={handleOnclick}>
      <IconContext.Provider value={value}>
        <IoHeartCircle />
      </IconContext.Provider>
      <IconText>Te apoyo</IconText>
    </IconHeartContainer>
  );
}

export default LikeButtonPost;
