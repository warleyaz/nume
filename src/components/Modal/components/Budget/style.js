import styled from "styled-components";
import { colors } from "../../../../assets/colors";
import { device } from "../../../../assets/size.js";
const headerPng = require("../../../../assets/images/header.png");

export const WrapperModal = styled.div`
  @media (${device.tablet}) {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    font-size: 1em;
    header {
      margin: auto 10%;
      margin-top: -10%;
      margin-bottom: 10%;
      h1 {
        font-size: 1.5em;
        margin: 5% auto;
      }
      p {
        text-align: justify;
      }
    }
    main {
      margin: auto 10%;
      display: flex;
      flex-direction: column;
      button {
        background: ${colors.black};
        color: ${colors.white};
        height: 2.4em;
        border: none;
        border-radius: 4px;
        width: 50%;
        position: absolute;
        bottom: 10%;
        right: 10%;
      }
      label {
        font-weight: 500;
        margin-top: 1em;
        margin-bottom: 0.4em;
      }
      input {
        background: ${colors.white};
        border: 1px solid ${colors.gray};
        border-radius: 4px;
        height: 2.4em;
      }
      div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .container {
          display: flex;
          flex-direction: column;
          width: 50%;
          label {
            width: 100%;
          }
          input {
            width: 100%;
          }
          select {
            background: ${colors.white};
            border: 1px solid ${colors.gray};
            border-radius: 4px;
            height: 2.4em;
          }
          &:nth-child(1) {
            padding-right: 0.4em;
          }
          &:nth-child(3) {
            margin-top: 1em;
          }
          &:last-child {
            padding-left: 0.4em;
          }
        }
      }
    }
  }
  @media (${device.laptop}) {
  }
`;
