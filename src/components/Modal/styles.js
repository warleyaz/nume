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
  background-color: ${colors.white};
  position: fixed;
  top: 100px;
  left: 400px;
  width: 50%;
  height: 80vh;
  z-index: 200;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(17, 14, 27, 0.09);
`

export const FirstModalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const ModalDescription = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-image: url(${CalculatorImage});
  background-size: cover;
  padding: 40px 30px;
  max-width: 50%;

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
  position: relative;
  padding: 24px;

  form {
    margin-top: 94px;

    @media (max-width: 1500px) {
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
    width: ${({isDateField}) => isDateField ? 'calc(100% - 12px)' : `${100}%`};
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
  justify-content: space-between;
  align-items: center;
  padding-right: 40%;

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    margin-right: 10px;
  }

  div {
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

// export const Modal = styled.div`
//   position: absolute;
//   display: flex;
//   top: 0;
//   left: 0;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
//   z-index: 100;
//   background-color: rgba(0, 0, 0, 0.5);
  
//   @media (${device.laptop}) {
//     #container {
//       width: 80%;
//       height: 80%;
//       background-color: ${colors.white};
//       box-shadow: 0px 2px 8px rgba(17, 14, 27, 0.09);
//       border-radius: 16px;
//       #close {
//         position: relative;
//         left: 92%;
//         top: 2%;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background: transparent;
//         width: 32px;
//         height: 32px;
//         border: none;
//         &::before,
//         &::after {
//           content: " ";
//           position: absolute;
//           width: 2.5px;
//           height: 24px;
//           background-color: ${colors.black};
//         }
//         &::before {
//           transform: rotate(45deg);
//         }
//         &::after {
//           transform: rotate(-45deg);
//         }
//       }
//     }
//   }

//   @media (${device.tablet}) {
//     #container {
//       width: 95%;
//       height: 90%;
//       background-color: ${colors.white};
//       box-shadow: 0px 2px 8px rgba(17, 14, 27, 0.09);
//       border-radius: 16px;
//       #close {
//         position: relative;
//         left: 85%;
//         top: 1%;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background: transparent;
//         width: 32px;
//         height: 32px;
//         border: none;
//         &::before,
//         &::after {
//           content: " ";
//           position: absolute;
//           width: 2.5px;
//           height: 24px;
//           background-color: ${colors.black};
//         }
//         &::before {
//           transform: rotate(45deg);
//         }
//         &::after {
//           transform: rotate(-45deg);
//         }
//       }
//     }
//   }
// `;
