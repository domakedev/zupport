// import { useState, useEffect } from "react";
import styled from 'styled-components';
import PostTemplate from './PostTemplate/PostTemplate';
// import axios from "../../../../utils/axios.js"

// import { dataPost } from "../__Mock__/DataPost";
import {
  getPostTime,
  softNumber,
} from '../../../../controller/CommunityPostCtr/utilities';
// import { getItems } from "../../../../controller/CommunityPostCtr/getItems";

const PostListCont = styled.div`
  background: rgba(41, 171, 224, 0.08);
  @media screen and (min-width: 1024px) {
    background: none;
    grid-area: postList;
    margin: 0 14rem 0 14rem;
  }
`;

function PostList({ results }) {
  return (
    <PostListCont>
      {results?.map(
        // aqui estaba posts
        (
          {
            userPhoto,
            userName,
            timePost,
            postTitle,
            postDescription,
            points,
            resolved,
            likes,
            image,
            userPoints,
          },
          index
        ) => (
          <PostTemplate
            key={new Date()}
            ban={index}
            userPhoto={userPhoto}
            userName={userName}
            timePost={getPostTime(timePost)}
            postTitle={postTitle}
            postDescription={postDescription}
            points={softNumber(points)}
            userPoints={userPoints}
            resolved={resolved}
            likes={softNumber(likes)}
            urlPost={image}
          />
        )
      )}
    </PostListCont>
  );
}

export default PostList;
