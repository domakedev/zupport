import React, { useState } from "react";
import Answer from "./Answer/Answer";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { GrLike } from "react-icons/gr";

//Styleds
const MoreAnswers = styled.button`
  border: none;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin-top: 30px;
  margin-bottom: 20px;
  svg {
    color: rgba(0, 0, 0, 0.55);
    font-size: 15px;
  }

  span {
    font-family: Archivo Narrow;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.55);
  }
`;

const MoreAnswersList = styled.div`
  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;

  animation-duration: 3s;
  animation-name: slidein;
  animation-direction: alternate;

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`;

const ValidatedMessage = styled.p`
  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 18px;
  text-align: center;
  color: rgba(0, 0, 0, 0.55);
`;

const  SupportAnswer = styled(ValidatedMessage)`
  width: 58%;
  margin: 0 auto;
  text-align: left;
  cursor: pointer;
`;

//FakeData
const FakeData = [
  {
    field: "Respuesta validada mock",
    check: null,
    validated: true,
  },
  {
    field: "Respuesta 1 no validada mock",
    check: null,
    validated: false,
  },
  {
    field: "Respuesta 2 no validada mock",
    check: null,
    validated: false,
  },
  {
    field: "Respuesta 3 no validada mock",
    check: null,
    validated: false,
  },
  {
    field: "Respuesta 4 no validada mock",
    check: null,
    validated: false,
  },
  {
    field: "Respuesta 5 no validada mock",
    check: null,
    validated: false,
  },
  {
    field: "Respuesta 6 no validada mock",
    check: null,
    validated: false,
  },
  {
    field: "Respuesta 7 no validada mock",
    check: null,
    validated: false,
  },
  {
    field: "Respuesta 8 no validada mock",
    check: null,
    validated: false,
  },
  {
    field: "Respuesta 10 no validada mock",
    check: null,
    validated: false,
  },
  {
    field: "Respuesta 11 no validada mock",
    check: null,
    validated: false,
  },
];

export const Answers = () => {
  const [viewMore, setViewMore] = useState(false);

  const answersValidated = FakeData.filter((e, i) => e.validated === true);

  const answersNoValidated = FakeData.filter((e, i) => e.validated !== true);

  const [fakeDataValidated, setV] = useState(answersValidated);
  const [fakeDataNoValidated] = useState(answersNoValidated);

  const supportAnswer = (comment) =>{
    //console.log("Me gusta:", comment);
  }

  return (
    <div style={{ marginBottom: "30px" }}>
      {/* Answers checked */}
      {fakeDataValidated.map((e, i) => (
        <div key={i}>
          <Answer state={e} setV={setV} stateGeneral={fakeDataValidated} />
          <ValidatedMessage>
            Esta respuesta fue util y soluciono el problema 🎉 🌟
          </ValidatedMessage>
        </div>
      ))}

      <MoreAnswers onClick={() => setViewMore(!viewMore)}>
        <FaAngleDown /> <span>Ver más respuestas</span>
      </MoreAnswers>

      {/* Answers no checked */}
      {viewMore ? (
        <MoreAnswersList>
          {fakeDataNoValidated.map((e, i) => (
            <div key={i}>
              <Answer  state={e} />
              <SupportAnswer
                onClick={()=>(
                  supportAnswer(e.field)
                )}>
                Apoyar <GrLike/>
              </SupportAnswer>
            </div>
          ))}
        </MoreAnswersList>
      ) : null}
    </div>
  );
};
