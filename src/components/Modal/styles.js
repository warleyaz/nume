import styled, {css} from "styled-components";
import { colors } from "../../assets/colors";
import { normalizeFont } from "../../assets/size";

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
  background-color: ${colors.white};
  box-shadow: 0px 2px 8px rgba(17, 14, 27, 0.09);
  position: fixed;
  z-index: 200;
  border-radius: 16px;
  @media (min-width: 200px) {
    width: 100vw;
    top: 10vh;
    position: absolute;
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
  } 
  @media (min-width: 1200px) {
    width: 60vw;
    top: 10vh;
    left: 20vw;
    position: fixed;
  } 
`

export const FirstModalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`

export const ModalDescription = styled.div`
  flex: 1;
  width: 100%;
  background-image: url(${CalculatorImage});
  background-size: cover;
  padding: 40px 30px;
  max-width: 50%;
  @media (min-width: 200px) {
    max-width: 100%;
  }
  h2 {
    font-size: ${normalizeFont(34)};
    font-weight: bold;
    margin-bottom: 40px;
  }
`

export const SecondModalDescription = styled.p`
  color: #474747;
`

export const ModalForm = styled.div`
  flex: 1;
  padding: 24px;
  form {
    @media (min-width: 200px) {
      margin-top: 0px;
    }
    @media (min-width: 555px) {
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
    .button-arrival {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export const CloseIcon = styled.img`
  width: 15px;
  position: absolute;
  top: ${({position}) => position ? position : 20}px; 
  right: ${({position}) => position ? position : 20}px;
  cursor: pointer;
`

export const InputField = styled.div`
  flex-direction: column;
  margin-bottom: 16px;
  flex: 1;
  ${({isDateField}) => isDateField ? css`
      max-width: 48%;
    ` : null}
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
    width: 100%;
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
  justify-content: space-between;
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
  flex-wrap: wrap;
  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    margin-right: 10px;
  }
  div {
    min-width: 200px;
    flex: 1;
    margin-bottom: 8px;
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