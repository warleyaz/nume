import styled from "styled-components";
import {colors} from "../../assets/colors";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  background-color: rgba(71, 71, 71, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  
`

export const ItensContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  width: 60%;
  max-width: 800px;
 


  img {
    width: 70px;
    height: 70px;
    object-fit:scale-down;
    margin-right: 120px;
  }

`

export const ListContainer = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  max-width:400px;


   li {
     list-style: none;
     color: ${colors.white};
     font-family: Arial;
     font-size: 16px;
     line-height: 20px;
     font-weight: 500;



    a {
      text-decoration: none;
      cursor: pointer;
      
      &:visited {
        color: ${colors.white};
      }
      &:active {
        color: ${colors.white};
      }
      &:hover {
        color: ${colors.black};
      }

    }
     
  } 
`
