import styled from "styled-components";
import { colors } from "../../assets/colors";
import { device } from "../../assets/size";

export const Modal = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  @media (${device.laptop}) {
    #container {
      width: 80%;
      height: 80%;
      background-color: ${colors.white};
      box-shadow: 0px 2px 8px rgba(17, 14, 27, 0.09);
      border-radius: 16px;
      #close {
        position: relative;
        left: 92%;
        top: 2%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        width: 32px;
        height: 32px;
        border: none;
        &::before,
        &::after {
          content: " ";
          position: absolute;
          width: 2.5px;
          height: 24px;
          background-color: ${colors.black};
        }
        &::before {
          transform: rotate(45deg);
        }
        &::after {
          transform: rotate(-45deg);
        }
      }
    }
  }

  @media (${device.tablet}) {
    #container {
      width: 95%;
      height: 90%;
      background-color: ${colors.white};
      box-shadow: 0px 2px 8px rgba(17, 14, 27, 0.09);
      border-radius: 16px;
      #close {
        position: relative;
        left: 85%;
        top: 1%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        width: 32px;
        height: 32px;
        border: none;
        &::before,
        &::after {
          content: " ";
          position: absolute;
          width: 2.5px;
          height: 24px;
          background-color: ${colors.black};
        }
        &::before {
          transform: rotate(45deg);
        }
        &::after {
          transform: rotate(-45deg);
        }
      }
    }
  }
`;
