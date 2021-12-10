import styled from "styled-components";
import { useState, useEffect } from "react";
import {rankings} from "../../../../controller/CommunityPostCtr/utilities";
import  UserPhoto from "../../../Layout/UserPhoto/UserPhoto";
import axios from "../../../../utils/axios.js";

const TopHelpersCont = styled.section`
  display: flex;
  padding: 0.7rem 2rem 2.5rem 2rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    grid-area: topHelpers;
  }
`;
const Helper = styled.img`
  background: #d6d1d1;
  height: 46.36px;
  width: 47.67px;
  border-radius: 50%;
`;
export const TopHelpers = (userPhoto) =>{
  const [topHelper, setTopHelpers ] = useState([]);
  useEffect(()=>{
    const dataRequests = async() =>{
       try{
         const response = await axios.get("/comunidades/:comudidadId/users");
         const res = response.data.users;
         console.log(response)         
         setTopHelpers(rankings(res,5))
       }catch(err){
         console.error('404 Error en la petición /comunidades/:comudidadId/users');
   }}
   dataRequests();
  },[]);
  return(
    <TopHelpersCont>
      {topHelper.map(({userPhoto, userPts},index)=>
      <UserPhoto key ={index} userPhoto= {userPhoto} crown = {userPts}/>)}
    </TopHelpersCont>
  );
}
