import React from 'react'

import { IconContext } from "react-icons";

import { BsQuestionCircleFill, BsFillGearFill, BsBoxArrowInRight, BsTranslate } from "react-icons/bs";

import Profile from '../../../images/ProfileP.png'

import styled from "styled-components";

const List = styled.ul `
    list-style: none;
    padding: 0;
    margin: 0;
    .Iconos {
      color:  var(--principal-color);
      width: 30px;
      height: 30px;
    }
`

const ListItem = styled.li`
    border-bottom: 1px solid #dddddd;
    display: flex;
    align-items: center;
    cursor: pointer;

    & a {
        text-decoration: none;
        color: var(--boring-color);
        font-family: var(--secondary-font);
        font-size: 18px;
        padding: 15px 15px;
        display: block;
    }
`

const ProfileMenuImg = styled.img `
    width: 50px;
    height: 50px;
    border-radius: 90px;
    margin: 10px;
`

const Icon = styled.div `
    margin: 10px 20px;
`

function ProfileMenu() {

    return (
        <>
            <List>
                <ListItem><ProfileMenuImg src={Profile} alt="Imagen de Perfil" /><a href="/profile"> Perfil</a></ListItem>
                <IconContext.Provider
                        value={{ className:'Iconos'}}
                >
                <ListItem><Icon><BsQuestionCircleFill /></Icon><a href="/help">Ayuda</a></ListItem>
                <ListItem><Icon><BsTranslate /></Icon><a href="/lang">Idioma</a></ListItem>
                <ListItem><Icon><BsFillGearFill /></Icon><a href="/config">Configuración</a></ListItem>
                <ListItem><Icon><BsBoxArrowInRight /></Icon><a href="/logout">Cerrar Sesión</a></ListItem>
                </IconContext.Provider>
            </List>
        </>
    )
}

export default ProfileMenu
