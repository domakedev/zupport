import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { IoSend } from 'react-icons/io5';
import LikeButtonPost from './AcctioPost/LikeButton';
import CommentButtonPost from './AcctioPost/CommentButton';
import Answer from './Answers/Answer/Answer';
import action from '../../../../../store/action';

const PostFooterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0.2rem 0 0.7rem 0;
  padding: 0 2rem 0 2rem;
  .icon-comments {
    color: var(--boring-color);
    width: 2.5rem;
    height: 2.5rem;
    margin-top: 4px;
  }
`;

const ResponderAnimated = styled.div`
  margin-bottom: 20px;
`;
const AddAnswerCont = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const ButtonSend = styled.button`
  color: var(--principal-color);
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  font-size: 2.7rem;
  height: 40px;
  background: none;
  cursor: pointer;
  &:hover {
    color: #29ace094;
  }
`;

function PostFooter() {
  const [responder, setResponder] = useState();
  const [answerData, setAnswerData] = useState();

  const dispatch = useDispatch();

  const dataUser = {
    user: {
      photo:
        'https://media.istockphoto.com/photos/machu-picchu-peru-picture-id930824730?k=20&m=930824730&s=612x612&w=0&h=Lvzgs0qL32lHBuvFMVg3hotXpE1t0mJpqqrK-ajDzIc=',
      points: 5430,
      username: 'domakedev',
      id: '61eb5ea6345f4538ebf11cd0',
      post: '61e09c7fb35c71052690ec67',
    },
  };
  const onClickHandle = () => {
    setResponder(!responder);
  };
  const handleClick = () => {
    dispatch(
      action.addAnswerPost({
        answer: answerData,
        user: dataUser.user.id,
        likes: 0,
        post: dataUser.user.post,
        resolved: false,
      })
    );
  };

  return (
    <>
      <PostFooterContainer>
        <LikeButtonPost />
        <CommentButtonPost responderFn={onClickHandle} />
      </PostFooterContainer>
      <ResponderAnimated>
        {responder ? (
          <AddAnswerCont>
            <Answer
              state={dataUser}
              textPlaceholder="Escribe tu respuesta aquí..."
              setAnswerData={setAnswerData}
              sendButton={responder}
            />
            <ButtonSend type="button" onClick={handleClick}>
              <IoSend />
            </ButtonSend>
          </AddAnswerCont>
        ) : null}
      </ResponderAnimated>
    </>
  );
}

export default PostFooter;
