import React, { useState } from "react";
import styled from "styled-components";

import { FaSearch, FaChevronDown } from "react-icons/fa";

const BoxActionConatiner = styled.section`
  margin: 3rem 0 2rem 0;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    grid-area: gofData;
    margin: 1rem 0 2rem 1rem;
  } 
`;

const SearchInput = styled.input`
  width: 80%;
  height: 40px;
  min-width: 300px;
  max-width: 700px;
  border: 3px solid var(--principal-color);
  border-radius: 10px 0px 0px 10px;
  outline: none;
  padding: 2px 10px;
  font-size: var(--secondarey-font-size);
  font-family: var(--secondary-font);
  :focus-visible {
    border: 3px solid var(--principal-color);
  }
`;

const SearcherContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--principal-color);
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
`;

const OrderFilterContainer = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const OFBtn = styled.div`
  padding: 10px;
  display: block;
  background-color: var(--principal-color);
  color: var(--light-color);
  font-family: var(--secondary-font);
  font-size: 1.3rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  user-select: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  svg {
    margin-right: 5px;
  }
  &:hover div {
    max-height: 300px;
    display: block;
  }
  div {
    position: absolute;
    max-height: 0px;
    overflow: hidden;
  }
`;

const OrderBtn = styled(OFBtn)``;

const FilterBtn = styled(OFBtn)`
`;

const SubMenu = styled.div`
  max-height: 0;
  transition: 0.8s;
  background-color: var(--secondary-color);
  margin-left: -10px;
  top: 100%;
  width: 100%;
  span {
    display: block;
    padding: 10px;
    text-align: end;
    user-select: none;
  }
  span:hover {
    background-color: var(--light-blue);
  }
`;

export const GOFData = () => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    const text = e.target.value;
    setSearch(text);
    console.log("text", text);
  };

  const onClickSearch = () => {
    //Buscar y actualizar lista de comunidades
    console.log("Buscando...");
  };

  const onOrder = () => {
    console.log("Ordename!");
  };

  const onFilter = () => {
    console.log("Filtrameee!");
  };

  const onClick500Users = () => {
    console.log("Comunidades con mas de 500 usuarios");
  };

  return (
    <BoxActionConatiner>
      <SearcherContainer>
        <SearchInput
          type="search"
          name="searcher"
          placeholder="Buscar comunidad..."
          onChange={onChange}
          onKeyUp={onClickSearch}
          value={search}
        />
        <SearchIcon onClick={onClickSearch}>
          <FaSearch color="white" size="2rem" />
        </SearchIcon>
      </SearcherContainer>

      <OrderFilterContainer>
        <OrderBtn onClick={onOrder}>
          <span>
            <FaChevronDown /> Ordenar
          </span>
          <SubMenu>
            <span>A-Z</span>
            <span>Usuarios</span>
            <span>Respuestas</span>
          </SubMenu>
        </OrderBtn>

        <FilterBtn onClick={onFilter}>
          <span>
            <FaChevronDown /> Filtrar
          </span>
          <SubMenu>
            <span onClick={onClick500Users}>+500 usuarios</span>
            <span>+500 respuestas</span>
          </SubMenu>
        </FilterBtn>
      </OrderFilterContainer>
    </BoxActionConatiner>
  );
};
