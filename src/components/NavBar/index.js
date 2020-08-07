import React from "react";

import Logo from "../../assets/images/airportZoom.svg";

import { Container, ItensContainer, ListContainer } from "./style.js";
const NavBar = ({refs, handleClick}) => {
  return (
    <Container>
      <ItensContainer>
        <img src={Logo} alt="Logo" />
        <ListContainer>
          <li>
            <a onClick={() => {}} >Orçamento</a>
          </li>
          <li>
            <a onClick={() => handleClick(refs.footerRef)} >Contato</a>
          </li>
          <li>
            <a onClick={() => handleClick(refs.footerRef)}>Institucional</a>
          </li>
          <li>
            <a onClick={() => handleClick(refs.servicesRef)} > Serviços </a>
          </li>
        </ListContainer>
      </ItensContainer>
    </Container>
  );
};

export default NavBar;