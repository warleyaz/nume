import React from "react";

import Logo from "../../assets/images/airportZoom.svg";

import {
  NavbarContainer, 
  NavContainer, 
  NavLink, 
  LogoContainer, 
  CollapseContainer, 
  ListContainer,
  ContainerDiv,
  Toggle } from "./style.js";

const NavBar = ({refs, handleClick, setShowModal}) => {
  return (
    <NavbarContainer collapseOnSelect expand="lg">
        <ContainerDiv>
          <LogoContainer href="#"><img src={Logo} alt="Logo" /></LogoContainer>
          <Toggle aria-controls="basic-navbar-nav" />
          <CollapseContainer className="mr-auto">

            <NavContainer>
              <NavLink href="#orcamento" onClick={setShowModal}>Orçamento</NavLink>
              <NavLink href="#contato" onClick={() => handleClick(refs.footerRef)}>Contato</NavLink>
              <NavLink href="#institucional" onClick={() => handleClick(refs.footerRef)}>Institucional</NavLink>
              <NavLink href="#servicos" onClick={() => handleClick(refs.servicesRef)}>Serviços</NavLink>
            </NavContainer>
          </CollapseContainer>
        </ContainerDiv>
    </NavbarContainer>
  );
};

export default NavBar;