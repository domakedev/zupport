import React from 'react';

import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import imgProfile from "../../../images/ProfileP.png";
import styled from "styled-components";


const ImgProfile = styled.div `
    margin: auto;
    margin-top: 10px;
    //border: solid 2px green; 
    width: 220px;
    height: 220px;
     
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        width: 200px;
	height: 200px;
	border: 8px solid green;
	border-radius: 50%;
    }
`;

const ContNameUser = styled.div `
    margin: auto;
    margin-top: 10px;
    margin-bottom: 100px;
    background-color: gray;
    width: 250px;
    height: 40px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContAboutUser = styled.div `
    margin: auto;
    margin-bottom: 100px;
    background-color: #cbfbfa;
    width: 500px;
    border-radius: 5px;

`;

const ContNetworks = styled.div `
    margin: auto;
    margin-bottom: 100px;
    width: 500px;
    border-radius: 5px;
    
    

`;

const ContSocialNetworks = styled.div `
   
   margin-bottom: 10px;
   margin: 5px;
   
   background-color: #cbfbfa;
   width: 200px;
   border-radius: 5px;
`;

const ContDivNetwork = styled.div `
   width: 400px;
   
   & span {
      float: right;
      border: solid 2px red;
   }

`;

const Description = styled.div `
    
    margin: 10px;
    padding: 10px;
    font-size: 15px;
    
    
`;

const About_text = styled.div `
    margin: auto;
    margin-bottom: 10px;
    width: 500px;
    padding: 5px;
    font-size: 17px;
`;

const NameUs = 'Lionel Messi';

const NameUser = () => {
	return (
		<h2>{NameUs}</h2>
	);
};



const description_user = 'Soy un gato, que se cree loro, Sin emoji';

const name_social_networks = ['GitHub', '-Seleccionar--'];


const Profile= () => {
	return (
		<>
		<Header/>

		<ImgProfile>
		    <img src={imgProfile} alt="Main image Profile" />
		</ImgProfile>

		<ContNameUser>
		    <NameUser/>
		</ContNameUser>

		
		<About_text>Algo sobre mi</About_text>
		<ContAboutUser>
		<Description>{description_user}</Description>
		</ContAboutUser>

		<About_text>Mis Redes</About_text>
		<ContNetworks>

		<ContDivNetwork>
		<ContSocialNetworks>
		<Description>{name_social_networks[0]}</Description>
		</ContSocialNetworks>
		
		</ContDivNetwork>

		<ContSocialNetworks>
		<Description>{name_social_networks[1]}</Description>
		</ContSocialNetworks>

		</ContNetworks>

		<Footer/>
		</>
	)
};

export default Profile;


