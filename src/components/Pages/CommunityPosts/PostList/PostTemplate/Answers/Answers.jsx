/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { GrLike } from 'react-icons/gr'; // GrDislike
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
    font-size: var(--secondarey-font-size);
    line-height: 18px;
    color: rgba(0, 0, 0, 0.55);
  }
`;

const MoreAnswersList = styled.div`
  max-height: 60vh;
  overflow: scroll;
  overflow-x: hidden;

  animation-duration: 3s;
  // animation-name: slidein;
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
    padding-bottom: 10px;
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

const ValidatedMessage = styled.div`
  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: normal;
  font-size: 1.7rem;
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

const MiniAnswerContainer = styled(ValidatedMessage)`
  width: 100%;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const AnswersContainer = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: 625px) {
    display: flex;
    align-items: center;
    margin: 20px;
    padding: 10px;
    border: 1px solid #79777052;
    // max-height: 60vh;
    border-radius: 20px;
  }
`;

const PaymentCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
function Answers({ idPost, postUser, postPoints }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (stateUser) => stateUser.currentUserOTokencito
  );
  const [viewMore, setViewMore] = useState(true);

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

  // useEffect(() => {}, [liked]);

  const datosAnswer = () => {
    setViewMore(!viewMore);
  };

  const handleOnclick = async (e) => {
    if (!e.likes.includes(currentUser.username)) {
      e.likes.push(currentUser.username);
      await dispatch(action.likedAnswer(e._id, { likes: e.likes }));
    } else if (e.likes.includes(currentUser.username)) {
      const i = e.likes.indexOf(currentUser.username);
      e.likes.splice(i, 1);
      await dispatch(action.likedAnswer(e._id, { likes: e.likes }));
    }
    // console.log('like', e);
  };

  return (
    <AnswersContainer>
      {answers.length === 0 ? null : (
        <MiniAnswerContainer>
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
                <span>Ver todas las respuestas</span>
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
                    postPoints={postPoints}
                  />
                  <SupportAnswer onClick={() => handleOnclick(e)}>
                    Apoyo {e.likes?.length} <GrLike />
                  </SupportAnswer>
                </div>
              ))}
            </MoreAnswersList>
          ) : null}
        </MiniAnswerContainer>
      )}
    </AnswersContainer>
  );
}

export default Answers;
