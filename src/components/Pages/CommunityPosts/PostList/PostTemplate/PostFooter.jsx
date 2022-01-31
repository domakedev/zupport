/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

function PostFooter({ idPost, textComment, likes }) {
  const [responder, setResponder] = useState(false);
  const navigate = useNavigate();
  const [answerData, setAnswerData] = useState('');

  // const [cleanInput, setCleanInput] = useState(false);
  // obteniendo al usuario actual para crear el comentario
  const currentUser = useSelector((state) => state.currentUserOTokencito);
  // console.log(currentUser, idPost, currentUser.points);
  // console.log(currentUser);

  // Se hace un set de los datos del post

  // const currentPost = useSelector((state) => state);
  const dispatch = useDispatch();
  // const dataUser = {
  //   user: {
  //     photo:
  //       'https://media.istockphoto.com/photos/machu-picchu-peru-picture-id930824730?k=20&m=930824730&s=612x612&w=0&h=Lvzgs0qL32lHBuvFMVg3hotXpE1t0mJpqqrK-ajDzIc=',
  //     points: 5430,
  //     username: 'domakedev',
  //     id: '61eb5ea6345f4538ebf11cd0',
  //     post: '61e09c7fb35c71052690ec67',
  //   },
  // };
  useEffect(async () => {
    // dispatch(action.getOnlyPost(idPost));
  }, []);

  const onClickHandle = async (e) => {
    e.preventDefault();
    // dispatch(action.getOnlyPost(idPost))
    // Si el boton en su name está en Ver Respuestas , llevará a otra pagina con el id del post
    if (e.target.name === 'Ver Respuestas') {
      navigate(`${idPost}`);
      await dispatch(action.getOnlyPost(idPost));
    } else {
      setResponder(!responder);
    }
  };
  // console.log('posfooter');
  const handleClick = () => {
    dispatch(
      action.addAnswerPost(
        {
          answer: answerData,
          user: currentUser._id,
          likes: 0,
          post: idPost,
          resolved: false,
        },
        idPost
      )
    );
    setAnswerData('');
  };
  // console.log(answerDatagg);
  const onChange = (e) => {
    setAnswerData(e.target.value);
  };
  return (
    <>
      <PostFooterContainer>
        <LikeButtonPost likes={likes} idPost={idPost} />
        <CommentButtonPost responderFn={onClickHandle} text={textComment} />
      </PostFooterContainer>
      <ResponderAnimated>
        {responder ? (
          <AddAnswerCont>
            <UserPhoto
              userPhoto={currentUser.photo}
              userPoints={currentUser.points}
            />{' '}
            <InputBox
              type="text"
              placeholder="Escribe tu respuesta aquí..."
              value={answerData}
              onChange={onChange}
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
