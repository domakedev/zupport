import React from 'react';
import styled from "styled-components";

// import '../../main.css'

import Cloud from '../../images/cloud.png'
import I404 from '../../images/404.png'
import CFail from '../../images/confail.png'

import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ImgContainer1 = styled.img`
    margin-left: auto;
    padding: 10px;
`
const SecondaryContainer = styled.div`
    margin: auto;
`

const ImgContainer2 = styled.img`

`
const SecondaryContainerButton= styled.a `
    width: 110px;
    height: 35px;
    background-color: var(--principal-color);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 2px 0 var(--boring-color);
    margin: auto;
    text-align: center;
    font-family: var(--secondary-font);
    font-size: 18px;
    color: var(--light-color);
    text-decoration: none;

    &:hover{
        background-color: var(--secondary-color);
        color: var(--light-color);
    }
`

const SecondaryContainerTitulo = styled.h1 `
    text-align: center;
    padding: 40px 0 30px 0;
    font-family: var(--principal-font);
    font-size: 36px;
    color: var(--boring-color);
`

const ImgContainer3 = styled.img`
    padding-top: 40px;
    margin-right: auto;
    margin-bottom: 30px;
`

function P404() {
    return (
        <>
            <Header />
            <MainContainer>
                <ImgContainer1
                src={Cloud}
                alt="Cloud"
                />
                <SecondaryContainer>
                    <ImgContainer2
                    src={I404}
                    alt="404"
                    />
                    <SecondaryContainerTitulo>
                        PAGE NOT FOUND
                    </SecondaryContainerTitulo>
                    <SecondaryContainerButton href="http://google.com.co">
                        VOLVER
                    </SecondaryContainerButton>
                </SecondaryContainer>
                <ImgContainer3
                src={CFail}
                alt="ConectionFail"
                />
            </MainContainer>
            <Footer />
        </>
    )
}

export default P404
