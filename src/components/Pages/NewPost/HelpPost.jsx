import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useStateAuth } from "../../../context/Auth/AuthContext";

import Input from "../../Layout/Inputs/InputText";
import InputArea from "../../Layout/Inputs/InputTextArea";
import InputNumber from "../../Layout/Inputs/InputNumber";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import GUsers from "./GUsers";
import UserFoto from "../../Layout/UserPhoto/UserPhoto";

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
} from "react-icons/bs";

function HelpPost() {

  const {bringUsers} = useStateAuth()
  const parameters = {
    title: /^.{10,50}$/, // 10 a 50 caracteres.
    description: /^.{10,1300}$/, // 10 a 50 caracteres.
    points: /^[0-9]{1,4}$/,
  };

  useEffect(() => {
    const allUsers = async()=>{
      try {
        const resultado=  await bringUsers()
        console.log("allforone",resultado.data);
        setUsers(resultado.data);
        setResults(resultado.data);
      } catch (error) {
        console.log(error);
      }

  }
  allUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectUser = (u) => {
    if (usersSelected.includes(u)) {
      return;
    }
    setUsersSelected([...usersSelected, u]);
  };

  const deleteUserSelected = (userToDelete) => {
    console.log(userToDelete);
    const beforeDelete = usersSelected.filter((u) => u._id !== userToDelete._id);
    setUsersSelected(beforeDelete);
  };

  //Usuarios que vienen del api
  const [users, setUsers] = useState();
  //Aqui se guardan los Users seleccionados, todos sus datos
  //Incluso el _id
  const [usersSelected, setUsersSelected] = useState([]);
  //Resultados de la busqueda u orden, luego se imprimen
  //en pantalla
  const [results, setResults] = useState([]);
  const [title, changeTitle] = useState({ field: "", check: null });
  const [description, changeDescription] = useState({ field: "", check: null });
  const [points, changePoints] = useState({ field: "", check: null });

  return (
    <>
      <Header />

      <MainTitleContainer>
        <MainTitle>Crear Pregunta</MainTitle>
        <MainTitleIcon to="/communities/community-posts">
          <BsX />
        </MainTitleIcon>
      </MainTitleContainer>
      <LineTitle>
        <hr />
      </LineTitle>

      <PageContainer>
        <PostTitle>¿En que deseas ayuda?</PostTitle>
        <Input
          state={title}
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
        <InputArea
          state={description}
          changeState={changeDescription}
          inputType="text"
          label="Descripcion"
          textPlaceholder="Ingresa aquí una breve descripción de tu problema..."
          inputName="descripcion"
          errorText="La descripción debe poseer de 10 a 1300 caracteres."
          inputParameters={parameters.description}
        />

        <AddContainer>
          <AddSecondaryContainer href="#">
            <BsImages /> Añadir imagenes
          </AddSecondaryContainer>
          <AddSecondaryContainer href="#">
            <BsFolder2Open /> Añadir archivo
          </AddSecondaryContainer>
        </AddContainer>

        <LineTitle>
          <hr />
        </LineTitle>

        <HelpersText>Escoge a quienes quisieras que te ayuden <strong>solo si es necesario</strong> y si lo hacen no dudes en invitarles un cafecito 🙌 ☕</HelpersText>
        <AddHelperContainerTitle>
          Helpers
          <SelectedUsersStyle>
            {usersSelected?.map((u) => (
              <UserFoto
                key={u._id}
                user={u}
                userPhoto={u.photo}
                userPoints={u.points}
                selectUser={selectUser}
                selected={true}
                deleteUserSelected={deleteUserSelected}
              />
            ))}
          </SelectedUsersStyle>
        </AddHelperContainerTitle>

        <HelpersMainContainer>
          <GUsers
            setResults={setResults}
            results={results}
            users={users}
          ></GUsers>

          <HelpersContainer>
            {results?.map((u) => (
              <UserFoto
                key={u._id}
                user={u}
                userPhoto={u.photo}
                alt={u.fullname}
                userPoints={u.points}
                selectUser={selectUser}
              />
            ))}
          </HelpersContainer>
        </HelpersMainContainer>

        <LineTitle>
          <hr />
        </LineTitle>

        <OfferText>¿Que tan difícil consideras tu problema?</OfferText>
        <OfferMainContainer>
          <OfferTitle>OFRECER</OfferTitle>
          <OfferPointsContainer>
            <InputNumber
              state={points}
              changeState={changePoints}
              inputType="number"
              label="Puntos"
              textPlaceholder="POF"
              inputName="puntos"
              errorText="Debe ser > 0"
              inputParameters={parameters.points}
            />
            <OfferPointsText>Puntos POF</OfferPointsText>
          </OfferPointsContainer>
        </OfferMainContainer>

        <LineTitle>
          <hr />
        </LineTitle>

        <LinkTo to="/communities/community-posts">PEDIR AYUDA</LinkTo>
      </PageContainer>

      <Footer />
    </>
  );
}

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

const MainTitleIcon = styled(Link)`
  font-family: var(--principal-font);
  color: var(--boring-color);
  padding-left: 10rem;
  font-size: 3rem;
`;

const LineTitle = styled.div`
  & hr {
    border-top: 0.1rem solid var(--boring-color);
    opacity: 0.3;
  }
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
  gap: 10px;
  margin-top: 15px;
  max-height: 150px;
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

const LinkTo = styled(Link)`
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
  margin: 3rem auto;

  &:hover {
    background-color: var(--secondary-color);
    color: var(--light-color);
  }
`;

const InputStyle = styled.div`
  display: none;
  font-size: 1.8rem;
  color: var(--boring-color);
  padding: 1rem;
  @media (min-width: 768px) {
    display: flex;

    gap: 1rem;
  }
`;

const SelectedUsersStyle = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export default HelpPost;
