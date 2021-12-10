import { useState, useEffect } from "react";
import styled from "styled-components";

import { FaSearch, FaChevronDown } from "react-icons/fa";

const BoxActionConatiner = styled.section`
  margin: 3rem 0 2rem 4rem;
  display: flex;
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

const FilterBtn = styled(OFBtn)``;

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

export const GOFData = ({ comuPosts=[], results=[], setResults }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    //Ir a la base de datos y buscar en los nombres de comunidades, de forma asincrona
    let filteredPosts = comuPosts.filter((post) =>
      post.postTitle?.toLowerCase().includes(search.trim())
    );

    //Enviar resultados a estado de resultados
    setResults(filteredPosts);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const onChange = (e) => {
    e.preventDefault();
    const text = e.target.value;
    setSearch(text);
  };

  const orderByTime = () => {
    const obtMilis = (fecha) => {
      const dnow = new Date();
      const dpost = new Date(fecha);
      // dividimos por mil porque son milisegundos
      const seconds = (dnow - dpost) / 1000;
      return seconds;
    };

    const copyResults = [...results];
    copyResults.sort(function (a, b) {
      return obtMilis(b.timePost) - obtMilis(a.timePost);
    });
    setResults(copyResults);
  };

  const orderByLikes = () => {
    const copyResults = [...results];
    copyResults.sort(function (a, b) {
      return b.likes - a.likes;
    });
    setResults(copyResults);
  };

  const orderByPoints = () => {
    const copyResults = [...results];
    copyResults.sort(function (a, b) {
      return b.points - a.points;
    });
    setResults(copyResults);
  };

  const filterNoResolved = () => {
    const copyResults = [...results];
    const filtered = copyResults.filter((post) => !post.resolved);
    setResults(filtered);
  };

  const filterResolved = () => {
    const copyResults = [...results];
    const filtered = copyResults.filter((post) => post.resolved);
    setResults(filtered);
  };

  return (
    <BoxActionConatiner>
      <SearcherContainer>
        <SearchInput
          type="search"
          name="searcher"
          placeholder="Buscar post..."
          onChange={onChange}
          //onKeyUp={onChange}
          value={search}
        />
        <SearchIcon onClick={onChange}>
          <FaSearch color="white" size="2rem" />
        </SearchIcon>
      </SearcherContainer>

      <OrderFilterContainer>
        <OrderBtn>
          <span>
            <FaChevronDown /> Ordenar
          </span>
          <SubMenu>
            <span onClick={orderByTime}>Fecha de publicacion</span>
            <span onClick={orderByLikes}>Likes</span>
            <span onClick={orderByPoints}>Puntos</span>
          </SubMenu>
        </OrderBtn>

        <FilterBtn>
          <span>
            <FaChevronDown /> Filtrar
          </span>
          <SubMenu>
            <span onClick={filterNoResolved}>No Resueltos</span>
            <span onClick={filterResolved}>Resueltos</span>
          </SubMenu>
        </FilterBtn>
      </OrderFilterContainer>
    </BoxActionConatiner>
  );
};
