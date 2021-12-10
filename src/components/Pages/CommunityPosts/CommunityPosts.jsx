import styled from "styled-components";
import { WelcomeCommunity } from "./WelcomeCommity/WelcomeCommunity";
import Header from "../../Layout/Header"
import { DividingLine } from "../../Layout/LineStyle/DividingLine";
import { TopHelpers } from "./TopHelpers/TopHelpers";
import { CreatePost } from "./CreatePost/CreatePost";
import { GOFData } from "./BoxActions/BoxAction";
import { PostList } from "./PostList/PostList";
import axios from "../../../utils/axios";
import { rankings } from "../../../controller/CommunityPostCtr/utilities";

const CommunityPostCont = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 4rem 0 3rem 0;
  
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    background: rgba(41, 172, 224, 0.025);
    width :100% ;
    justify-self: center;
    grid-template-areas: "welcome  welcome welcome"
                          " .  topHelpers . "
                          ". . gofData"
                          ". . createPost"
                          ". . postList"  ;
  } 
`;
const Container = styled.div`
  display: grid;
  justify-content: center;
`;

export const CommunityPosts = () => {

  return (
    <>
      <Header/>
      <Container>
      <CommunityPostCont>
        <WelcomeCommunity title = "Javascript"/>
        <DividingLine/>
        <TopHelpers />
        <CreatePost/>
        <GOFData/>
        <PostList/>
      </CommunityPostCont>
      </Container>   
    </>
  );
}