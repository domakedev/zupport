import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
// import {rankings} from "../../../../controller/CommunityPostCtr/utilities";
import { useNavigate } from 'react-router-dom';
import UserPhoto from '../../../Layout/UserPhoto/UserPhoto';

const TopHelpersCont = styled.section`
  display: flex;
  padding: 2rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    grid-area: topHelpers;
  }
`;

function TopHelpers({ top5Users }) {
  const navigate = useNavigate();
  return (
    <TopHelpersCont>
      {top5Users?.map(
        (
          user // Aquii debe ir un array de usuarios, los 10 primeros en levelPoints
        ) => (
          <UserPhoto
            user={user}
            key={uuidv4()}
            userPhoto={user.photo}
            userPoints={user.levelPoints}
            goTo={() => {
              navigate(`/profile/${user?.username ? user.username : null}`);
            }}
            isOnline={user.isOnline}
          />
        )
      )}
    </TopHelpersCont>
  );
}

export default TopHelpers;
