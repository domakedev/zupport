import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import UserPhoto from '../../../../Layout/UserPhoto/UserPhoto';

const PostHeaderCont = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem 0 2rem;
  @media screen and (min-width: 768px) {
  }
  .textColor {
    color: ${(props) =>
      props.resolved ? '#79777052' : 'var(--warning-color)'};
  }
`;

const UserProfileCont = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const PostDateCont = styled.div`
  padding-left: 10px;
`;
const PostUserName = styled.h3`
  color: var(--dark-color);
  font-size: var(--secondarey-font-size);
  font-family: var(--principal-font);
  font-weight: normal;
`;
const PostTime = styled.p`
  color: rgba(0, 0, 0, 0.55);
  font-size: 1.3rem;
  font-family: var(--secondary-font);
  font-weight: normal;
`;
const PostPointsCont = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
);
const PostPoints = styled(PostUserName)`
  font-size: var(--secondarey-font-size);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextPoints = styled(PostTime)`
  color: var(--warning-color);
`;
const LineCont = styled.div`
  background: #79777052;
  height: 3px;
  width: 5rem;
  margin-top: 15px;
  position: absolute;
  z-index: 2;
`;

function PostHeader({
  user,
  userPhoto,
  userName,
  timePost,
  points,
  resolved,
  isOnline,
}) {
  console.log('🚀 ~ file: PostHeader.jsx ~ line 76 ~ user', user);
  const nombreCualquiera = useSelector((state) => state.loadOnlyPost);

  useEffect(() => {}, [nombreCualquiera]);

  const navigate = useNavigate();

  return (
    <PostHeaderCont resolved={nombreCualquiera.resolved || resolved}>
      <UserProfileCont>
        <UserPhoto
          user={user}
          // photo={userPhoto}
          isOnline={isOnline}
          userPhoto={userPhoto}
          userPoints={user.levelPoints}
          goTo={() => {
            navigate(`/profile/${userName || null}`);
          }}
        />
        <PostDateCont>
          <PostUserName>{userName}</PostUserName>
          <PostTime>{timePost}</PostTime>
        </PostDateCont>
      </UserProfileCont>

      <PostPointsCont>
        <TextPoints>Gana pts</TextPoints>
        <PostPoints className="textColor">{points}</PostPoints>
        {nombreCualquiera.resolved || resolved ? <LineCont /> : null}
      </PostPointsCont>
    </PostHeaderCont>
  );
}

PostHeader.propTypes = {
  userPhoto: PropTypes.string.isRequired, // Si no tiene foto cómo se podria validar?
  userName: PropTypes.string.isRequired,
  timePost: PropTypes.string.isRequired,
  // points: PropTypes.number,
  resolved: PropTypes.bool.isRequired,
};

PostHeader.defaultProps = {
  // points: 0,
};

export default PostHeader;
