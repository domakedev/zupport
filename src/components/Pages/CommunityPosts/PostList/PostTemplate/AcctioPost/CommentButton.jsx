import React, { useMemo } from 'react';
import styled from 'styled-components';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

// const IconText = styled.p`
//   color: var(--boring-color);
//   font-size: var(--secondarey-font-size);
//   font-family: var(--secondary-font);
//   font-weight: normal;
//   margin-top: 3.5px;
//   margin-left: 2px;
// `;
const CommentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0.3rem 1rem 0.5rem 1rem;
  border-radius: 3px;
  color: var(--boring-color);
  font-size: var(--secondarey-font-size);
  font-family: var(--secondary-font);
  font-weight: normal;
  margin-top: 3.5px;
  gap: 0.3rem;
  cursor: pointer;
  :hover {
    background: #d3d2ce5b;
  }
`;
function CommentButtonPost({ title, responderFn, text = 'Responder' }) {
  const value = useMemo(() => ({ className: 'icon-comments' }));
  return (
    <CommentButton
      data-test={`${title}03`}
      type="button"
      onClick={responderFn}
      name={text}
    >
      <IconContext.Provider value={value}>
        <IoChatbubbleEllipsesOutline />
      </IconContext.Provider>
      {text}
    </CommentButton>
  );
}

export default CommentButtonPost;
