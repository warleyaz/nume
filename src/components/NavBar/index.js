import React from "react";

import Logo from "../../assets/images/airportZoom.svg";

import { Container, ItensContainer, ListContainer } from "./style.js";

const NavBar = ({handleFooterLink}) => {
  return (
    <Container>
      <ItensContainer>
        <img src={Logo} alt="Logo" />
        <ListContainer>
          <li>
            <a href="#" onClick={() => {}} >Orçamento</a>
          </li>
          <li>
            <a href="#" onClick={handleFooterLink} >Contato</a>
          </li>
          <li>
            <a href="#" onClick={() => {}} >Institucional</a>
          </li>
          <li>
            <a href="#" onClick={() => {}} > Serviços </a>
          </li>
        </ListContainer>

      </ItensContainer>
   
    </Container>
  );
};

export default NavBar;