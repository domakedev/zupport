import React, { useEffect, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { IconContext } from 'react-icons';
import { IoHeartCircle } from 'react-icons/io5';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

const IconHeartContainer = styled('div')(
  () => css`
    display: flex;
    .icon-heart {
      color: var(--warning-color);
      width: 2.5rem;
      height: 2.5rem;
      margin-top: 0;
    }
  `
);
const IconText = styled.p`
  color: var(--warning-color);
  font-size: 1.3rem;
  font-family: var(--secondary-font);
  font-weight: normal;
  margin-top: 3.5px;
  margin-left: 2px;
`;
function IconHeart({ likes }) {
  const value = useMemo(() => ({ className: 'icon-heart' }));
  const User = useSelector((state) => state.editPost);
  useEffect(() => {}, [User]);
  return (
    <IconHeartContainer>
      <IconContext.Provider value={value}>
        <IoHeartCircle />
      </IconContext.Provider>
      <IconText>{likes?.length}</IconText>
    </IconHeartContainer>
  );
}
IconHeart.propTypes = {
  // likes: PropTypes.number.isRequired,
};

export default IconHeart;
