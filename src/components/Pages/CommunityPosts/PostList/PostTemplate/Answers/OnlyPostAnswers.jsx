/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import UserPhoto from '../../../../../Layout/UserPhoto/UserPhoto';
// import DividingLine from '../../../../../Layout/LineStyle/DividingLine';
// import IconHeart from '../IconHeart';
// import PostFooter from '../PostFooter';
// import PostImage from '../PostImage';
// import PostHeader from '../PostHeader';
// // // import PostTemplate from '../PostTemplate';
// import {
//   getPostTime,
//   softNumber,
// } from '../../../../../../controller/CommunityPostCtr/utilities';
// import action from '../../../../../../store/action';

const PostTemplteCont = styled.article`
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  max-width: 625px;
  @media screen and (min-width: 1024px) {
    border: 1px solid #79777052; //--dark-color
    border-radius: 2rem;
  }
`;
// const PostContainer = styled.div`
//   margin-top: 1rem;
//   padding: 0 3rem 0 3rem;
// `;
// const PostTitle = styled.h3`
//   color: var(--dark-color);
//   font-size: 2.5rem;
//   font-family: var(--secondary-font);
//   font-weight: normal;
// `;
// const PostDescription = styled.p`
//   color: rgba(0, 0, 0, 0.55);
//   font-size: 1.7rem;
//   font-family: var(--secondary-font);
//   font-weight: normal;
//   text-align: justify;
//   margin: 1.3rem 0 1.5rem 1.3rem;
// `;
// const ReactionContainer = styled.div`
//   margin: 0 0 0.5rem 1.3rem;
//   padding: 0 3rem 0 3rem;
//   font-family: var(--secondary-font);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

function OnlyPostAnswers() {
  // const [post, setPost] = useState({});

  // const currentPost = {
  //   _id: '61f30fd7cd6f6c5ab4490cff',
  //   timePosted: '2022-01-26T21:42:51.891Z',
  //   title: 'Este post es Nayruth prueba',
  //   description: 'prueba',
  //   image: '',
  //   likes: 0,
  //   points: 20,
  //   user: {
  //     _id: '61f1c14a60a95d2e585279e3',
  //     username: 'nayruth1212',
  //     photo:
  //       'https://media-exp1.licdn.com/dms/image/C4D03AQGCyan1-WzT6A/profile-displayphoto-shrink_200_200/0/1566666564798?e=1648684800&v=beta&t=mG056XVIGe4bX00rz-NAfbDGHrm7sWzbHlFJEeGxpW0',
  //     points: 3,
  //   },
  //   taggedUsers: ['61eb5ea6345f4538ebf11cd0', '61f1c14a60a95d2e585279e3'],
  //   community: '61e1862cd149a9366f8bfe1d',
  //   resolved: false,
  //   __v: 0,
  // };
  const currentPost = useSelector((state) => state.loadOnlyPost);
  console.log('hola', currentPost);
  // const dispatch = useDispatch();
  // dispatch(action.getOnlyPost('61f30fd7cd6f6c5ab4490cff'));
  // const currentPostp = useSelector((state) => state.loadOnlyPost);
  useEffect(async () => {
    // await dispatch(action.getOnlyPost('61f30fd7cd6f6c5ab4490cff'));
    // setPost(currentPost);
  }, []);
  // console.log(currentPostp);
  return (
    <PostTemplteCont>
      <h1>{currentPost.title}</h1>
      {/* <UserPhoto
        userPhoto={currentPost.user.photo}
        userPoints={currentPost.user.points}
      /> */}
      {/* <PostHeader
        userPhoto={currentPost.user.photo}
        userName={currentPost.user.username}
        timePost={getPostTime(currentPost.timePosted)}
        points={softNumber(currentPost.points)}
        userPoints={currentPost.user.points}
        resolved={currentPost.resolved}
      /> */}
      {/* <DividingLine />
      <PostContainer>
        <PostTitle>{currentPost.postTitle}</PostTitle>
        <PostDescription>{currentPost.description}</PostDescription>
      </PostContainer>
      <PostImage urlPost={currentPost.urlPost} />
      <ReactionContainer>
        <IconHeart likes={softNumber(currentPost.likes)} />
      </ReactionContainer>
      <DividingLine />
      <PostFooter idPost={currentPost.idPost} textComment="Responder" /> */}
      {/* <Answers idPost={idPost} /> */}
    </PostTemplteCont>
  );
}

export default OnlyPostAnswers;
