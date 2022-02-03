/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoSend } from 'react-icons/io5';
import LikeButtonPost from './AcctioPost/LikeButton';
import CommentButtonPost from './AcctioPost/CommentButton';
import action from '../../../../../store/action';
import UserPhoto from '../../../../Layout/UserPhoto/UserPhoto';
import err from '../../../../../images/err.gif';

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
const MessCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const P = styled.p`
  font-family: Archivo Narrow;
  font-style: normal;
  font-weight: normal;
  font-size: var(--secondarey-font-size);
  line-height: 18px;
  color: var(--alert-color);
  text-align: center;
`;
const Figure = styled.figure`
  width: 200px;
`;
const Image = styled.img`
  object-fit: cover;
  object-position: center center;
  width: 100%;
`;

function PostFooter({ idPost, textComment, likes, community }) {
  // console.log(community);
  const [responder, setResponder] = useState(false);
  const navigate = useNavigate();
  const [answerData, setAnswerData] = useState('');
  // const [err, setErr] = useState(false);

  // obteniendo al usuario actual para crear el comentario
  const currentUser = useSelector((state) => state.currentUserOTokencito);
  // const reqError = useSelector((state) => state.reqErr);

  // Se hace un set de los datos del post

  // const currentPost = useSelector((state) => state);
  // console.log(reqError, currentUser);
  const dispatch = useDispatch();
  useEffect(async () => {
    // dispatch(action.getOnlyPost(idPost));
  }, []);

  const onClickHandle = async (e) => {
    e.preventDefault();
    // dispatch(action.getOnlyPost(idPost))
    // Si el boton en su name está en Ver Respuestas , llevará a otra pagina con el id del post
    if (e.target.name === 'Ver Respuestas') {
      navigate(`${idPost}`);
      // await dispatch(action.getOnlyPost(idPost));
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
          // user: currentUser.username,
          likes: [],
          post: idPost,
          resolved: false,
          community,
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
          Object.entries(currentUser).length === 0 ? (
            <MessCont>
              <Figure>
                <Image src={err} alt="error" />
              </Figure>
              <P>Para ayudar a esta persona deberas iniciar sesión</P>
            </MessCont>
          ) : (
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
          )
        ) : null}
      </ResponderAnimated>
    </>
  );
}

export default PostFooter;
// {reqError ? <p>Si, mejor iniciamos sesión</p> : null}
