import React, { useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
//import PropTypes from 'prop-types';


//Components
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Input from "../../Layout/Inputs/InputText";
import CardComunidadShow from "../../Layout/CardComunidadShow/CardComunidadShow";

//icons
import { BiImageAdd } from "react-icons/bi";

//Styled Components
import {
  PageContainer,
  TitleOrange,
  Label,
  SubTitle,
} from "../../../css/generalStyled";

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
`;

const TextArea = styled.textarea`
  padding: 1rem 0 0 2rem;
  border-radius: 3px;
  border: 0;
  font-family: var(--secondary-font);
  font-size: var(--secondarey-font-size);
  background: rgba(41, 171, 224, 0.08);
  width: 100%;
  resize: none;

  ::placeholder{
    color: var(--boring-color);
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
  margin-top: 40px;
  font-weight: bold;

  margin-bottom: -20px;
`;

const Button = styled("button")(
  ({ primary, danger }) => css`
    background: ${primary ? "var(--principal-color)" : null};
    background: ${danger ? "var(--alert-color)" : null};

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

const CreateCommunitie = () => {
  const [comu, setComu] = useState({});

  const addImage = () => {
    console.log("Añadir imageeeen");
  };

  const onChangeCe = (e) => {
    let title = e.target.value;
    let name = e.target.name;

    console.log(name, title);

    setComu({
      ...comu,
      [name]: title,
    });
  };


  const [name, changeName] = useState({field : '',check : null});
  const [image, changeImage] = useState({field : '',check : null});
  const [description, changeDescription] = useState({field : ''});

  const onSubmit = async (e) => {
    alert(description.field)
    e.preventDefault();   

    await axios.post('http://localhost:5001/api/communities/create', 

      {
        name: name.field,
        description: description.field,
        image: image.field
      }

    ).then(res => {
        console.log(res);
        console.log(res.data);
      });


  }

  return (
    <PageContainer> 
      <Header />
      <MainContainer>
        <Form actio="" onSubmit={onSubmit}>
          {/* Titulo */}
          <TitleOrange>Crear Comunidad</TitleOrange>

          {/* Inputs */}
          <Label htmlFor="Nombre">Nombre</Label>
          <Input
            state = {name}
            name = "nombre"
            changeState = {changeName}
            inputType="text"
            inputName="nombre"
            label="Nombre"
            textPlaceholder="Comida Latina .."
            onChangeCe={onChangeCe}
          />

          <Label htmlFor="Description">Descripcion</Label>
          <TextArea
            state = {description}
            changeState = {changeDescription}
            name = "description"
            rows="3"
            placeholder="Recetas y tips..."
            onChange={onChangeCe}
          />

          {/* Añadir imagen */}

          <Label htmlFor="imagen">Imagen URL</Label>
          <Input
            state = {image}
            name = "imagen"
            changeState = {changeImage}
            inputType="text"
            inputName="imagen"
            label="imagen"
            textPlaceholder="Añade la URL de la imagen: http://..."
            onChangeCe={onChangeCe}
          />
          <AddImage onClick={addImage}>
            <BiImageAdd />
            Añadir imagen
          </AddImage>

          {/* Vista Previa */}
          <VistaPrevia>Vista Previa</VistaPrevia>
          <CardComunidadShow image={comu.imagen} title={comu.nombre} />

          {/* Botones */}
          <Buttons>
            <Button type="button" danger>CANCELAR</Button>
            <Button type="submit"  primary>CREAR</Button>
          </Buttons>
        </Form>
      </MainContainer>
      <Footer />
    </PageContainer>
  );
};

CreateCommunitie.propTypes={

}

export default CreateCommunitie;
