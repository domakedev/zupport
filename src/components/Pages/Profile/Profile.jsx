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
    margin-bottom: 15px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px green;
    width: 500px;

`;

const Description = styled.div `
    border: solid 2px black;
`;

const NameUs = 'Lionel Messi';

const NameUser = () => {
	return (
		<h2>{NameUs}</h2>
	);
};

const description_user = 'Soy un gato, que se cree loro, Sin emoji';


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

		<ContAboutUser>
		<h3>Algo sobre mi</h3>
		<Description>{description_user}</Description>
		</ContAboutUser>

		<Footer/>
		</>
	);
};

export default Profile;


