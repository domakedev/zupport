import styled from "styled-components";
import { WelcomeLogin } from "./LoginSlice/WelcomeLogin";
import { InputsLogin } from "./LoginSlice/InputsLogin";
import { SocialMediaButton } from "../../Layout/Inputs/InputSocialMediaButton";
import { SeparatorLine } from "./LoginSlice/SeparatorLine";

//Import layouts
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  margin: 2rem 0 3rem 0;
  padding: 0 3rem 0 3rem;

  flex-grow: 1;
`;
const FormLogin = styled.form`
  width: 100%;
  justify-self: center;
  @media (min-width: 768px) {
    width: 100%;
    max-width: 55rem;
    justify-self: center;
  }
`;
const OptionRegister = styled.p`
  font-family: var(--secondary-font);
  color: var(--dark-color);
  font-size: 1.6rem;
  text-align: end;
`;
const LinkRegister = styled.a`
  text-decoration: none;
  color: var(--secondary-color);
  font-size: 1.6rem;
  margin-left: 1rem;
`;

const SuperContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

export const Login = () => (
  <SuperContainer>
    <Header></Header>

    <FormContainer>
      <FormLogin>
        <WelcomeLogin />
        <InputsLogin />
        <SeparatorLine />
        <SocialMediaButton/>
        <OptionRegister>
          ¿No tienes una cuenta? 
          <LinkRegister>Regístrate aquí</LinkRegister>
        </OptionRegister>
      </FormLogin>
    </FormContainer>

    <Footer></Footer>
  </SuperContainer>
);
