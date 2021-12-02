import React from "react";
import styled from "styled-components";

//Components
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { Input } from "../../Layout/Inputs/InputText";

//Styled Components
import { PageContainer, TitleOrange, Label } from "../../../css/generalStyled";

const MainContainer = styled.div`
  flex-grow: 1;
  width: 90%;
  max-width: 1200px;
  margin: 30px auto;

  background-color: azure;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 350px;
`;

const CreateCommunitie = () => {
  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Form>
          <TitleOrange>Crear Comunidad</TitleOrange>

          <Label for="size_1">Nombre</Label>
          <Input
            typeInput="text"
            name="size"
            id="size_1"
            textPlaceholder="Comida Latina..."
          />

          <Label for="Descripcion">Descripcion</Label>
          <Input
            type="textarea"
            name="Descripcion"
            id="Descripcion"
            textPlaceholder="Recetas y tips..."
          />
        </Form>
      </MainContainer>
      <Footer />
    </PageContainer>
  );
};

export default CreateCommunitie;
