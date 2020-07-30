import React from "react";

import Logo from "../../assets/images/airportZoom.svg";

import { Container, ItensContainer, ListContainer } from "./style.js";

const NavBar = () => {
  return (
    <Container>
      <ItensContainer>
        <img src={Logo} alt="Logo" />
        <ListContainer>
          <li>
            <a href="">Orçamento</a>
          </li>
          <li>
            <a hrf="">Contato</a>
          </li>
          <li>
          <a hrf="">Institucional</a>
          </li>
          <li>
            <a hrf=""> Serviços </a>
          </li>
        </ListContainer>

      </ItensContainer>
   
    </Container>
  );
};

export default NavBar;