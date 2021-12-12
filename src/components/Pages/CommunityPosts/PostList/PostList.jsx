import { useState, useEffect } from "react";
import styled from "styled-components";
import { PostTemplate } from "./PostTemplate/PostTemplate";
import axios from "../../../../utils/axios.js";


//import { dataPost } from "../__Mock__/DataPost";
import {
  getPostTime,
  softNumber,
} from "../../../../controller/CommunityPostCtr/utilities";
//import { getItems } from "../../../../controller/CommunityPostCtr/getItems";

const PostListCont = styled.div`
  background: rgba(41, 171, 224, 0.08);
  @media screen and (min-width: 1024px) {
    background: none;
    grid-area: postList;
    margin: 0 14rem 0 14rem;
  }
`;

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const dataRequests = async () => {
      try {
        const response = await axios.get("/comunidades/:comudidadId/posts");
        const res = response.data.posts;
        //console.log(sortedDates(res));
        setPosts(res);
        //mock.resetHandlers();
      } catch (err) {
        console.error(
          "404 Error en la petición /comunidades/:comudidadId/posts"
        );
      }
    };
    dataRequests();
  }, []);

  return (
    <PostListCont>
      {posts.map(
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
            userPoints
          },
          index
        ) => (
          <PostTemplate
            key={index}
            ban={index}
            userPhoto={userPhoto}
            userName={userName}
            timePost={getPostTime(timePost)}
            postTitle={postTitle}
            postDescription={postDescription}
            points={softNumber(points)}
            userPoints = {userPoints}
            resolved={resolved}
            likes={softNumber(likes)}
            urlPost={image}
          />
        )
      )}
    </PostListCont>
  );
};
