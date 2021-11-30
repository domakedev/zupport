import styled from "styled-components";
import { InputsRegister } from "./RegisterSlice/InputsRegister";
import { WelcomeRegister } from "./RegisterSlice/WelcomeRegister";
import { SocialMediaButton } from "../../Layout/Inputs/InputSocialMediaButton";
import { SeparatorLine } from "../Login/LoginSlice/SeparatorLine";

//Import layouts
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

const ContainerRegister = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  margin: 2rem 0 3rem 0;
  padding: 0 3rem 0 3rem;

  flex-grow: 1;

`;
const FormRegister = styled.form`
  width: 100%;
  justify-self: center;
  @media (min-width: 768px) {
    width: 100%;
    max-width: 55rem;
    justify-self: center;
  }
`;

const SuperContainer  = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

export const Register = () => (
  <SuperContainer>
    <Header/>
    
    <ContainerRegister>
      <FormRegister action="">
        <WelcomeRegister />
        <InputsRegister />
        <SeparatorLine />
        <SocialMediaButton />
      </FormRegister>
    </ContainerRegister>

    <Footer/>
  </SuperContainer>
);
