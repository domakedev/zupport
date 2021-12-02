import React from "react";
import styled from "styled-components";

// import '../../../main.css'

const ButtonContainer = styled.button`
    margin-left: auto;
    width: 170px;
    height: 48px;
    border: 2px solid var(--principal-color);
    border-radius: 3px;
    background-color: transparent;
    &:hover{
        background-color: var(--light-color);
    }
`;

const ButtonText= styled.a`
    text-align: center;
    color: var(--principal-color);
    text-transform: uppercase;
    text-decoration: none;
    font-family: var(--secondary-font);
    font-size: 18px;
    font-weight: bold;
`


const NavButton = (props) => {
    console.log(props)
    return(
        <ButtonContainer>
            <ButtonText>{props.titulo}</ButtonText>
        </ButtonContainer>
    )
}


export default NavButton;
