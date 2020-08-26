import styled from "styled-components";
import { colors } from "../../assets/colors";
import { device, normalizeFont } from "../../assets/size";

import CalculatorImage from '../../assets/images/calculator.png';

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

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 200;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`

export const FirstModalWrapper = styled.div`
  background-color: ${colors.white};
  display: flex;
  width: 80%;
  height: 80vh;
  top: 4em;
  border-radius: 15px;
  margin-top: 3em;
  overflow: hidden;
  @media (min-width: 1024px) {
    max-width: 50%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 80vw;
    margin: 4em 1.2em 0 0;
    height: calc(100vh);
  }
  span {
    z-index: 1500;
    display: block;
    width: 25px;
    height: 25px;
    position: absolute;
    
    @media ((max-width: 1023px) and (min-width: 769px)) {
      left: 85%;
      top: 1.8%;
    }
    @media (min-width: 1024px) {
      left: calc(80vw - 8em);
      top: 1.8%;
    }
    @media (max-width: 768px) {
      left: 78%;
      top: 2.5%;
    }
    cursor: pointer;
    &:after {
      content: ' ';
      display: block;
      height: 25px;
      width: 3px;
      background: black;
      position: absolute;
      transform: rotate(-45deg);
      margin-left: 40%;
    }
    &:before {
      content: ' ';
      display: block;
      height: 25px;
      width: 3px;
      background: black;
      position: absolute;
      transform: rotate(45deg);
      margin-left: 40%;
    }
    &:hover {
      opacity: .5;
    }
  }
`

export const ModalDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-position: -15px 0px; 
  background-size: 110% 100%;
  padding: 20px 25px;
  /* max-width: 50%; */

  h2 {
    font-size: ${normalizeFont(34)};
    font-weight: bold;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    background-image: url(${CalculatorImage});
    max-width: 50%;
  }
  @media (max-width: 768px) {
    max-height: 50%;
    padding: 20px 25px 0px 25px;
    h2 {
      margin-bottom: 10px;
      font-size: 1.5em;
    }

    p {
      font-size: .8em;
    }
  }
  @media (min-height: 700px){
    p {
      font-size: 1em;
    }
  }
`

export const SecondModalDescription = styled.p`
  color: #474747;
`

export const ModalForm = styled.div`
  flex: 1;
  position: relative;
  padding: 24px;

   /* Removes the clear button from date inputs */
  input[type="date"]::-webkit-clear-button {
      display: none;
  }

  /* Removes the spin button */
  input[type="date"]::-webkit-inner-spin-button { 
      display: none;
  }

  /* Always display the drop down caret */
  input[type="date"]::-webkit-calendar-picker-indicator {
      color: #2c3e50;
  }

  @media (max-width: 768px){
    padding: 10px 24px 10px;
    input[type="date"] {
      font-size: .8em;
      padding: 5px;
    }
    #wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      .rowDiv {
        max-width: 45%;
        font-size: .5em;
      }
      .rowDiv:nth-child(1) {
        
      }
      .rowDiv:nth-child(2) {
        
      }
    }
  }

  form {
    /* margin-top: 94px; */

    @media (min-width: 1024px) {
      margin-top: 50px;
    }

    .button-container {
      display: flex;
      justify-content: flex-end;
    }

    button {
      background-color: ${colors.black};
      font-size: 16px;
      color: ${colors.white};
      border-radius: 4px;
      padding: 10px 22px;
      border: 1px solid #000;
    }
  }
`

export const CloseIcon = styled.img`
  /* width: 15px;
  position: absolute;
  top: ${({position}) => position ? position : 20}px; 
  right: ${({position}) => position ? position : 20}px;
  cursor: pointer; */
`

export const InputField = styled.div`
  flex-direction: column;
  margin-bottom: 16px;
  flex: 1;

  label {
    font-size: 14px;
    font-weight: 600;
    color: ${colors.black}
  }

  select{
    border-radius: 4px;
    border: 1px solid #afafaf;
    background-color: ${colors.white};
    height: 40px;
    padding: 10px;
    font-size: 14px;
    color: #474747;
     width: 100%; 
  }

  input {
    width: ${({isDateField}) => isDateField ? 'calc(100%)' : `${100}%`};
    border-radius: 4px;
    border: 1px solid #afafaf;
    background-color: ${colors.white};
    height: 40px;
    padding: 10px;
    font-size: 14px;
    color: #474747;
  }
`

export const DateInputFieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  .rowDiv {
    max-width: 45%;
  }
`

export const SecondModalWrapper = styled.div`
  padding: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const SecondModalHeader = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: opacity 0.3s ease;



    p {
      margin: 0;
      margin-left: 10px;
      color: ${colors.black};
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.02em;
    }
  }

  p:hover {
    opacity: 0.7;
  }

  h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    color: ${colors.black};
  }
`

export const ModalCardContainer = styled.div`
  box-shadow: 0px 2px 8px rgba(17, 14, 27, 0.09);
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  padding: 16px 16px 10px 16px;
  border-radius: 8px;

  h3 {
    font-size: 20px;
    font-weight: 500;
    color: #1e1e1f;
    margin-bottom: 15px;
  }
`

export const CardRow = styled.div`
  display: flex;
  flex:1;
  align-items: center;


  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    margin-right: 10px;
  }

  div {
    /* margin-bottom: 8px; */

    p {
      font-size: 14px;
      display: initial;
      letter-spacing: -0.02em;
      color: #474747;
      line-height: 20px;
    }
  }
`

export const SecondModalFooter = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  h2 {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: ${colors.black};
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    letter-spacing: -0.02em;
  }

  .button-wrapper {
    align-self: flex-end;

    button {
      background-color: ${colors.black};
      font-size: 16px;
      color: ${colors.white};
      border-radius: 4px;
      padding: 10px 22px;
      border: 1px solid #000;
    }
  }
`

