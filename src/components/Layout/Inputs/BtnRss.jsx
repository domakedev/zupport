import styled from "styled-components";
import iconGoogle from "../../../images/Icon/flat-icon-google-login.svg"
import iconFacebook from "../../../images/Icon/flat-icon-facebook-login.svg"
import iconGithub from "../../../images/Icon/flat-icon-gitgub-login.svg"

const ContainerRRSS = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0 2rem 0;
`;

const ContainerBtn= styled.div`
  border:2px solid var(--boring-color);
  border-radius: 3px;
  padding: 1rem;  
  display: flex;
`;
  const BtnGoogle = styled.input`
  font-family: var(--secondary-font);
  font-size: var(--secondarey-font-size);
  font-weight: bold;
  color:var(--dark-color);
  border:0;
  background: #FFFFFF;
  justify-self: start;
  margin-left: 20px;
`; 
const Iconbtn = styled.img`
  height: 25px;
  margin-left: 50px;
`;

const ContainerBtnFacebook = styled(ContainerBtn)`
background: var(--secondary-color);
@media (min-width: 768px) {}
`;
const IconbtnFacebook = styled(Iconbtn)`
`;
const BtnFacebook = styled(BtnGoogle)`
color:var(--light-color);
background: var(--secondary-color);
`;
const ContainerBtnGitHub = styled(ContainerBtn)`
background: var(--dark-color);
@media (min-width: 768px) {}
`;
const IconbtnGithub = styled(Iconbtn)`
`;
const BtnGithub = styled(BtnFacebook)`
background: var(--dark-color);
`;
export const BtnRss = () => (
  <ContainerRRSS>
    <ContainerBtn>
      <Iconbtn src={iconGoogle} alt="icon-google"/>
      <BtnGoogle type= "button" value = "GOOGLE"/>
    </ContainerBtn>
    <ContainerBtnFacebook>
      <IconbtnFacebook src={iconFacebook} alt="icon-google"/>
      <BtnFacebook type= "button" value = "FACEBOOK"/>
    </ContainerBtnFacebook>
    <ContainerBtnGitHub>
      <IconbtnGithub src={iconGithub} alt="icon-google"/>
      <BtnGithub type= "button" value = "GITHUB"/>            
    </ContainerBtnGitHub>
  </ContainerRRSS>
);