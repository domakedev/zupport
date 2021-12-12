import styled from "styled-components";
import PropTypes from "prop-types";
import { DividingLine } from "../../../../Layout/LineStyle/DividingLine";
import { IconHeart } from "./IconHeart";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";
import { PostImage } from "./PostImage";

const PostTemplteCont = styled.article`
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;  
  @media screen and (min-width: 1024px) {
    border: 1px solid #79777052;  //--dark-color
    border-radius: 2rem;
  }
`;

const PostContainer = styled.div`
  margin-top: 1rem;
  padding: 0 3rem 0 3rem;
`;
const PostTitle = styled.h3`
  color: var(--dark-color);
  font-size: 2.5rem;
  font-family: var(--secondary-font);
  font-weight: normal;  
`;
const PostDescription = styled.p`
  color: rgba(0, 0, 0, 0.55);;
  font-size: 1.7rem;
  font-family: var(--secondary-font);
  font-weight: normal;
  text-align: justify;
  margin: 1.3rem 0 1.5rem 1.3rem;
`;
const ReactionContainer = styled.div`
  margin: 0 0 0.5rem 1.3rem;
  padding: 0 3rem 0 3rem;
`;
 

export const PostTemplate = ({ ban, userPhoto, userName, timePost, postTitle, postDescription, points, userPoints, resolved, likes, urlPost}) => (
  <PostTemplteCont>
    <PostHeader userPhoto = {userPhoto} userName = {userName} timePost = {timePost} points= {points} userPoints = {userPoints} resolved ={resolved}/>
    <DividingLine/>
    <PostContainer>
      <PostTitle>{postTitle}</PostTitle>
      <PostDescription>{postDescription}</PostDescription>
    </PostContainer>
    <PostImage ban = {ban} urlPost={urlPost}/>
    <ReactionContainer>
      <IconHeart likes = {likes}/>      
    </ReactionContainer>    
    <DividingLine/>
    <PostFooter/>
  </PostTemplteCont>
);

PostTemplate.propTypes = {
  postTitle: PropTypes.string.isRequired,
  PostDescription: PropTypes.string
}
