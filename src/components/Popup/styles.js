import styled, {css} from "styled-components";
import { colors } from "../../assets/colors";

export const Container = styled.div`
  background-color: ${colors.white};
  box-shadow: 0px 2px 8px rgba(17, 14, 27, 0.09);
  padding: 40px 40px 20px 40px;
  position: fixed;
  z-index: 200;
  border-radius: 16px;


  @media (min-width: 200px) {
    width: 100vw;
    top: 10vh;
    position: absolute;
    letter-spacing: -0.2px;  
  }
  @media (min-width: 555px) {
    width: 100vw;
    top: 5vh;
    position: fixed;
  } 
  @media (min-width: 700px) {
    width: 90vw;
    top: 5vh;
    left: 5vw;
    position: fixed;
  } 
  @media (min-width: 1000px) {
    width: 80vw;
    top: 10vh;
    left: 10vw;
    position: fixed;
    letter-spacing: 0.3px;
    line-height: 30px;
  } 
  @media (min-width: 1200px) {
    width: 60vw;
    top: 10vh;
    left: 20vw;
    position: fixed;
    
  } 
  .button-container{
    display: flex;
    justify-content: center;
  }

  button{
    background-color: ${colors.black};
    font-size: 20px;
    color: ${colors.white};
    border-radius: 4px;
    padding: 10px 22px;
    border: 1px solid #000;
  }
`
export const Layer = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.5);
z-index: 100;
`