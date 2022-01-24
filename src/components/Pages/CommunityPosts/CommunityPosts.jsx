import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import WelcomeCommunity from './WelcomeCommity/WelcomeCommunity';
import Header from '../../Layout/Header';
import DividingLine from '../../Layout/LineStyle/DividingLine';
import TopHelpers from './TopHelpers/TopHelpers';
import CreatePost from './CreatePost/CreatePost';
import GOFData from './BoxActions/BoxAction';
import PostList from './PostList/PostList';

// Data Mock
import axios from '../../../utils/axios';

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
  font-size: var(--secondarey-font-size);
`;

function CommunityPosts() {
  const userAuth = useSelector((state) => state.userAuthenticated);

  const [comuPosts, setComuPosts] = useState([]);

  const [results, setResults] = useState([]);

  useEffect(() => {
    const postsRequest = async () => {
      try {
        const response = await axios.get('/api/communities/css');
        const res = response.data;
        setComuPosts(res);
        setResults(res);
      } catch (err) {
        // eslint-disable-next-line
        console.error('404 Error en la petición /api/communities/css');
      }
    };

    postsRequest();
  }, []);

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
