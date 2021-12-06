import React from "react";
import styled from "styled-components";

const Card = styled.div`
  margin: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: 315px;

  font-family: var(--secondary-font);

`;

const CardImage = styled.img`
 width: 200px;
  height: 150px;
`

const CardDescription = styled.p`
 font-size: 1.8rem;
  text-align: center;
`

const Caracteristica = ({image, description}) => {
  return (
    <Card>
      <CardImage src={image} alt="Caracteristica de la plataforma" />
      <CardDescription>
        {description}
      </CardDescription>
    </Card>
  );
};

export default Caracteristica;
