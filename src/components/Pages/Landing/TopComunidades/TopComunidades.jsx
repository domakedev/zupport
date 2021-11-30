import React from "react";
import styled from "styled-components";

//Componentes
import CardComunidad from "../../../../components/Layout/CardComunidad/CardComunidad";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`;

const Titulo = styled.h2`
  font-size: 3.6rem;
  text-align: center;
  margin-top: 70px;
  padding-right: 15px;
  padding-left: 15px;

  font-family: var(--principal-font);
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 80%;

  margin: 20px auto 0px auto;

  border-radius: 3px;
`;

const Button = styled.button`
  display: block;
  border: none;

  padding: 13px 22px;
  margin: 0 auto;

  background-color: var(--secondary-color);
  color: white;
  border-radius: 3px;

  font-weight: bold;
  font-size: 1.8rem;

  font-family: var(--secondary-font);
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

const fakeData = [
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
];

const TopComunidades = () => {
  return (
    <Container>
      <Titulo>TOP COMUNIDADES</Titulo>

      <Cards>
        {fakeData.map((card, index) => (
          <CardComunidad
            key={index}
            users={card.users}
            checks={card.cheks}
            title={card.title}
            image={card.image}
          />
        ))}
      </Cards>

      <Button>
        <Link>VER MAS COMUNIDADES</Link>
      </Button>
    </Container>
  );
};

export default TopComunidades;
