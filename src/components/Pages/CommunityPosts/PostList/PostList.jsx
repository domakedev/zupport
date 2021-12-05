import { useState, useEffect } from "react";
import  styled from "styled-components";
import { PostTemplate } from "./PostTemplate/PostTemplate";
//import { dataPost } from "../__Mock__/DataPost";
import { getPostTime, softNumber} from "../../../../controller/CommunityPostCtr/utilities";
import {getItems} from "../../../../controller/CommunityPostCtr/getItems";
import {mock} from '../__Mock__/DataPost';

const PostListCont = styled.div`
  background: rgba(41, 171, 224, 0.08);
  @media screen and (min-width: 1024px) {
    background: none;
    grid-area: postList;
    margin:0 14rem 0 14rem;
  } 
`;

export const PostList = () => {  
  
  const [posts, setPosts] = useState([]);
      useEffect(()=>{            
         const dataRequests = async() =>{
           console.log(mock);
           try{
             const response = await getItems("/comunidades/:comudidadId/posts",'get');
             const res = response.data.posts;    
             //console.log(sortedDates(res));
             setPosts(res);
             //mock.resetHandlers();
           }catch(err){
            console.error('404 Error en la petición /comunidades/:comudidadId/posts');
           }
        }
       dataRequests();      
      },[])
      
  return(
    <PostListCont>
      {posts.map(({userPhoto, userName, timePost, postTitle, postDescription, points, resolved, likes, image}, index)=>(
        <PostTemplate key = {index} ban = {index} userPhoto = {userPhoto} userName = {userName} 
          timePost = {getPostTime(timePost)} postTitle = {postTitle} postDescription ={postDescription} 
          points ={softNumber(points)} resolved = {resolved} likes= {softNumber(likes)} urlPost= {image}/>))}    
    </PostListCont>
  )
};
