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
      '. . postList'
      '. . butPage';
  }
`;
const Container = styled.div`
  display: grid;
  justify-content: center;
`;

const PrevPage = styled.button`
  padding: 1rem;
  display: inline-block;
  border: none;
  border-radius: 1rem;
  background: var(--principal-color); //rgba(41, 172, 224, 0.618);
  color: var(--light-color);
  font-family: var(--principal-font);
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: normal;
  cursor: pointer;
  margin: 10px 0 10px 0;
  list-style: none;
  text-decoration: none;
  margin-top: 10px;
  width: 100px;
`;

const NextPage = styled.button`
  padding: 1rem;
  display: inline-block;
  border: none;
  border-radius: 1rem;
  background: var(--principal-color); //rgba(41, 172, 224, 0.618);
  color: var(--light-color);
  font-family: var(--principal-font);
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: normal;
  cursor: pointer;
  margin: 10px 0 10px 0;
  list-style: none;
  text-decoration: none;
  margin-top: 10px;
  width: 100px;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 1024px) {
    grid-area: butPage;
  }
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

  const [page, setPage] = useState(1);

  const comuPosts = useSelector((state) => state.posts);

  const nextPage = () => {
    if (comuPosts.length === 10) {
      const next = page + 1;
      setPage(next);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      const prev = page - 1;
      setPage(prev);
    }
  };

  useEffect(async () => {
    const idPost = '61e10b9749e4a27d593c6a95'; // '61e10b9749e4a27d593c6a95 61e1862cd149a9366f8bfe1d ', idPost es en realidad id de la comunidad

    await dispatch(action.getAllPosts(idPost, page));
  }, [page]);

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
            <PageContainer>
              <PrevPage type="button" onClick={prevPage}>
                Previous
              </PrevPage>
              <NextPage type="button" onClick={nextPage}>
                Next
              </NextPage>
            </PageContainer>
          </CommunityPostCont>
        )}
      </Container>
    </>
  );
}

export default CommunityPosts;
