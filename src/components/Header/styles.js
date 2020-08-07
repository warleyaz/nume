import styled from "styled-components";
import {colors} from "../../assets/colors";

import bannerImage from "../../assets/images/header.png";

export const BackgroundImage = styled.header`
  display: flex;
  background-image: url(${bannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
  align-items: center;
  justify-content: center;  
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px; 
  align-items: center;

  h1 {
    font-size:44px;
    font-weight: bold;
    text-align: center;
    line-height: 52px;
    color: ${colors.black};
  }

  h4 {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${colors.black};
    margin-top: 20px;
    margin-bottom: 40px;
  }

  button {
    color: ${colors.white};
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    background-color: ${colors.black};
    border-radius: 4px;
    padding: 13.5px 15px;
    letter-spacing: -0.02em;
    border: 0;
    font-weight: bold;
    cursor: pointer;
  }
`

