import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import NavButton from "./ButtonNav/NavButton";
import ProfileButton from "./ButtonProfile/ProfileButton"

import Logo from '../../images/Logo.png';

const NavContainer = styled.div`
    display : flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 20px;

    @media screen and (max-width: 375px) {
      img {
        width: 100px;
      }
    }
`;

const Line = styled.hr`
    border-top: 2px solid var(--boring-color);
    opacity: 0.67;
    margin-top: 2px;
    box-shadow: 0 4px 4px 0 #B0AFAB;
`;

const Navigation = () => {
    return (
        <nav>
            <NavContainer>
                <Link to="/">
                    <img
                    src={Logo}
                    alt="Imagen Logo"
                    />
                </Link>
                {/* <NavButton titulo='registrate' /> */}
                <ProfileButton />
            </NavContainer>

            <Line />
        </nav>
    )
}

export default Navigation;
