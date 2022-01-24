import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { IoSend } from 'react-icons/io5';
import LikeButtonPost from './AcctioPost/LikeButton';
import CommentButtonPost from './AcctioPost/CommentButton';
// import Answer from './Answers/Answer/Answer';
import action from '../../../../../store/action';
import UserPhoto from '../../../../Layout/UserPhoto/UserPhoto';

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
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  margin-top: 10px;
  gap: 2rem;
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
const InputBox = styled.input`
  font-family: var(--secondary-font);
  font-size: 1.8rem;
  width: 100%;
  background: rgba(41, 171, 224, 0.08);
  border-radius: 3px;
  line-height: 45px;
  padding-left: 20px;
  padding-right: 40px;
  transition: 0.3s ease all;
  border: 3px solid transparent;
  &:focus {
    border: 2px solid var(--secondary-color);
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;
function PostFooter() {
  const [responder, setResponder] = useState();
  const [answerData, setAnswerData] = useState();
  // const [cleanInput, setCleanInput] = useState(false);

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
      action.addAnswerPost(
        {
          answer: answerData,
          user: dataUser.user.id,
          likes: 0,
          post: dataUser.user.post,
          resolved: false,
        },
        '61e09c7fb35c71052690ec67'
      )
    );
    setAnswerData('');
  };
  console.log(answerData);
  const onChange = (e) => {
    setAnswerData(e.target.value);
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
            <UserPhoto
              userPhoto={dataUser.user.photo}
              userPoints={dataUser.user.points}
            />{' '}
            <InputBox
              type="text"
              placeholder="Escribe tu respuesta aquí..."
              value={answerData}
              onChange={onChange}
            />
            {/* <Answer
              state={dataUser}
              textPlaceholder="Escribe tu respuesta aquí..."
              setAnswerData={setAnswerData}
              sendButton={responder}
              cleanInput={cleanInput}
            /> */}
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
