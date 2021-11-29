import React from "react";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

import { IconContext } from "react-icons";

// import '../../main.css'


const Footerf = styled.div`
    width: 100%;
    bottom: 0;
    background-color: var(--dark-color);
`

const FooterMainContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 30px;
    @media screen and (min-width:768px) {
    display: block;
    justify-content: center;
    text-align: center;
    }

`
const FooterMainDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* @media screen and (min-width:768px) {
    display: block;
    justify-content: center;
    } */
`

const FooterDataContainer = styled.div`
    
    line-height: 1;
    font-family: var(--secondary-font);
    color: var(--light-color);
    font-size: 18px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width:768px) {
    display: block;
    justify-content: center;
    padding-top: 1rem;
    }
`

const FooterDescriptionContainer = styled.div`
    font-family: var(--secondary-font);
    color: var(--light-color);
    font-size: 18px;
    width: 30%;
    
    @media screen and (min-width:768px) {
    width: 100%;
    text-align: center;
    padding-top: 2rem;
    }
`

const FooterTitle = styled.span `
    font-size: 20px;
    font-weight: bold;
    color: var(--light-color);
`

const FooterLink = styled.a `
    text-decoration: none;
    color: var(--light-color);
    padding: 5px 0px;
    @media screen and (min-width:768px) {
    padding: 0px 20px;
    }
    
`

const FooterDescription = styled.p `
    line-height: 1.5;
    font-family: var(--secondary-font);
    color: var(--light-color);
    font-size: 18px;
`

const FooterCopyright = styled.div`
    font-family: var(--secondary-font);
    font-size: 12px;
    color: var(--light-color);
    text-align: center;
    bottom:0;
    padding: 5px 0 10px 0;
`



function Footer() {
    
    return (
        <Footerf>
            <FooterMainContainer>
                    <FooterMainDataContainer>
                    <FooterTitle>Contactanos</FooterTitle>
                    <FooterDataContainer>
                        <FooterLink href="https://www.linkedin.com/"> <BsLinkedin /> Nayruth </FooterLink>
                        <FooterLink href="https://www.linkedin.com/"> <BsLinkedin /> Cesar </FooterLink>
                        <FooterLink href="https://www.linkedin.com/in/danieloch/"> <BsLinkedin /> Daniel </FooterLink>
                        <FooterLink href="https://www.linkedin.com/"> <BsLinkedin /> Juan </FooterLink>
                    </FooterDataContainer>
                    </FooterMainDataContainer>
                <FooterDescriptionContainer>
                    <FooterTitle>Zupport</FooterTitle>
                    <FooterDescription>Descubre el poder que tienes al ayudar a otros y encuentra ayuda facilmente en tu comunidad.</FooterDescription>
                </FooterDescriptionContainer>
            </FooterMainContainer>
            <FooterCopyright>
                Zupport © 2021 <IconContext.Provider
                        value={{ color: 'red', size: '12px' }}
                        >
                            <FaHeart />
                    </IconContext.Provider> 
            </FooterCopyright>
        </Footerf>
    )
}

export default Footer
