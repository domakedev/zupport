import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
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
      'topHelpers topHelpers topHelpers'
      'gofData gofData gofData'
      'createPost createPost createPost'
      'postList postList postList'
      'butPage butPage butPage';
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

function CommunityPosts() {
  const dispatch = useDispatch();
  const { comuTitle } = useParams();

  const [results, setResults] = useState([]);

  const [top5Users, setTop5Users] = useState([]);

  const [page, setPage] = useState(1);

  const comuPosts = useSelector((state) => state.posts);

  const usersCommunity = useSelector((state) => state.usersCommunity);

  const communityUsers = useSelector((state) => state.getTitleCommunity.users);

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
    // busca por el id de la comunidad
    await dispatch(action.getAllPosts(comuTitle, page));
    await dispatch(action.getCommunityByTitle(comuTitle));
  }, [page]);

  useEffect(async () => {
    setResults(comuPosts);
  }, [comuPosts]);

  useEffect(async () => {
    dispatch(action.cleanUsersCommunity());

    if (communityUsers !== undefined && communityUsers !== null) {
      const esperaesto = () => {
        // eslint-disable-next-line no-restricted-syntax
        for (const [, username] of Object.entries(communityUsers)) {
          dispatch(action.getUserForCommunity(username));
        }
      };

      await esperaesto();
    }
  }, [communityUsers]);

  useEffect(() => {
    if (communityUsers?.length === usersCommunity?.length) {
      const top5UsersTemp = usersCommunity.sort(
        (a, b) => b.levelPoints - a.levelPoints
      );
      setTop5Users(top5UsersTemp);
    }
  }, [usersCommunity]);

  return (
    <>
      <Header />
      <Container>
        <CommunityPostCont>
          <WelcomeCommunity title={comuTitle} />
          <DividingLine />
          <TopHelpers top5Users={top5Users} />
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
      </Container>
    </>
  );
}

export default CommunityPosts;
