import { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { BsX } from 'react-icons/bs';
import action from '../../../store/action';

import Header from '../../Layout/Header';
import PostTemplate from '../CommunityPosts/PostList/PostTemplate/PostTemplate';
import {
  getPostTime,
  softNumber,
} from '../../../controller/CommunityPostCtr/utilities';

const MainTitleContainer = styled.div`
  padding: 2rem 0 1rem 0;
  display: flex;
  justify-content: center;
`;

const MainTitle = styled.h1`
  font-family: var(--principal-font);
  color: var(--boring-color);
  text-align: center;
  padding-left: 25rem;
  font-weight: normal;
  font-size: 2.5rem;
`;

const GoBack = styled(Link)`
  color: var(--boring-color);
  margin-left: auto;
  font-size: 3rem;
`;

const Line = styled.hr`
  border-top: 0.1rem solid var(--boring-color);
  opacity: 0.3;
`;

const CommunityPostCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0 3rem 0;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    background: rgba(41, 172, 224, 0.025);
    width: 100%;
    justify-self: center;
    grid-template-areas:
      'welcome  welcome welcome'
      ' .  topHelpers . '
      '. . gofData'
      '. . createPost'
      '. . postList';
  }
`;
const Container = styled.div`
  display: grid;
  justify-content: center;
`;

const AlertMessage = styled.div`
  margin-top: 50%;
  font-family: var(--secondary-font);
  font-size: var(--secondary-font-size);
`;

function UniquePost() {
  const dispatch = useDispatch();
  const idPost = useParams().id;

  const userAuth = useSelector((state) => state.userAuthenticated);
  const currentUser = useSelector((state) => state.currentUserOTokencito);
  console.log('🚀 ~ file: UniquePost.jsx ~ line 77 ~ currentUser', currentUser);

  useEffect(async () => {
    await dispatch(action.getPost(idPost));
  }, []);

  const currentPost = useSelector((state) => state.addPost);
  return (
    <>
      <Header />
      <Container>
        {!userAuth ? (
          <AlertMessage>Que tal si iniciamos sesion primero?</AlertMessage>
        ) : (
          <CommunityPostCont>
            <MainTitleContainer>
              <MainTitle>Publicacion</MainTitle>
              <GoBack to="/communities/community-posts">
                <BsX />
              </GoBack>
            </MainTitleContainer>

            <Line />
            <PostTemplate
              user={currentPost?.user}
              key={`${currentPost.title}0${currentPost.user?.username}`}
              // ban={index}
              userPhoto={currentPost.user?.photo}
              userName={currentPost.user?.username}
              timePost={getPostTime(currentPost.timePosted)}
              postTitle={currentPost.title}
              postDescription={currentPost.description}
              points={softNumber(currentPost.points)}
              userPoints={currentPost.user?.points}
              resolved={currentPost.resolved}
              likes={currentPost.likes}
              urlPost={currentPost.image}
              // eslint-disable-next-line
              idPost={currentPost._id}
              authVer={currentUser.username === currentPost.user?.username}
              isOnline={currentPost.user?.isOnline}
            />
          </CommunityPostCont>
        )}
      </Container>
    </>
  );
}

export default UniquePost;
