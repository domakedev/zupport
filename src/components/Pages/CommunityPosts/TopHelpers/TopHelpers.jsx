import styled from 'styled-components';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
// import {rankings} from "../../../../controller/CommunityPostCtr/utilities";
import UserPhoto from '../../../Layout/UserPhoto/UserPhoto';
// import axios from "../../../../utils/axios.js";
import actions from '../../../../store/action';

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
  const dispatch = useDispatch();
  const usersDePrueba = useSelector((state) => state.topLandingUSers);

  useEffect(() => {
    dispatch(actions.getTopUsersLanding());
  }, []);
  return (
    <TopHelpersCont>
      {usersDePrueba?.map(
        (
          user // Aquii debe ir un array de usuarios, los 10 primeros en puntos
        ) => (
          <UserPhoto
            user={user}
            key={uuidv4()}
            userPhoto={user.photo}
            userPoints={user.points}
          />
        )
      )}
    </TopHelpersCont>
  );
}

export default TopHelpers;
