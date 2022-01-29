/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { GrLike } from 'react-icons/gr';
import Answer from './Answer/Answer';
import accions from '../../../../../../store/action';
import Payment from '../../../../Payment/Payment';

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
  @media screen and (min-width: 1024px) {
    @keyframes slidein {
      from {
        margin-left: 50%;
        width: 50%;
      }

      to {
        margin-left: 0%;
        width: 100%;
      }
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
  margin-left: 94px;
`;

const AnswersContainer = styled.div`
  margin-bottom: 30px;
`;

const PaymentCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
function Answers({ idPost }) {
  const [viewMore, setViewMore] = useState(false);
  const [resp, setResp] = useState([]);
  // const [answer, setAnswer] = useState([]);
  // const [dataValidated, setDataValidated] = useState([]);
  // const [dataNoValidated, setDataNoValidated] = useState([]);

  const dispatch = useDispatch();

  const supportAnswer = () => {
    // console.log('Me gusta todo :', comment);
  };
  // useEffect(async () => {
  //   // const idPost = '61e09c7fb35c71052690ec67';
  //   dispatch(accions.getAllAnswers(idPost));
  // }, []);
  const answers = useSelector((state) => state.answers);
  // const dataNoValidatedd = useSelector((state) =>
  //   state.answers.filter((e) => !e.resolved)
  // );
  // const dataValidated = useSelector((state) =>
  //   state.answers.filter((e) => e.resolved)
  // );
  // const dataNoValidated = useSelector((state) =>
  //   state.answers.filter((e) => !e.resolved)
  // );
  // should
  const dataValidated = resp.filter((e) => e.resolved)
  const dataNoValidated = resp.filter((e) => !e.resolved)

  // useEffect(() => {
  //   setDataValidated(dataValidatedInit);
  //   setDataNoValidated(dataNoValidatedInit);
  // }, []);

   useEffect(() => { 
     let arr = []
    if(answers.length !== 0){
      for(let i= 0; i< answers.length; i++){
        const resp = answers[i].filter((e)=>e.post === idPost)
        arr.push(...resp);

      }
      setResp(arr)
    }
    console.log('resp filtradas',arr);
  }, [answers]);
  console.log('answer',answers);
  const datosAnswer = () => {
    setViewMore(!viewMore);    
     dispatch(accions.getAllAnswers(idPost));   
  };

  return (
    <AnswersContainer>
      {/* Answers checked co */}
      {dataValidated.map((e) => (
        <div key={e._id}>
          <Answer state={e} stateGeneral={dataValidated} idPost={idPost} />
          <PaymentCont>
            <ValidatedMessage>
              🎉 🌟 Esta respuesta fue útil, te animas a invitarle un cafecito?
            </ValidatedMessage>
            <Payment />
          </PaymentCont>
        </div>
      ))}

      <MoreAnswers onClick={datosAnswer}>
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
              <Answer state={e} idPost={idPost} />
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
