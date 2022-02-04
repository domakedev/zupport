import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// import PropTypes from 'prop-types';

// Components
import { BiImageAdd } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import AddPhotoIcon from '../../../images/Icon/AddPhotoIcon.svg';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Input from '../../Layout/Inputs/InputText';
import InputArea from '../../Layout/Inputs/InputTextArea';
import CardComunidadShow from '../../Layout/CardComunidadShow/CardComunidadShow';
import action from '../../../store/action';
import axios from '../../../utils/axios';
// icons

// Styled Components
import {
  PageContainer,
  TitleOrange,
  Label,
  SubTitle,
} from '../../../css/generalStyled';

const AuthTitle = styled.div`
  display: flex;
  width: max-content;
  margin: 120px auto;
  font-family: var(--principal-font);
  color: var(--boring-color);
  text-align: center;
  font-weight: normal;
  font-size: 3.6rem;
  padding: 2rem 0;
`;

const AuthSubTitle = styled.div`
  display: flex;
  margin: 120px auto;
  text-decoration: underline;
  width: max-content;
  font-family: var(--principal-font);
  color: var(--boring-color);
  text-align: center;
  font-weight: normal;
  font-size: 3.6rem;
  padding: 2rem 0;
  cursor: pointer;
  :hover {
    color: var(--secondary-color);
  }
`;

const MainContainer = styled.div`
  flex-grow: 1;
  width: 90%;
  max-width: 1200px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 350px;
  & input[id='comPhoto'] {
    display: none;
  }
  & label[for='comPhoto'] {
    min-width: 300px;
    height: 50px;
    display: flex;
    padding: 6px 0px;
    cursor: pointer;
    margin-top: 10px;
  }
`;

const AddImage = styled.p`
  border: none;
  font-family: var(--secondary-font);
  font-size: var(--secondarey-font-size);
  cursor: pointer;
  color: var(--warning-color);
  margin-top: 10px;

  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
    font-size: 30px;
  }
`;

const VistaPrevia = styled(SubTitle)`
  text-align: center;
  margin-top: 20px;
  font-weight: bold;

  margin-bottom: -20px;
`;

const Button = styled('button')(
  ({ primary, danger }) => css`
    background: ${primary ? 'var(--principal-color)' : null};
    background: ${danger ? 'var(--alert-color)' : null};

    border: none;
    color: var(--light-color);
    font-size: var(--secondarey-font-size);
    font-family: var(--secondary-font);
    border-radius: 3px;
    padding: 10px 35px;
    cursor: pointer;
    font-weight: bold;

    width: 150px;
  `
);

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

function CreateCommunitie() {
  const [title, changeTitle] = useState({ field: '', check: null });
  const [description, changeDescription] = useState({ field: '', check: null });
  const [image, changeImage] = useState({ field: '', check: null });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createCom = async () => {
    await dispatch(
      action.addCommunities({
        title: title.field,
        description: description.field,
        image: image.field,
      })
    );
    navigate(`/communities/${title.field}/posts`);
  };

  // const addImage = () => {
  //   // eslint-disable-next-line
  //   console.log('Añadir imageeeen');
  //   changeImage({ ...image, field: '' });
  // };

  const onChangeFile = async (e) => {
    e.preventDefault();
    if (image.field !== '') {
      const prevUrl = image.field?.split('/').pop().split('.')[0];
      await axios.post('/api/uploads/deletefile', { prevId: prevUrl });
    }
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    const result = await axios.post('/api/uploads/file', formData);
    const { url } = await result.data;
    changeImage({ ...image, field: await url });
  };

  const goBack = async () => {
    if (image.field !== '') {
      const prevUrl = image.field?.split('/').pop().split('.')[0];
      await axios.post('/api/uploads/deletefile', { prevId: prevUrl });
    }
    navigate(-1);
  };

  const userAuth = useSelector((state) => state.userAuthenticated);

  return (
    <div>
      {!userAuth ? (
        <div>
          <Header />
          <AuthTitle>¿Qué tal si iniciamos sesión primero</AuthTitle>
          <AuthSubTitle
            onClick={() => {
              navigate('/login');
            }}
          >
            Inicia sesión aquí
          </AuthSubTitle>
          <Footer />
        </div>
      ) : (
        <PageContainer>
          <Header />
          <MainContainer>
            <Form>
              {/* Titulo */}
              <TitleOrange>Crear Comunidad</TitleOrange>

              {/* Inputs */}
              <Label htmlFor="Titulo">Título</Label>
              <Input
                state={title}
                name="title"
                changeState={changeTitle}
                inputType="text"
                inputName="title"
                label="Titulo"
                textPlaceholder="Comida Latina..."
              />

              <Label htmlFor="Descripcion">Descripción</Label>
              <InputArea
                state={description}
                changeState={changeDescription}
                inputType="text"
                label="Descripcion"
                textPlaceholder="Recetas y tips..."
                inputName="descripcion"
                boxHeight="100px"
              />

              {/* Añadir imagen */}

              <Label htmlFor="imagen">Imagen URL</Label>
              <Input
                state={image}
                name="imagen"
                changeState={changeImage}
                inputType="text"
                inputName="imagen"
                label="imagen"
                textPlaceholder="Añade la URL de la imagen: http://..."
                value={image.field}
              />
              <label htmlFor="comPhoto" onChange={onChangeFile}>
                <input
                  type="file"
                  name="comPhoto"
                  id="comPhoto"
                  accept="image/*"
                  multiple
                />
                <AddImage>
                  <BiImageAdd />
                  Añadir imagen
                </AddImage>
              </label>

              {/* Vista Previa */}
              <VistaPrevia>Vista Previa</VistaPrevia>
              <CardComunidadShow image={image.field} title={title.field} />

              {/* Botones */}
              <Buttons>
                <Button type="button" onClick={goBack} danger>
                  CANCELAR
                </Button>
                <Button type="button" onClick={createCom} primary>
                  CREAR
                </Button>
              </Buttons>
            </Form>
          </MainContainer>
          <Footer />
        </PageContainer>
      )}
    </div>
  );
}

CreateCommunitie.propTypes = {};

export default CreateCommunitie;
