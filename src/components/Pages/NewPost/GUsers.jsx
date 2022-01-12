// GOF = GET, ORDER AND FILTER DATA

import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Icons
// import { FaSearch, FaChevronDown } from "react-icons/fa";
import { BsFillPersonPlusFill } from 'react-icons/bs';

const SearchInput = styled.input`
  width: 80%;
  height: 40px;
  min-width: 300px;
  max-width: 700px;
  border: 0.5px solid var(--warning-color);
  border-radius: 10px 0px 0px 10px;
  outline: none;
  padding: 2px 10px;
  font-size: var(--secondarey-font-size);
  font-family: var(--secondary-font);

  :focus-visible {
    border: 2px solid var(--warning-color);
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
  background-color: var(--warning-color);
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
`;

// const OrderFilterContainer = styled.div`
//   width: 100%;
//   max-width: 350px;

//   display: flex;
//   justify-content: space-between;

//   margin-top: 20px;
// `;

// const OFBtn = styled.div`
//   padding: 10px;
//   display: block;
//   background-color: var(--principal-color);
//   color: var(--light-color);
//   font-family: var(--secondary-font);
//   font-size: 1.3rem;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   cursor: pointer;
//   position: relative;
//   user-select: none;

//   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

//   svg {
//     margin-right: 5px;
//   }

//   &:hover div {
//     max-height: 300px;
//     display: block;
//   }

//   div {
//     position: absolute;
//     max-height: 0px;
//     overflow: hidden;
//   }
// `;

// const OrderBtn = styled(OFBtn)``;

// const FilterBtn = styled(OFBtn)``;

// const SubMenu = styled.div`
//   max-height: 0;
//   transition: 0.8s;
//   background-color: var(--secondary-color);
//   margin-left: -10px;
//   top: 100%;
//   width: 100%;

//   span {
//     display: block;
//     padding: 10px;
//     text-align: end;

//     user-select: none;
//   }

//   span:hover {
//     background-color: var(--light-blue);
//   }
// `;

function GOFData({ setResults, /** results = [] */ users }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Ir a la base de datos y buscar en los nombres de users, de forma asincrona
    const filteredUsers = users?.filter(
      (user) =>
        user.fullname?.toLowerCase().includes(search.trim()) ||
        user.username?.toLowerCase().includes(search.trim())
    );

    // Enviar resultados a estado de resultados
    setResults(filteredUsers);
  }, [search]);

  const onChange = (e) => {
    e.preventDefault();
    const text = e.target.value;
    setSearch(text);
  };

  return (
    <SearcherContainer>
      <SearchInput
        type="search"
        name="searcher"
        placeholder="Buscar usuario..."
        onChange={onChange}
        // onKeyUp={onClickSearch}
        value={search}
      />
      <SearchIcon onClick={onChange}>
        <BsFillPersonPlusFill color="white" size="3rem" />
      </SearchIcon>
    </SearcherContainer>
  );
}

export default GOFData;
