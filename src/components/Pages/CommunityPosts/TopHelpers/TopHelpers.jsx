import styled from "styled-components";
import { useState, useEffect } from "react";
// import {mock2} from "../../../../utils/__Mock__/DataUsersCommunity";
//import { getItems } from "../../../../controller/CommunityPostCtr/getItems";
//import {rankings} from "../../../../controller/CommunityPostCtr/utilities"
//import axios from "utils/axios"

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
export const TopHelpers = () =>{
  const [topHelper,
    // setTopHelpers
  ] = useState([]);
  //console.log(mock2);

  useEffect(()=>{
    const dataRequests = async() =>{
      // try{
      //   const response = await getItems("/comunidades/:comudidadId/users",'get');
      //   const res = response.data.users;
      //   console.log(response)
      //   //mock2.resetHandlers();
      //   setTopHelpers(rankings(res,5))
      //  //mock.restore();
      // }catch(err){
      //   console.error('404 Error en la petición /comunidades/:comudidadId/users');
      // }
   }
   dataRequests();
   //setTopHelpers(rankings(communityIdUsers,5))
  },[])
  return(
    <TopHelpersCont>
      {topHelper.map(({userPhoto},index)=>
      <Helper key ={index} src={userPhoto}/>)}
    </TopHelpersCont>
  );
}
