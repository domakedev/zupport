import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Actions Redux
import WelcomeLogin from './LoginSlice/WelcomeLogin';
import InputsLogin from './LoginSlice/InputsLogin';
import BtnRss from '../../Layout/Inputs/InputSocialMediaButton';
import SeparatorLine from './LoginSlice/SeparatorLine';

// Import layouts
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Loading from '../../Layout/Loading/Loading';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  text-align: center;
  padding: 3rem 0;
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
const LinkTo = styled(Link)`
  text-decoration: none;
  color: var(--secondary-color);
  /* font-size: 1.6rem; */
`;

const SuperContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

const AlertAuth = styled('p')(
  () => css`
    font-family: var(--secondary-font);
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 20px;
    color: var(--alert-color);
  `
);

function Login() {
  const errorAuth = useSelector((state) => state.errorLogin);
  const spinning = useSelector((state) => state.spinningLoading);
  return (
    <SuperContainer>
      <Header />

      <FormContainer>
        <FormLogin>
          <WelcomeLogin />

          <InputsLogin />
          {errorAuth ? <AlertAuth>Error al iniciar sesión</AlertAuth> : null}

          {spinning ? <Loading /> : null}

          <SeparatorLine />
          <BtnRss />

          <OptionRegister>
            ¿No tienes una cuenta?
            <LinkTo to="/register"> Regístrate aquí</LinkTo>
          </OptionRegister>
        </FormLogin>
      </FormContainer>

      <Footer />
    </SuperContainer>
  );
}

export default Login;
