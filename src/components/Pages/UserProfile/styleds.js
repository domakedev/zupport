import styled, { css } from 'styled-components';

const MainContainer = styled.div`
  min-height: 100vh;
`;

const UserPhotoContainer = styled.div`
  width: 131px;
  height: 131px;
  margin: 0 auto;
  margin-top: 28px;
`;

const NameUser = styled.div`
  background: #efefef;
  border-radius: 3px;
  margin: 0 auto;
  width: fit-content;
  padding: 0 30px;
  & p {
    text-align: center;
    margin-top: 13px;
    font-family: var(--principal-font);
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 33px;
    padding-top: 11px;
    padding-bottom: 11px;
  }
`;

const DataCards = styled.div`
  margin-top: 58px;
  margin-bottom: 58px;
  display: flex;
  justify-content: space-between;
  gap: 37px;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const MyDataCard = styled.div`
  background: #efefef;
  border-radius: 3px;
  margin: 0 auto;
  width: 360px;
  padding: 17px;
  min-height: 200px;
  & > p {
    width: 100%;
    text-align: left;
    font-family: var(--principal-font);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
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

const StatBox = styled.div`
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
`;

const IndividualStatContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`;

const StatSocial = styled.div`
  cursor: pointer;
  & img {
    border-radius: 50%;
    width: 65px;
    height: 65px;
  }
`;

const AboutMe = styled.p`
  background: white;
  border-radius: 3px;
  margin: 0 auto;
  width: fit-content;
  padding: 11px 13px;
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

const ContainerCrown = styled('div')(
  () => css`
    position: relative;
    border-radius: 50%;
    .icon-crow {
      height: 60px;
      width: 60px;
      left: 3px;
      top: -2px;
      bottom: 28px;
      stroke-width: 1rem;
      stroke: var(--dark-color);
      position: absolute;
      z-index: 2;
    }
  `
);

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
  ContainerCrown,
};
