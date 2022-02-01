import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import WelcomeCommunity from './WelcomeCommity/WelcomeCommunity';
import Header from '../../Layout/Header';
import DividingLine from '../../Layout/LineStyle/DividingLine';
import TopHelpers from './TopHelpers/TopHelpers';
import CreatePost from './CreatePost/CreatePost';
import GOFData from './BoxActions/BoxAction';
import PostList from './PostList/PostList';
import action from '../../../store/action';

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
      '. . topHelpers'
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
  font-size: var(--secondarey-font-size);
`;

function CommunityPosts() {
  const dispatch = useDispatch();

  const userAuth = useSelector((state) => state.userAuthenticated);
  const [results, setResults] = useState([]);

  useEffect(async () => {
    const idPost = '61e10b9749e4a27d593c6a95'; // '61e10b9749e4a27d593c6a95 61e1862cd149a9366f8bfe1d ', idPost es en realidad id de la comunidad

    await dispatch(action.getAllPosts(idPost));
  }, []);

  const comuPosts = useSelector((state) => state.posts);

  useEffect(async () => {
    setResults(comuPosts);
  }, [comuPosts]);
  // console.log(comuPosts);

  return (
    <>
      <Header />
      <Container>
        {!userAuth ? (
          <AlertMessage>Que tal si iniciamos sesion primero?</AlertMessage>
        ) : (
          <CommunityPostCont>
            <WelcomeCommunity title="Javascript" />
            <DividingLine />
            <TopHelpers />
            <CreatePost />
            <GOFData
              comuPosts={comuPosts}
              setResults={setResults}
              results={results}
            />
            <PostList results={results} />
          </CommunityPostCont>
        )}
      </Container>
    </>
  );
}

export default CommunityPosts;
