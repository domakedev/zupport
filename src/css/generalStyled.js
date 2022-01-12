import styled from 'styled-components';

export const TitleOrange = styled.h1`
  font-family: var(--principal-font);
  font-style: normal;
  font-weight: normal;
  font-size: 3.6rem;
  line-height: 45px;
  color: var(--warning-color);
  text-align: center;
`;

export const SubTitle = styled.p`
  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: normal;
  font-size: var(--secondarey-font-size);
  line-height: 24px;
  color: #3e3f3a;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Label = styled.label`
  display: block;
  font-family: var(--secondary-font);
  font-size: 1.8rem;
  margin-top: 20px;
`;
