import React from 'react';

import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import imgProfile from "../../../images/ProfileP.png";
import styled from "styled-components";


const ImgProfile = styled.div `
    margin: auto;
    margin-top: 20px;
    width: 300px;
    height: 300px;
     
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





function Profile() {
	return (
		<>
		<Header/>
		<ImgProfile>
		    <img src={imgProfile} alt="Main image Profile" />
		</ImgProfile>
		<Footer/>
		</>
	);
};

export default Profile;


