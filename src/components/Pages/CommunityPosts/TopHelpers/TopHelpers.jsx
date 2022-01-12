import styled from 'styled-components';
import { useState, useEffect } from 'react';
// import {rankings} from "../../../../controller/CommunityPostCtr/utilities";
import UserPhoto from '../../../Layout/UserPhoto/UserPhoto';
// import axios from "../../../../utils/axios.js";

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
function TopHelpers() {
  const [topHelper] = useState([]);
  useEffect(() => {
    // const dataRequests = async() =>{
    //      try{
    //        const response = await axios.get("/comunidades/:comudidadId/users");
    //        const res = response.data.users;
    //        console.log(response)
    //        setTopHelpers(rankings(res,5))
    //      }catch(err){
    //        console.error('404 Error en la petición /comunidades/:comudidadId/users');
    //  }}
    // dataRequests();
  }, []);
  return (
    <TopHelpersCont>
      {topHelper.map(({ userPhoto, userPts }) => (
        <UserPhoto
          key={new Date()}
          userPhoto={userPhoto}
          userPoints={userPts}
        />
      ))}
    </TopHelpersCont>
  );
}

export default TopHelpers;
