import React from "react";
import styled from "styled-components";

//Components
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import NewCommunitie from "./NewCommunitie/NewCommunitie";
import GOFData from "./GOFData/GOFData";
import CommunitieAddCard from "../../Layout/CommunitieAddCard/CommunitieAddCard";

//General Styled
import { SubTitle, TitleOrange } from "../../../css/generalStyled";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* margin: 30px auto; */
  margin-top: 30px;
  flex-grow: 1;
`;

const Comunidades = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

`

const FakeData = [
  {
    title: "Javascript",
    users: 11000,
    cheks: 232,
    image:
      "https://midu.dev/images/wallpapers/javascript-grande-horizontal-4k.png",
  },
  {
    title: "NodeJs",
    users: 700,
    cheks: 87,
    image:
      "https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg",
  },
  {
    title: "NodeJs",
    users: 700,
    cheks: 87,
    image:
      "https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg",
  },
  {
    title: "NodeJs",
    users: 700,
    cheks: 87,
    image:
      "https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg",
  },
  {
    title: "NodeJs",
    users: 700,
    cheks: 87,
    image:
      "https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg",
  },
  {
    title: "NodeJs",
    users: 700,
    cheks: 87,
    image:
      "https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg",
  },
  {
    title: "NodeJs",
    users: 700,
    cheks: 87,
    image:
      "https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg",
  },
  {
    title: "NodeJs",
    users: 700,
    cheks: 87,
    image:
      "https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg",
  },
];

const Communities = () => {
  return (
    <PageContainer>
      <Header />

      <Container>
        <TitleOrange>¿Qué te interesa ahora?</TitleOrange>
        <SubTitle>Sé parte de una comunidad o crea una.</SubTitle>

        <NewCommunitie />

        <GOFData />
        <hr style={{ marginTop: "100px" }} />

        <Comunidades>
          {FakeData.map((e, ind) => {
            return (
              <CommunitieAddCard
                key={ind}
                image={e.image}
                users={e.users}
                checks={e.cheks}
                title={e.title}
              />
            );
          })}
        </Comunidades>

      </Container>

      <Footer />
    </PageContainer>
  );
};

export default Communities;
