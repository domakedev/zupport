// import { useState, useEffect } from "react";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
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
  const currentUser = useSelector((state) => state.currentUserOTokencito);
  return (
    <PostListCont>
      {results?.map(
        // aqui estaba posts
        (
          {
            user,
            timePosted,
            title,
            description,
            points,
            resolved,
            likes,
            image,
            userPoints,
            _id,
          },
          index
        ) => (
          <PostTemplate
            key={`${title}0${user.username}`}
            ban={index}
            userPhoto={user.photo === null ? '' : user.photo}
            userName={user.username}
            timePost={getPostTime(timePosted)}
            timePosted={timePosted}
            postTitle={title}
            postDescription={description}
            points={softNumber(points)}
            userPoints={userPoints}
            resolved={resolved}
            likes={likes}
            urlPost={image}
            idPost={_id}
            authVer={
              currentUser.username === user.username ||
              currentUser.role === 'admin'
            }
            isOnline={user.isOnline}
          />
        )
      )}
    </PostListCont>
  );
}

export default PostList;
