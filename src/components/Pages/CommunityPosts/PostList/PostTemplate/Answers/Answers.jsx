/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { GrLike } from 'react-icons/gr';
import Answer from './Answer/Answer';
import accions from '../../../../../../store/action';

// Styleds
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
  margin-left: 21px;
`;

const SupportAnswer = styled(ValidatedMessage)`
  width: 58%;
  margin: 0 auto;
  text-align: left;
  cursor: pointer;
  margin-left: 94px;
`;

const AnswersContainer = styled.div`
  margin-bottom: 30px;
`;

function Answers() {
  const [viewMore, setViewMore] = useState(false);
  const dataValidated = useSelector((state) =>
    state.answers.filter((e) => e.resolved)
  );
  const dataNoValidated = useSelector((state) =>
    state.answers.filter((e) => !e.resolved)
  );

  const dispatch = useDispatch();

  const supportAnswer = (comment) => {
    console.log('Me gusta todo :', comment);
  };
  useEffect(async () => {
    const idPost = '61e09c7fb35c71052690ec67';
    dispatch(accions.getAllAnswers(idPost));
  }, []);
  return (
    <AnswersContainer>
      {/* Answers checked co */}
      {dataValidated.map((e) => (
        <div key={e._id}>
          <Answer state={e} stateGeneral={dataValidated} />
          <ValidatedMessage>
            Esta respuesta fue útil y solucionó el problema 🎉 🌟
          </ValidatedMessage>
        </div>
      ))}

      <MoreAnswers onClick={() => setViewMore(!viewMore)}>
        {viewMore ? (
          <>
            <FaAngleUp />
            <span>Ocultar respuestas</span>
          </>
        ) : (
          <>
            <FaAngleDown />
            <span>Ver más respuestas</span>
          </>
        )}
      </MoreAnswers>
      {viewMore ? (
        <MoreAnswersList>
          {dataNoValidated.map((e) => (
            <div key={e._id}>
              <Answer state={e} />
              <SupportAnswer onClick={() => supportAnswer(e.answer)}>
                Apoyar <GrLike />
              </SupportAnswer>
            </div>
          ))}
        </MoreAnswersList>
      ) : null}
    </AnswersContainer>
  );
}

export default Answers;
