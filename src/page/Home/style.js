import styled from "styled-components";
import { colors } from "../../assets/colors";
import { device } from "../../assets/size.js";
const headerPng = require("../../assets/images/header.png");

export const WrapperModal = styled.div`
  @media (${device.tablet}) {
    display: flex;
    width: 100%;
    flex-direction: column;
    header {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background-image: url(${headerPng});
      background-size: auto 100%;
      h1 {
        font-size: 32px;
        text-align: center;
        padding: 2vh;
      }
      h4 {
        padding: 2vh;
      }
      button {
        background: ${colors.black};
        color: ${colors.white};
        border: none;
        height: 5vh;
        border-radius: 4px;
      }
    }
    main {
      height: auto;
    }
    footer {
      height: auto;
    }
  }
  @media (${device.laptop}) {
  }
`;
