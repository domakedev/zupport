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
`;

const SupportAnswer = styled(ValidatedMessage)`
  width: 58%;
  margin: 0 auto;
  text-align: left;
  cursor: pointer;
`;

const AnswersContainer = styled.div`
  margin-bottom: 30px;
  overflow-x: hidden;
`;

// // FakeData
// const FakeData = [
//   {
//     field: 'Respuesta validada mock',
//     check: null,
//     validated: true,
//   },
//   {
//     field: 'Respuesta 1 no validada mock',
//     check: null,
//     validated: false,
//   },
//   {
//     field: 'Respuesta 2 no validada mock',
//     check: null,
//     validated: false,
//   },
//   {
//     field: 'Respuesta 3 no validada mock',
//     check: null,
//     validated: false,
//   },
//   {
//     field: 'Respuesta 4 no validada mock',
//     check: null,
//     validated: false,
//   },
//   {
//     field: 'Respuesta 5 no validada mock',
//     check: null,
//     validated: false,
//   },
//   {
//     field: 'Respuesta 6 no validada mock',
//     check: null,
//     validated: false,
//   },
//   {
//     field: 'Respuesta 7 no validada mock',
//     check: null,
//     validated: false,
//   },
//   {
//     field: 'Respuesta 8 no validada mock',
//     check: null,
//     validated: false,
//   },
//   {
//     field: 'Respuesta 10 no validada mock',
//     check: null,
//     validated: false,
//   },
//   {
//     field: 'Respuesta 11 no validada mock',
//     check: null,
//     validated: false,
//   },
// ];
// console.log(FakeData);

function Answers() {
  const [viewMore, setViewMore] = useState(false);
  // const answers = useSelector((state) => state.answers);
  const fakeDataValidated = useSelector((state) => state.answersValidated);
  const fakeDataNoValidated = useSelector((state) => state.answersNoValidated);
  const dispatch = useDispatch();

  // const [fakeDataValidated, setV] = useState([]);
  // const [fakeDataNoValidated, setDataNoValidated] = useState([]);

  const supportAnswer = (comment) => {
    // eslint-disable-next-line
    console.log("Me gusta :", comment);
  };
  useEffect(async () => {
    // id del post para tener
    const idPost = '61e09c7fb35c71052690ec67';
    dispatch(accions.getAllAnswers(idPost));
    // const answersValidated = await answers.filter((e) => e.resolved === true);
    // const answersNoValidated = await answers.filter((e) => e.resolved !== true);
    // setDataNoValidated(answersNoValidated);
    // // setV(answersValidated);
    // console.log('answersValidatedg', answersValidated);
    // console.log('answersNoValidated', answersNoValidated);
  }, []);
  return (
    <AnswersContainer>
      {/* Answers checked co */}
      {fakeDataValidated.map((e) => (
        <div key={new Date()}>
          <Answer state={e} stateGeneral={fakeDataValidated} />
          <ValidatedMessage>
            Esta respuesta fue util y soluciono el problema 🎉 🌟
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

      {/* Answers no checked */}
      {viewMore ? (
        <MoreAnswersList>
          {fakeDataNoValidated.map((e) => (
            <div key={new Date()}>
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
