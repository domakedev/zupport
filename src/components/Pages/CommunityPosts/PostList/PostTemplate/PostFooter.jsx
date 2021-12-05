import { useState, useEffect } from "react";
import styled from "styled-components";
import {LikeButtonPost} from "./AcctioPost/LikeButton";
import { CommentButtonPost } from "./AcctioPost/CommentButton";

const PostFooterContainer = styled.section`
  display:flex;
  justify-content: space-between;
  margin: 0.2rem 0 0.7rem 0;
  padding: 0 2rem 0 2rem;
  .icon-comments{
    color: var(--boring-color);
    width: 2.5rem;
    height: 2.5rem;
    margin-top:4px;
  }
`;

export const PostFooter = () =>{
  return (
    <PostFooterContainer>
      <LikeButtonPost/>
      <CommentButtonPost/>
  </PostFooterContainer>
  );
}
