import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import DividingLine from '../../../../Layout/LineStyle/DividingLine';
import IconHeart from './IconHeart';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

import action from '../../../../../store/action';
import alert from '../../../../../images/alert.gif';

const Option = styled.span`
  color: rgba(0, 0, 0, 0.55);
  font-size: 1.4rem;
  cursor: pointer;
`;

const Options = styled.div`
  display: flex;
  gap: 2rem;
`;

const PostTemplteCont = styled.article`
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100vw;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 625px) {
    border: 1px solid #79777052; //--dark-color
    border-radius: 2rem;
    max-width: 625px;
  }
`;

const PostContainer = styled.div`
  margin-top: 1rem;
  padding: 0 3rem 0 3rem;
`;
const PostTitle = styled.h3`
  color: var(--dark-color);
  font-size: 2.5rem;
  font-family: var(--secondary-font);
  font-weight: normal;
  cursor: pointer;
`;
const PostDescription = styled.p`
  color: rgba(0, 0, 0, 0.55);
  font-size: 1.7rem;
  font-family: var(--secondary-font);
  font-weight: normal;
  text-align: justify;
  margin: 1.3rem 0 1.5rem 1.3rem;
`;
const ReactionContainer = styled.div`
  margin: 0 0 0.5rem 1.3rem;
  padding: 0 3rem 0 3rem;
  font-family: var(--secondary-font);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DontShow = styled.div`
  display: none;
`;

function PostTemplate({
  user,
  ban,
  userPhoto,
  userName,
  timePost,
  postTitle,
  postDescription,
  points,
  userPoints,
  resolved,
  likes,
  urlPost,
  authVer = false,
  idPost,
  textComment, // props para el boton comentar (cambiará a Ver Comentarios)
  timePosted,
  isOnline,
  community,
}) {
  // console.log(community);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // dispatch(action.getAllAnswers(idPost));

  const goTo = async () => {
    // lo primero que haria seria setear un estado en el redux
    await dispatch(
      action.loadEditedPost(
        userPhoto,
        userName,
        timePosted,
        postTitle,
        postDescription,
        points,
        userPoints,
        resolved,
        likes,
        urlPost,
        idPost
      )
    );
    // Llevarme con navigate a la pagina de edicion
    navigate(`${idPost}`);
    // En la pagina de edicion del State debo leer todas las propiedades que necesito
  };

  const editPost = async () => {
    // lo primero que haria seria setear un estado en el redux
    await dispatch(
      action.loadEditedPost(
        userPhoto,
        userName,
        timePosted,
        postTitle,
        postDescription,
        points,
        userPoints,
        resolved,
        likes,
        urlPost,
        idPost
      )
    );
    // Llevarme con navigate a la pagina de edicion
    navigate('edit-post');
    // En la pagina de edicion del State debo leer todas las propiedades que necesito
  };

  const onClick = async () => {
    // eslint-disable-next-line
    Swal.fire({
      title: 'Eliminar Publicación',
      text: 'Se eliminará esta publicación',
      imageUrl: `${alert}`,
      showCancelButton: true,
      confirmButtonColor: '#29ABE0',
      cancelButtonColor: '#D9534F',
      confirmButtonText: 'Sí, esta respuesta me sirvió',
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Se Eliminó!', '', 'success');
        dispatch(action.deletedPost(idPost));
        // eslint-disable-next-line
        location.reload();
        // setStateResolved()
      }
    });
    // if (confirm('¿Estas seguro de eliminar la publicación?') === true) {
    //   await dispatch(action.deletedPost(idPost));
    //   // eslint-disable-next-line
    //   location.reload();
    // }
  };
  return (
    <PostTemplteCont>
      <DontShow>{timePosted}</DontShow>
      <PostHeader
        user={user}
        isOnline={isOnline}
        onClick={goTo}
        userPhoto={userPhoto}
        userName={userName}
        timePost={timePost}
        points={points}
        userPoints={userPoints}
        resolved={resolved}
      />
      <DividingLine />
      <PostContainer>
        <PostTitle onClick={goTo}>{postTitle}</PostTitle>
        <PostDescription>{postDescription}</PostDescription>
      </PostContainer>
      <PostImage ban={ban} urlPost={urlPost} />
      <ReactionContainer>
        <IconHeart likes={likes} />
        {authVer ? (
          <Options>
            <Option onClick={editPost}>Editar</Option>
            <Option onClick={onClick}>Eliminar</Option>
          </Options>
        ) : null}
      </ReactionContainer>
      <DividingLine />

      <PostFooter
        likes={likes}
        idPost={idPost}
        textComment={textComment}
        community={community}
      />
      {/* <Answers idPost={idPost} /> */}
    </PostTemplteCont>
  );
}

PostTemplate.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postDescription: PropTypes.string.isRequired,
};

export default PostTemplate;
