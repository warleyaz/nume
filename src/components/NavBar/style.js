import styled from "styled-components";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {colors} from "../../assets/colors";

export const NavbarContainer = styled(Navbar)`
  width: 100%;
  height: 80px;
  background-color: rgba(71, 71, 71, 0.5);
  box-sizing: border-box;
  position: fixed;
  @media(max-width: 800px) {
    height: 80px;
    padding: 0px;
    background-color:  rgba(71, 71, 71, 0);
    button {
      margin-right: 8px;
    }
  }
`

export const ContainerDiv = styled(Container)`
  max-width: 800px;
  @media(max-width: 800px) {
      background-color: rgba(71, 71, 71, 0.5);
      /* height: 100%; */
  }

`

export const LogoContainer = styled(Navbar.Brand)`
  img {
    width: 70px;
    height: 70px;
    margin-right: 120px;
  }
`;

export const CollapseContainer = styled(Navbar.Collapse)`
  justify-content: space-between;
  flex-direction: row-reverse;  
  @media(max-width: 800px) {
      /* background-color: rgba(71, 71, 71, 0.5); */
  }
`

export const NavContainer = styled(Nav)`
  a {
    color: ${colors.white} !important;
    font-family: Arial;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    margin-left: 20px;
  }
`

export const Toggle = styled(Navbar.Toggle)`
`

export const NavLink = styled(Nav.Link)`
  
`

