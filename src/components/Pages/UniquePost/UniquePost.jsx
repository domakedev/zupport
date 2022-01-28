import { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import action from '../../../store/action';

import Header from '../../Layout/Header';
import PostTemplate from '../CommunityPosts/PostList/PostTemplate/PostTemplate';
import {
  getPostTime,
  softNumber,
} from '../../../controller/CommunityPostCtr/utilities';

const CommunityPostCont = styled.div`
  display: grid;
  grid-template-columns: 1fr;
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
            <PostTemplate
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
              likes={softNumber(currentPost.likes)}
              urlPost={currentPost.image}
              // eslint-disable-next-line
              idPost={currentPost._id}
              authVer={currentUser.username === currentPost.user?.username}
            />
          </CommunityPostCont>
        )}
      </Container>
    </>
  );
}

export default UniquePost;
