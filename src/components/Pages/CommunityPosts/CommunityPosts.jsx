import { useState, useEffect } from 'react'
import styled from "styled-components";
import { WelcomeCommunity } from "./WelcomeCommity/WelcomeCommunity";
import Header from "../../Layout/Header";
import { DividingLine } from "../../Layout/LineStyle/DividingLine";
import { TopHelpers } from "./TopHelpers/TopHelpers";
import { CreatePost } from "./CreatePost/CreatePost";
import { GOFData } from "./BoxActions/BoxAction";
import { PostList } from "./PostList/PostList";

//Data Mock
import axios from "../../../utils/axios"

const CommunityPostCont = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 4rem 0 3rem 0;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    background: rgba(41, 172, 224, 0.025);
    width: 100%;
    justify-self: center;
    grid-template-areas:
      "welcome  welcome welcome"
      " .  topHelpers . "
      ". . gofData"
      ". . createPost"
      ". . postList";
  }
`;
const Container = styled.div`
  display: grid;
  justify-content: center;
`;

export const CommunityPosts = () => {


  const [comuPosts, setComuPosts] = useState([])

  const [results, setResults] = useState([]);

  useEffect(()=>{

    const postsRequest = async () => {
      try {
        const response = await axios.get("/comunidades/:comudidadId/posts");
        const res = response.data.posts;
        setComuPosts(res);
        setResults(res)
      } catch (err) {
        console.error(
          "404 Error en la petición /comunidades/:comudidadId/posts"
        );
      }
    };

    postsRequest();

  },[])

  return (
    <>
      <Header />
      <Container>
        <CommunityPostCont>
          <WelcomeCommunity title="Javascript" />
          <DividingLine />
          <TopHelpers />
          <CreatePost />
          <GOFData
            comuPosts={comuPosts}
            setResults={setResults}
            results={results}
          />
          <PostList
            results={results}
          />
        </CommunityPostCont>
      </Container>
    </>
  );
};