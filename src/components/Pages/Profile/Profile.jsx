import { useState } from 'react';

import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import imgProfile from "../../../images/iron-man.jpg";
import styled from "styled-components";

import './Profile.css';


const ContNetworks = styled.div`
    margin: auto;
    margin-bottom: 100px;
    width: 500px;
    border-radius: 5px;
`;

const ContSocialNetworks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SocialNetworks = styled.div`
    margin-bottom: 10px;
    margin: 5px;
    background-color: #cbfbfa;
    width: 200px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

const Svg = styled.button`
    position: absolute;
    right: 10px;
    border: none;
    background: none;
    cursor: pointer;
    
    :active {
        transform: scale(.9)
    }

`;



const Description = styled.div`
    margin: 10px;
    padding: 10px;
    font-size: 15px;
`;

const NetworsTitle = styled.h2`
    margin: 20px;
    font-family: Fjalla One;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 18px;
`;

const ButtonDeleteNet = styled.button`
    border: none;
    background: none;
    cursor: pointer;

    :active {
        transform: scale(.9)
    }

`;

const ButtonAddNet = styled.button`
    border: none;
    background: none;
    margin-top: 10px;
    width: 60px;
    cursor: pointer;

    :active {
        transform: scale(.9)
    }
    
`;


const NameUs = 'Leonel Messi'.toLocaleUpperCase();


const ImgProfile = () => {
    return (
        <div className="Main__content">
            <div className='ImgProfile__content'>
                <div className="ImgProfile__img">
                    <img src={imgProfile} alt="Main_image" />
                </div>
                <button
                    className="Button__changeImg"
                    onClick={() => { console.log('change image') }}
                >
                    <div className="ImgProfile__changeImg">
                        <svg width="40" height="40" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.275 4.24997H20.75V1.72497C20.75 1.04997 20.2 0.499969 19.525 0.499969H19.4875C18.8 0.499969 18.25 1.04997 18.25 1.72497V4.24997H15.7375C15.0625 4.24997 14.5125 4.79997 14.5 5.47497V5.51247C14.5 6.19997 15.05 6.74997 15.7375 6.74997H18.25V9.26247C18.25 9.93747 18.8 10.5 19.4875 10.4875H19.525C20.2 10.4875 20.75 9.93747 20.75 9.26247V6.74997H23.275C23.95 6.74997 24.5 6.19997 24.5 5.52497V5.47497C24.5 4.79997 23.95 4.24997 23.275 4.24997ZM17 9.26247V7.99997H15.7375C15.075 7.99997 14.45 7.73747 13.975 7.27497C13.5125 6.79997 13.25 6.17497 13.25 5.47497C13.25 5.02497 13.375 4.61247 13.5875 4.24997H3.25C1.875 4.24997 0.75 5.37497 0.75 6.74997V21.75C0.75 23.125 1.875 24.25 3.25 24.25H18.25C19.625 24.25 20.75 23.125 20.75 21.75V11.4C20.375 11.6125 19.95 11.75 19.475 11.75C18.8185 11.7434 18.1909 11.4788 17.7278 11.0134C17.2647 10.548 17.0033 9.91903 17 9.26247ZM16.95 21.75H4.5C4.38393 21.75 4.27015 21.7176 4.17142 21.6566C4.07268 21.5956 3.99289 21.5083 3.94098 21.4045C3.88907 21.3007 3.8671 21.1844 3.87753 21.0688C3.88795 20.9532 3.93036 20.8428 4 20.75L6.475 17.4625C6.7375 17.1125 7.25 17.1375 7.5 17.4875L9.5 20.5L12.7625 16.15C13.0125 15.825 13.5 15.8125 13.75 16.1375L17.4375 20.7375C17.7625 21.15 17.475 21.75 16.95 21.75Z" fill="#EFEFEF" />
                        </svg>

                    </div>
                </button>
            </div>
        </div>

    );
}

const ContNameUser = () => {

    const [nameUser, setNameUser] = useState('Leonel Messi');

    return (
        <div className="ContNameUser">

            <button
                className="ContNameUser__ButtonLevel"
                onClick={() => {
                    alert('eres un Helper Nivel 3')
                }}
            >
                <div className="ContNameUser__Level">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="3" fill="white" />
                        <rect x="8.48438" y="10.7935" width="6.06061" height="22.2222" fill="#3E3F3A" />
                        <rect x="16.9688" y="5.71428" width="6.06061" height="22.2222" fill="#3E3F3A" />
                        <rect x="25.4541" y="10.7935" width="6.06061" height="22.2222" fill="#3E3F3A" />
                    </svg>

                </div>
            </button>

            <h2 className="ContNameUser__NameUs">
                {nameUser.toLocaleUpperCase()}
            </h2>

            <button
                className="ContNameUser__ButtonEditName"
                onClick={() => {
                    const NameUser = prompt('Dime tu Nombre');
                    console.log('este es tu nombre: ', NameUser)
                    setNameUser(NameUser);
                }}
            >
                <div className="ContNameUser__EditName">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.51651 19.3334L1.93318 26.1667C1.87856 26.4165 1.88043 26.6753 1.93866 26.9243C1.99688 27.1733 2.11 27.4061 2.26973 27.6058C2.42946 27.8054 2.63178 27.9669 2.86191 28.0784C3.09203 28.1898 3.34415 28.2485 3.59984 28.25C3.71899 28.2621 3.83904 28.2621 3.95818 28.25L10.8332 26.6667L24.0332 13.5167L16.6665 6.16669L3.51651 19.3334Z" fill="#3E3F3A" />
                        <path d="M28.1829 6.93335L23.2663 2.01668C22.943 1.69507 22.5056 1.51453 22.0496 1.51453C21.5936 1.51453 21.1562 1.69507 20.8329 2.01668L18.0996 4.75002L25.4579 12.1083L28.1913 9.37502C28.3512 9.21425 28.4779 9.02352 28.5641 8.81374C28.6502 8.60395 28.6942 8.37924 28.6934 8.15245C28.6927 7.92567 28.6472 7.70126 28.5596 7.49207C28.472 7.28288 28.344 7.09302 28.1829 6.93335V6.93335Z" fill="#3E3F3A" />
                    </svg>
                </div>
            </button>
        </div>

    );
}

const AboutUser = () => {

    const [aboutMe, setAboutMe] = useState('Soy un gato, que se cree loro, Sin emoji');

    return (
        <div className="AboutUser">
            <div className="AboutUser__title">
                <h2 className="AboutUser__titleText">
                    Algo Sobre mi
                </h2>
                <button
                    className="AboutUser__titleButtonEdit"
                    onClick={() => {
                        const AboutMe = prompt('Dime algo sobre ti');
                        setAboutMe(AboutMe);
                    }}
                >
                    <div className="AboutUser__titleEdit">
                        <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.51651 19.3334L1.93318 26.1667C1.87856 26.4165 1.88043 26.6753 1.93866 26.9243C1.99688 27.1733 2.11 27.4061 2.26973 27.6058C2.42946 27.8054 2.63178 27.9669 2.86191 28.0784C3.09203 28.1898 3.34415 28.2485 3.59984 28.25C3.71899 28.2621 3.83904 28.2621 3.95818 28.25L10.8332 26.6667L24.0332 13.5167L16.6665 6.16669L3.51651 19.3334Z" fill="#3E3F3A" />
                            <path d="M28.1829 6.93335L23.2663 2.01668C22.943 1.69507 22.5056 1.51453 22.0496 1.51453C21.5936 1.51453 21.1562 1.69507 20.8329 2.01668L18.0996 4.75002L25.4579 12.1083L28.1913 9.37502C28.3512 9.21425 28.4779 9.02352 28.5641 8.81374C28.6502 8.60395 28.6942 8.37924 28.6934 8.15245C28.6927 7.92567 28.6472 7.70126 28.5596 7.49207C28.472 7.28288 28.344 7.09302 28.1829 6.93335V6.93335Z" fill="#3E3F3A" />
                        </svg>
                    </div>
                </button>
            </div>
            <p className="AboutUser__paragraph">
                {aboutMe}
            </p>
        </div>
    );
}

const name_social_networks = ['GitHub', 'Seleccionar'];

//·····················Main Component·················
const Profile = () => {
    return (
        <>
            <Header />
            <ImgProfile>


            </ImgProfile>
            <ContNameUser NameUS={NameUs} />
            <AboutUser />
            <ContNetworks>
                <NetworsTitle>Mis Redes</NetworsTitle>

                <ContSocialNetworks>
                    <SocialNetworks>
                        <Description>{name_social_networks[0]}</Description>
                        <Svg
                            onClick={() => { console.log('click') }}
                        >
                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.60333 10.675C6.50334 10.5624 6.43802 10.4233 6.41524 10.2744C6.39246 10.1256 6.41319 9.97329 6.47493 9.83594C6.53668 9.69858 6.6368 9.582 6.76326 9.50022C6.88972 9.41845 7.03711 9.37496 7.18771 9.375H19.6877C19.8383 9.37496 19.9857 9.41845 20.1122 9.50022C20.2386 9.582 20.3387 9.69858 20.4005 9.83594C20.4622 9.97329 20.483 10.1256 20.4602 10.2744C20.4374 10.4233 20.3721 10.5624 20.2721 10.675L14.0221 17.7062C13.9488 17.7889 13.8588 17.855 13.7581 17.9003C13.6573 17.9456 13.5482 17.969 13.4377 17.969C13.3273 17.969 13.2181 17.9456 13.1173 17.9003C13.0166 17.855 12.9266 17.7889 12.8533 17.7062L6.60333 10.675Z" fill="#3E3F3A" />
                                <path d="M0.9375 3.125C0.9375 2.2962 1.26674 1.50134 1.85279 0.915291C2.43884 0.32924 3.2337 0 4.0625 0L22.8125 0C23.6413 0 24.4362 0.32924 25.0222 0.915291C25.6083 1.50134 25.9375 2.2962 25.9375 3.125V21.875C25.9375 22.7038 25.6083 23.4987 25.0222 24.0847C24.4362 24.6708 23.6413 25 22.8125 25H4.0625C3.2337 25 2.43884 24.6708 1.85279 24.0847C1.26674 23.4987 0.9375 22.7038 0.9375 21.875V3.125ZM24.375 3.125C24.375 2.7106 24.2104 2.31317 23.9174 2.02015C23.6243 1.72712 23.2269 1.5625 22.8125 1.5625H4.0625C3.6481 1.5625 3.25067 1.72712 2.95765 2.02015C2.66462 2.31317 2.5 2.7106 2.5 3.125V21.875C2.5 22.2894 2.66462 22.6868 2.95765 22.9799C3.25067 23.2729 3.6481 23.4375 4.0625 23.4375H22.8125C23.2269 23.4375 23.6243 23.2729 23.9174 22.9799C24.2104 22.6868 24.375 22.2894 24.375 21.875V3.125Z" fill="#3E3F3A" />
                            </svg>
                        </Svg>

                    </SocialNetworks>
                    <ButtonDeleteNet
                        onClick={() => {
                            console.log('click');
                        }}
                    >
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0.25C6.40625 0.25 0.25 6.40625 0.25 14C0.25 21.5938 6.40625 27.75 14 27.75C21.5938 27.75 27.75 21.5938 27.75 14C27.75 6.40625 21.5938 0.25 14 0.25ZM9 12.75C8.66848 12.75 8.35054 12.8817 8.11612 13.1161C7.8817 13.3505 7.75 13.6685 7.75 14C7.75 14.3315 7.8817 14.6495 8.11612 14.8839C8.35054 15.1183 8.66848 15.25 9 15.25H19C19.3315 15.25 19.6495 15.1183 19.8839 14.8839C20.1183 14.6495 20.25 14.3315 20.25 14C20.25 13.6685 20.1183 13.3505 19.8839 13.1161C19.6495 12.8817 19.3315 12.75 19 12.75H9Z" fill="#D9534F" />
                        </svg>
                    </ButtonDeleteNet>
                </ContSocialNetworks>

                <ContSocialNetworks>
                    <SocialNetworks>

                        <Description>{name_social_networks[1]}</Description>
                        <Svg
                            onClick={() => { console.log('click') }}
                        >
                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.60333 10.675C6.50334 10.5624 6.43802 10.4233 6.41524 10.2744C6.39246 10.1256 6.41319 9.97329 6.47493 9.83594C6.53668 9.69858 6.6368 9.582 6.76326 9.50022C6.88972 9.41845 7.03711 9.37496 7.18771 9.375H19.6877C19.8383 9.37496 19.9857 9.41845 20.1122 9.50022C20.2386 9.582 20.3387 9.69858 20.4005 9.83594C20.4622 9.97329 20.483 10.1256 20.4602 10.2744C20.4374 10.4233 20.3721 10.5624 20.2721 10.675L14.0221 17.7062C13.9488 17.7889 13.8588 17.855 13.7581 17.9003C13.6573 17.9456 13.5482 17.969 13.4377 17.969C13.3273 17.969 13.2181 17.9456 13.1173 17.9003C13.0166 17.855 12.9266 17.7889 12.8533 17.7062L6.60333 10.675Z" fill="#3E3F3A" />
                                <path d="M0.9375 3.125C0.9375 2.2962 1.26674 1.50134 1.85279 0.915291C2.43884 0.32924 3.2337 0 4.0625 0L22.8125 0C23.6413 0 24.4362 0.32924 25.0222 0.915291C25.6083 1.50134 25.9375 2.2962 25.9375 3.125V21.875C25.9375 22.7038 25.6083 23.4987 25.0222 24.0847C24.4362 24.6708 23.6413 25 22.8125 25H4.0625C3.2337 25 2.43884 24.6708 1.85279 24.0847C1.26674 23.4987 0.9375 22.7038 0.9375 21.875V3.125ZM24.375 3.125C24.375 2.7106 24.2104 2.31317 23.9174 2.02015C23.6243 1.72712 23.2269 1.5625 22.8125 1.5625H4.0625C3.6481 1.5625 3.25067 1.72712 2.95765 2.02015C2.66462 2.31317 2.5 2.7106 2.5 3.125V21.875C2.5 22.2894 2.66462 22.6868 2.95765 22.9799C3.25067 23.2729 3.6481 23.4375 4.0625 23.4375H22.8125C23.2269 23.4375 23.6243 23.2729 23.9174 22.9799C24.2104 22.6868 24.375 22.2894 24.375 21.875V3.125Z" fill="#3E3F3A" />
                            </svg>
                        </Svg>
                    </SocialNetworks>
                    <ButtonDeleteNet
                        onClick={() => {
                            console.log('click');
                        }}
                    >
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0.25C6.40625 0.25 0.25 6.40625 0.25 14C0.25 21.5938 6.40625 27.75 14 27.75C21.5938 27.75 27.75 21.5938 27.75 14C27.75 6.40625 21.5938 0.25 14 0.25ZM9 12.75C8.66848 12.75 8.35054 12.8817 8.11612 13.1161C7.8817 13.3505 7.75 13.6685 7.75 14C7.75 14.3315 7.8817 14.6495 8.11612 14.8839C8.35054 15.1183 8.66848 15.25 9 15.25H19C19.3315 15.25 19.6495 15.1183 19.8839 14.8839C20.1183 14.6495 20.25 14.3315 20.25 14C20.25 13.6685 20.1183 13.3505 19.8839 13.1161C19.6495 12.8817 19.3315 12.75 19 12.75H9Z" fill="#D9534F" />
                        </svg>
                    </ButtonDeleteNet>

                </ContSocialNetworks>

                <ButtonAddNet
                    onClick={() => { console.log('click') }}
                >
                    <svg width="40" height="40" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0.249969C6.40625 0.249969 0.25 6.40622 0.25 14C0.25 21.5937 6.40625 27.75 14 27.75C21.5937 27.75 27.75 21.5937 27.75 14C27.75 6.40622 21.5937 0.249969 14 0.249969ZM15.25 19C15.25 19.3315 15.1183 19.6494 14.8839 19.8839C14.6495 20.1183 14.3315 20.25 14 20.25C13.6685 20.25 13.3505 20.1183 13.1161 19.8839C12.8817 19.6494 12.75 19.3315 12.75 19V15.25H9C8.66848 15.25 8.35054 15.1183 8.11612 14.8839C7.8817 14.6494 7.75 14.3315 7.75 14C7.75 13.6684 7.8817 13.3505 8.11612 13.1161C8.35054 12.8817 8.66848 12.75 9 12.75H12.75V8.99997C12.75 8.66845 12.8817 8.35051 13.1161 8.11609C13.3505 7.88167 13.6685 7.74997 14 7.74997C14.3315 7.74997 14.6495 7.88167 14.8839 8.11609C15.1183 8.35051 15.25 8.66845 15.25 8.99997V12.75H19C19.3315 12.75 19.6495 12.8817 19.8839 13.1161C20.1183 13.3505 20.25 13.6684 20.25 14C20.25 14.3315 20.1183 14.6494 19.8839 14.8839C19.6495 15.1183 19.3315 15.25 19 15.25H15.25V19Z" fill="#29ABE0" />
                    </svg>
                </ButtonAddNet>
            </ContNetworks>
            <Footer />
        </>
    )
};

export default Profile;


