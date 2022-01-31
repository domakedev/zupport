import { useState, useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';

// import { useDetectOutsideClick } from "react-detect-click-outside";

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IconContext } from 'react-icons';

import styled from 'styled-components';

import ProfileMenu from './ProfileMenu';

const MainContainer = styled.div`
  margin-left: auto;
`;
const MainButton = styled.button`
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: 2px solid var(--principal-color);
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  margin-left: auto;
  width: 140px;
  height: 55px;
  margin-top: 10px;
  margin-right: 0px;
  &:hover {
    background-color: var(--light-color);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
  & img {
    border-radius: 90px;
    width: 40px;
    height: 40px;
    object-fit: cover;
    object-position: center center;
  }
  & span {
    vertical-align: middle;
    font-size: 20px;
    font-family: var(--principal-font);
    padding: 5px;
    color: var(--boring-color);
  }
  @media screen and (min-width: 768px) {
    width: 170px;
  }
`;

const Deploy = styled.nav`
  background: white;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-40px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  opacity: ${(props) => (props.isActive ? '1' : '0')};
  visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
  transform: ${(props) =>
    props.isActive ? 'translateY(40px)' : 'translateY(-40)'};
  z-index: 200;
  @media screen and (min-width: 768px) {
    width: 300px;
    right: 20px;
    border-radius: 8px;
  }
`;

function DropdownMenu() {
  const currentUser = useSelector((state) => state.currentUserOTokencito);
  const dropdownRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const onClick = () => setIsActive(!isActive);

  const value = useMemo(() => ({ color: '#29ABE0', size: '27px' }));

  return (
    <MainContainer>
      <MainButton onClick={onClick}>
        <img src={currentUser?.photo} alt={currentUser?.username} />
        <span>{currentUser?.fullname.split(' ')[0]}</span>
        <IconContext.Provider value={value}>
          <MdOutlineKeyboardArrowDown />
        </IconContext.Provider>
      </MainButton>

      <Deploy ref={dropdownRef} isActive={isActive}>
        <ProfileMenu />
      </Deploy>
    </MainContainer>
  );
}

export default DropdownMenu;
