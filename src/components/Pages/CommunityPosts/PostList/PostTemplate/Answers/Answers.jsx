/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { GrLike } from 'react-icons/gr';
import Answer from './Answer/Answer';
import action from '../../../../../../store/action';
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
function Answers({ idPost, postUser }) {
  const dispatch = useDispatch();

  const [viewMore, setViewMore] = useState(false);
  const [like, setLike] = useState(true);
  // const [textLike, setTextLike] = useState(true);

  const dataValidated = useSelector((state) =>
    state.answers.filter((e) => e.resolved)
  );
  const dataNoValidated = useSelector((state) =>
    state.answers.filter((e) => !e.resolved)
  );
  const answers = useSelector((state) => state.answers);

  // console.log(idPost);
  useEffect(async () => {
    dispatch(action.getAllAnswers(idPost));
  }, [idPost]);

  const datosAnswer = () => {
    setViewMore(!viewMore);
  };

  // Dar like solo una vez
  const supportAnswer = (e) => {
    // console.log('Me gusta todo :', e);
    // like
    if (like) {
      // setTextLike(e.likes + 1);
      dispatch(
        action.editAnswerPut(
          e._id,
          {
            likes: e.likes + 1,
          },
          idPost
        )
      );
    } else {
      // setTextLike(e.likes - 1);
      dispatch(
        action.editAnswerPut(
          e._id,
          {
            likes: e.likes - 1,
          },
          idPost
        )
      );
    }
    setLike(!like);
  };
  // console.log(like);
  return (
    <AnswersContainer>
      {answers.length === 0 ? null : (
        <div>
          {dataValidated.map((e) => (
            <div key={e._id}>
              <Answer
                state={e}
                stateGeneral={dataValidated}
                idPost={idPost}
                postUser={postUser}
                validatedAnswer={dataValidated}
              />
              <PaymentCont>
                <ValidatedMessage>
                  🎉 🌟 Esta respuesta fue útil, te animas a invitarle un
                  cafecito?
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
                  <Answer
                    state={e}
                    idPost={idPost}
                    postUser={postUser}
                    validatedAnswer={dataValidated}
                  />
                  <SupportAnswer onClick={() => supportAnswer(e)}>
                    Apoyar {e.likes} <GrLike />
                  </SupportAnswer>
                </div>
              ))}
            </MoreAnswersList>
          ) : null}
        </div>
      )}
    </AnswersContainer>
  );
}

export default Answers;
