import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AddPhotoIcon from '../../../images/Icon/AddPhotoIcon.svg';

const MainContainer = styled.div`
  min-height: 100vh;
`;

const UserPhotoContainer = styled.div`
  width: 131px;
  height: 131px;
  margin: 0 auto;
  margin-top: 28px;
  position: relative;
  & svg {
    position: absolute;
    bottom: 0px;
    right: 0px;
    cursor: pointer;
  }
  & input[id='newPhoto'] {
    display: none;
  }
  & label[for='newPhoto'] {
    background-image: url(${AddPhotoIcon});
    width: 50px;
    height: 50px;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
`;

const NameUserContainer = styled.div`
  width: fit-content;
  position: relative;
  margin: 0 auto;
  & svg {
    position: absolute;
    right: -10px;
    top: -10px;
    cursor: pointer;
  }
`;

const NameUser = styled.input`
  display: block;
  background: rgba(41, 171, 224, 0.08);
  border: none;
  border-radius: 3px;
  margin: 0 auto;
  width: fit-content;
  padding: 0 30px;

  text-align: center;
  margin-top: 13px;
  font-family: var(--principal-font);
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 33px;
  padding-top: 11px;
  padding-bottom: 11px;
`;

const DataCards = styled.div`
  margin-top: 58px;
  display: flex;
  justify-content: space-between;
  gap: 37px;
  flex-wrap: wrap;
`;

const MyDataCard = styled.div`
  background: #efefef;
  border-radius: 3px;
  margin: 0 auto;
  width: 360px;
  padding: 17px;
  position: relative;
  align-self: start;
  margin-bottom: 30px;
  & > p:first-child {
    width: 100%;
    text-align: left;
    font-family: var(--principal-font);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
  }
  & svg {
    position: absolute;
    top: -10px;
    right: -10px;
    cursor: pointer;
  }
`;

const StatName = styled.div`
  background: white;
  border-radius: 3px;
  margin: 0 auto;
  width: fit-content;
  padding: 4px 23px;
  margin-top: 13px;
  & p {
    font-family: var(--secondary-font);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
  }
`;

const StatBox = styled.p`
  background: #efefef;
  border-radius: 3px;
  width: 66px;
  height: 63px;
  text-align: center;
  background-color: white;
  padding-top: 5px;

  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: bold;
  font-size: var(--principal-font-size);
`;

const IndividualStat = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 21px;
  position: relative;
  width: 90%;
  text-align: left;
  & p {
    width: 100%;
    display: block;
    font-family: var(--secondary-font);
    font-style: normal;
    font-weight: normal;
    font-size: var(--secondarey-font-size);
    line-height: 24px;
  }
  & a {
    width: 100%;
    font-family: var(--secondary-font);
    font-style: normal;
    font-weight: normal;
    font-size: var(--secondarey-font-size);
    line-height: 24px;
    color: #939393;

    padding: 12px 20px;
    background: rgba(41, 171, 224, 0.08);
  }
  & svg {
    position: absolute;
    top: 0px;
    right: -10px;
    cursor: pointer;
    width: 40px;
    height: 40px;
  }
`;

const IndividualStatContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const StatSocial = styled.div`
  cursor: pointer;
  & img {
    border-radius: 50%;
    width: 65px;
    height: 65px;
  }
`;

const AboutMe = styled.textarea`
  background: white;
  border-radius: 3px;
  min-width: -webkit-fill-available;
  padding: 11px 13px;
  margin-top: 13px;

  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: left;
`;

const AddNewSN = styled.div`
  position: relative;
  & select[name='newSN'],
  input[id='sn-url'] {
    background: rgba(41, 171, 224, 0.08);
    border-radius: 3px;
    border: none;
    padding: 12px 20px;
    color: #545454;
    font-family: var(--secondary-font);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    margin: 5px;
  }
`;

const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingBlockContainer = styled.div`
  min-width: 360px;
  height: 170px;
  background: #efefef;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlertMessage = styled.div`
  text-align: center;
  font-family: var(--secondary-font);
  font-size: var(--secondarey-font-size);
  min-height: calc(100vh - 312px);
  padding-top: 150px;
`;

const ErrorWritingSn = styled.p.attrs({ id: 'errorSN' })`
  text-align: center;
  font-family: var(--secondary-font);
  font-size: var(--secondarey-font-size);
  background-color: var(--alert-color);
  color: white;
  width: 100%;
  height: fit-content;
  padding: 12px 23px;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: white;
  cursor: pointer;

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

export {
  MainContainer,
  UserPhotoContainer,
  NameUser,
  DataCards,
  MyDataCard,
  StatName,
  StatBox,
  IndividualStat,
  IndividualStatContainer,
  StatSocial,
  AboutMe,
  NameUserContainer,
  AddNewSN,
  LoadingContainer,
  AlertMessage,
  LoadingBlockContainer,
  ErrorWritingSn,
  LinkTo,
};
