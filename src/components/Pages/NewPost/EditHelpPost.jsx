// Import redux
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  BsImages,
  BsFolder2Open,
  BsX,
  BsListOl,
  BsListUl,
  BsJustifyLeft,
  BsJustifyRight,
  BsJustify,
  BsTextCenter,
  BsTextIndentLeft,
  BsTextIndentRight,
  BsTypeBold,
  BsTypeUnderline,
  BsTypeItalic,
  BsCode,
  BsEmojiSmile,
  BsLink45Deg,
  BsTable,
} from 'react-icons/bs';
import action from '../../../store/action';
import axios from '../../../utils/axios';

// import Context
// import { useStateAuth } from '../../../context/Auth/AuthContext';
// Import Layout Components
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
// Import Page Components
import InputTitle from './Components/InputTitle';
import InputPost from './Components/InputPost';
import InputPoints from './Components/InputPoints';
// import InputUpload from './Components/InputUpload';
// Import Search and selection components
import GUsers from './GUsers';
import UserFoto from '../../Layout/UserPhoto/UserPhoto';

function EditHelpPost() {
  const dataPost = useSelector((state) => state.editPost);
  // Usuarios que vienen del api
  const [users, setUsers] = useState();
  // Aqui se guardan los Users seleccionados, todos sus datos
  // Incluso el _id
  const [usersSelected, setUsersSelected] = useState([]);
  // Resultados de la busqueda u orden, luego se imprimen
  // en pantalla
  const [results, setResults] = useState([]);
  const [file, setFile] = useState(null);
  const [uploaderShow, setUploaderShow] = useState(false);
  const [titlest, changeTitle] = useState({
    field: dataPost.title,
    check: null,
  });
  const [descriptionst, changeDescription] = useState({
    field: dataPost.description,
    check: null,
  });
  const [pointsst, changePoints] = useState({
    field: dataPost.points,
    check: null,
  });
  // const { bringUsers } = useStateAuth();
  // Parametros de validacion en frontEnd
  const parameters = {
    title: /^.{10,50}$/, // 10 a 50 caracteres.
    description: /^.{10,1300}$/, // 10 a 1300 caracteres.
    points: /^[0-9]{1,4}$/, // Maximo 9999 puntos
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(async () => {
    await dispatch(action.getAllUsers());
  }, []);

  const usuarios = useSelector((state) => state.users);

  useEffect(async () => {
    setUsers(usuarios);
    setResults(usuarios);
  }, [usuarios]);

  const [userNames, setUserNames] = useState([]);

  const selectUser = (u) => {
    if (usersSelected.includes(u)) {
      return;
    }
    setUsersSelected([...usersSelected, u]);
    setUserNames([...userNames, u.username]);
  };

  const deleteUserSelected = (userToDelete) => {
    // eslint-disable-next-line
    console.log(userToDelete);
    const beforeDelete = usersSelected.filter(
      // eslint-disable-next-line
      (u) => u._id !== userToDelete._id
    );
    const beforeDeleteUN = userNames.filter(
      // eslint-disable-next-line
      (u) => u !== userToDelete.username
    );
    setUserNames(beforeDeleteUN);
    setUsersSelected(beforeDelete);
  };

  const editPost = async () => {
    let urltemp = '';
    if (file !== null) {
      const formData = new FormData();
      formData.append('file', file);
      const result = await axios.post('/api/uploads/file', formData);
      const { url } = result.data;
      urltemp = url;
    }
    await dispatch(
      // eslint-disable-next-line
      action.editedPost(dataPost._id, {
        title: titlest.field,
        description: descriptionst.field,
        image: urltemp || dataPost.image,
        points: pointsst.field,
        taggedUsers: userNames,
      })
    );
    navigate(-1);
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      {dataPost.title ? (
        <div>
          <Header />

          <MainTitleContainer>
            <MainTitle>Modificar Pregunta</MainTitle>
            <GoBack onClick={goBack}>
              <BsX />
            </GoBack>
          </MainTitleContainer>

          <Line />

          <PageContainer>
            <PostTitle>¿En que deseas ayuda?</PostTitle>
            <InputTitle
              state={titlest}
              changeState={changeTitle}
              inputType="text"
              label="Titulo"
              textPlaceholder="Título del problema"
              inputName="titulo"
              errorText="El título debe poseer de 10 a 50 caracteres."
              inputParameters={parameters.title}
            />
            <InputStyle>
              <BsTypeBold />
              <BsTypeItalic />
              <BsTypeUnderline />
              <BsListUl />
              <BsListOl />
              <BsJustifyLeft />
              <BsTextCenter />
              <BsJustifyRight />
              <BsJustify />
              <BsTextIndentLeft />
              <BsTextIndentRight />
              <BsTable />
              <BsCode />
              <BsLink45Deg />
              <BsEmojiSmile />
            </InputStyle>
            <InputPost
              state={descriptionst}
              changeState={changeDescription}
              inputType="text"
              label="Descripcion"
              textPlaceholder="Ingresa aquí una breve descripción de tu problema..."
              inputName="descripcion"
              errorText="La descripción debe poseer de 10 a 1300 caracteres."
              inputParameters={parameters.description}
            />
            <PreviousImgText>Tu imagen cargada anteriormente</PreviousImgText>
            {dataPost.image ? (
              <PreviousImg src={dataPost.image} alt="Imagen anterior" />
            ) : (
              <SinImagen>Sin imagen</SinImagen>
            )}
            {uploaderShow ? (
              <Input
                type="file"
                name="file"
                id="file"
                onChange={onChangeFile}
                accept="image/*"
                multiple
              />
            ) : null}
            <AddContainer>
              <AddSecondaryContainer
                onClick={() => setUploaderShow(!uploaderShow)}
              >
                <BsImages /> Cambiar imagen
              </AddSecondaryContainer>
              <AddSecondaryContainer href="#">
                <BsFolder2Open /> Cambiar archivo
              </AddSecondaryContainer>
            </AddContainer>

            <Line />

            <HelpersText>
              Escoge a quienes quisieras que te ayuden{' '}
              <strong>solo si es necesario</strong> y si lo hacen no dudes en
              invitarles un cafecito 🙌 ☕
            </HelpersText>
            <AddHelperContainerTitle>
              Helpers
              <SelectedUsersStyle>
                {usersSelected?.map((u) => (
                  <UserFoto
                    // eslint-disable-next-line
                    key={`${u.photo}02${u.points}`}
                    user={u}
                    userPhoto={u.photo}
                    userPoints={u.points}
                    selectUser={selectUser}
                    selected
                    isOnline={u.isOnline}
                    deleteUserSelected={deleteUserSelected}
                  />
                ))}
              </SelectedUsersStyle>
            </AddHelperContainerTitle>

            <HelpersMainContainer>
              <GUsers setResults={setResults} results={results} users={users} />

              <HelpersContainer>
                {results?.map((u) => (
                  <UserFoto
                    // eslint-disable-next-line
                    key={`${u.photo}02${u.fullname}`}
                    user={u}
                    userPhoto={u.photo}
                    alt={u.fullname}
                    userPoints={u.points}
                    selectUser={selectUser}
                    isOnline={u.isOnline}
                  />
                ))}
              </HelpersContainer>
            </HelpersMainContainer>

            <Line />

            <OfferText>¿Que tan difícil consideras tu problema?</OfferText>
            <OfferMainContainer>
              <OfferTitle>OFRECER</OfferTitle>
              <OfferPointsContainer>
                <InputPoints
                  state={pointsst}
                  changeState={changePoints}
                  inputType="number"
                  label="Puntos"
                  textPlaceholder="0"
                  inputName="puntos"
                  errorText="Entre 0 y 9999"
                  inputParameters={parameters.points}
                />
                <OfferPointsText>Puntos</OfferPointsText>
              </OfferPointsContainer>
            </OfferMainContainer>

            <Line />

            <RequestButton onClick={editPost}>GUARDAR CAMBIOS</RequestButton>
          </PageContainer>

          <Footer />
        </div>
      ) : (
        navigate('/')
      )}
    </div>
  );
}

const PreviousImg = styled.img`
  max-width: 200px;
  display: flex;
  margin: auto;
`;

const Input = styled.input`
  width: min-content;
  font-family: var(--secondary-font);
  font-size: 1.8rem;
  margin-top: 20px;

  ::-webkit-file-upload-button {
    width: 130px;
    height: 30px;
    background-color: var(--principal-color);
    border-radius: 3px;
    display: block;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 2px 0 var(--boring-color);
    text-align: center;
    font-family: var(--secondary-font);
    font-size: 1.8rem;
    color: var(--light-color);
    text-decoration: none;
    border: none;
  }
`;

const MainTitleContainer = styled.div`
  padding: 2rem 0 1rem 0;
  display: flex;
  justify-content: center;
`;

const MainTitle = styled.h1`
  font-family: var(--principal-font);
  color: var(--boring-color);
  text-align: center;
  padding-left: 10rem;
  font-weight: normal;
  font-size: 2.5rem;
`;

const GoBack = styled.div`
  color: var(--boring-color);
  padding-left: 100px;
  font-size: 3rem;
  cursor: pointer;
`;

const Line = styled.hr`
  border-top: 0.1rem solid var(--boring-color);
  opacity: 0.3;
`;

const PageContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 1rem;
  @media (min-width: 768px) {
    width: 100%;
    max-width: 55rem;
  }
`;

const PostTitle = styled.h1`
  font-family: var(--principal-font);
  color: var(--warning-color);
  text-align: center;
  font-weight: normal;
  font-size: 3.6rem;
  padding: 2rem 0;
`;

const AddContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`;

const AddSecondaryContainer = styled.a`
  font-family: var(--secondary-font);
  color: var(--warning-color);
  font-weight: normal;
  font-size: 1.8rem;
  text-decoration: none;
  cursor: pointer;
`;

const HelpersMainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
`;

const HelpersText = styled.div`
  font-family: var(--secondary-font);
  color: var(--dark-color);
  padding-top: 2rem;
  font-size: 1.8rem;
`;

const AddHelperContainerTitle = styled.div`
  font-family: var(--principal-font);
  color: var(--warning-color);
  font-weight: normal;
  font-size: 2rem;
  padding: 1.5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const HelpersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  margin-top: 15px;
  padding: 20px;
  width: 80%;
  min-height: 60px;
  max-height: 120px;
  overflow-y: scroll;
`;

const OfferMainContainer = styled.div`
  display: flex;
  padding-bottom: 1rem;
`;

const OfferText = styled.div`
  font-family: var(--secondary-font);
  color: var(--dark-color);

  padding: 1rem 0;
  font-size: 1.8rem;
`;

const PreviousImgText = styled.div`
  font-family: var(--principal-font);
  color: var(--boring-color);
  text-align: center;
  padding: 1rem 0;
  font-weight: normal;
  font-size: 1.8rem;
`;

const SinImagen = styled.div`
  font-family: var(--principal-font);
  color: var(--warning-color);
  text-align: center;
  padding: 1rem 0;
  font-weight: normal;
  font-size: 1.4rem;
`;

const OfferTitle = styled.div`
  font-family: var(--principal-font);
  color: var(--boring-color);

  padding: 1rem 0;
  font-weight: normal;
  font-size: 2.5rem;
`;

const OfferPointsContainer = styled.div`
  margin-left: auto;
  display: flex;
`;

const OfferPointsText = styled.div`
  font-family: var(--secondary-font);
  color: var(--dark-color);

  padding: 1rem 0;
  font-size: 1.8rem;
`;

const RequestButton = styled.button`
  width: 165px;
  height: 50px;
  background-color: var(--principal-color);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 2px 0 var(--boring-color);
  text-align: center;
  font-family: var(--secondary-font);
  font-size: 18px;
  color: var(--light-color);
  text-decoration: none;
  border: none;
  margin: 3rem auto;

  &:hover {
    background-color: var(--secondary-color);
    color: var(--light-color);
  }
`;

const InputStyle = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    padding: 1rem;
    justify-content: space-around;
    font-size: 1.8rem;
    color: var(--boring-color);
  }
`;

const SelectedUsersStyle = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export default EditHelpPost;
