// GOF = GET, ORDER AND FILTER DATA

import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Icons
import { FaSearch, FaChevronDown } from 'react-icons/fa';

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

// const FakeData = [
//   {
//     name: "Javascript",
//   },
//   {
//     name: "Node",
//   },
//   {
//     name: "Cocina",
//   },
//   {
//     name: "Natacion olimpica",
//   },
//   {
//     name: "Java",
//   },
//   {
//     name: "MongoDb",
//   },
//   {
//     name: "Enfermedades comunes",
//   },
// ];

function GOFData({ setResults, results, comunidades }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Ir a la base de datos y buscar en los nombres de comunidades, de forma asincrona
    const filteredComu = comunidades?.filter((comu) =>
      comu.title?.toLowerCase().includes(search?.trim())
    );

    // Enviar resultados a estado de resultados
    // eslint-disable-next-line
    comunidades ? setResults(filteredComu) : null;
  }, [search]);

  const onChange = (e) => {
    e.preventDefault();
    const text = e.target.value;
    setSearch(text);
  };

  const onOrderByUsers = () => {
    const copyResults = [...results];
    copyResults.sort((a, b) => b.users - a.users);
    setResults(copyResults);
  };

  const onOrderByAnswers = () => {
    const copyResults = [...results];
    copyResults.sort((a, b) => b.cheks - a.cheks);
    setResults(copyResults);
  };

  const onOrderByName = () => {
    const copyResults = [...results];

    copyResults.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    setResults(copyResults);
  };

  const onClick500Users = () => {
    const filtered = results.filter((c) => Number(c.users) >= 500);
    setResults(filtered);
  };

  const onClick500Answer = () => {
    const filtered = results.filter((c) => Number(c.cheks) >= 500);
    setResults(filtered);
  };

  return (
    <>
      <SearcherContainer>
        <SearchInput
          type="search"
          name="searcher"
          placeholder="Buscar comunidad..."
          onChange={onChange}
          // onKeyUp={onClickSearch}
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
            {/* eslint-disable-next-line */}
            <span onClick={onOrderByName}>A-Z</span>
            {/* eslint-disable-next-line */}
            <span onClick={onOrderByUsers}>Usuarios</span>
            {/* eslint-disable-next-line */}
            <span onClick={onOrderByAnswers}>Respuestas</span>
          </SubMenu>
        </OrderBtn>

        {/* Boton de reset no necesario
        <OrderBtn onClick={()=>(window.location.reload())}>
          <IoReloadOutline size={"15px"}/> Reset
        </OrderBtn> */}

        <FilterBtn>
          <span>
            <FaChevronDown /> Filtrar
          </span>
          <SubMenu>
            {/* eslint-disable-next-line */}
            <span onClick={onClick500Users}>+500 usuarios</span>
            {/* eslint-disable-next-line */}
            <span onClick={onClick500Answer}>+500 respuestas</span>
          </SubMenu>
        </FilterBtn>
      </OrderFilterContainer>
    </>
  );
}

export default GOFData;
