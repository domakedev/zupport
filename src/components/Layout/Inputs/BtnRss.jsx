import styled from "styled-components";
import iconGoogle from "../../../images/Icon/flat-icon-google-login.svg"
import iconFacebook from "../../../images/Icon/flat-icon-facebook-login.svg"
import iconGithub from "../../../images/Icon/flat-icon-gitgub-login.svg"

const ContainerRRSS = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0 2rem 0;
  @media screen and (min-width: 768px) {
    display:grid;
    grid-template-columns: repeat(3,1fr);    
  }
`;

const ContainerBtn= styled.div`
  border:2px solid var(--boring-color);
  border-radius: 3px;
  padding: 1rem;  
  display: flex;
  @media screen and (min-width: 768px) {    
    justify-content: center;
  }
  &:hover{    
    border:2px solid rgba(41, 172, 224, 0.501);;
  }
`;
  const BtnGoogle = styled.input`
  font-family: var(--secondary-font);
  font-size: var(--secondarey-font-size);
  font-weight: bold;
  color:var(--dark-color);
  border:0;
  background: #FFFFFF;
  margin-left: 50px;
  @media screen and (min-width: 768px) {    
  margin-left: 1rem;
  }
`; 
const Iconbtn = styled.img`
  height: 25px;
  margin-left: 50px;
  @media screen and (min-width: 768px) {    
  margin-left: 0;
  }
`;

const ContainerBtnFacebook = styled(ContainerBtn)`
background: var(--secondary-color);
border:2px solid var(--secondary-color);
`;
const IconbtnFacebook = styled(Iconbtn)`
`;
const BtnFacebook = styled(BtnGoogle)`
color:var(--light-color);
background: var(--secondary-color);
`;
const ContainerBtnGitHub = styled(ContainerBtn)`
background: var(--dark-color);
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