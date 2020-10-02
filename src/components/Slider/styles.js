import styled from "styled-components";
import {colors} from "../../assets/colors";
import Slider from "react-slick";

export const SliderContainer = styled(Slider)`
  @media(max-width: 800px) {
    max-width: 80vw;
  }
`

export const SliderCardContainer = styled.div`
  width: 212px;
  height: 400px;
  height: 100%;
  padding: 20px 0 20px 20px;

  div:first-child {
    display: flex;
    box-shadow: 0 2px 8px rgba(17, 14, 27, 0.09);
    border-radius: 8px;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    
    @media(min-width: 1000px) {
      height: 20vw;
    }

    img {
      width: 25px;
      height: 25px;
    }

    h2 {
      font-weight: 500;
      margin-top: 12px;
      font-size: 18px;
      color: ${colors.black};
      letter-spacing: 0.08em;
      text-align: center;
      text-transform: uppercase;
    }

    .content-wrapper {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      p {
        margin-top: 16px;
        font-size: 14px;
        letter-spacing: -0.02em;
        color: #474747;
        line-height: 20px;
      }

      button {
        padding: 10px 16px;
        background: ${colors.black};
        color: ${colors.white};
        font-size: 16px;
        letter-spacing: -0.02em;
        border: 0px;
        border-radius: 4px;
        margin-top: 24px;
      }
    }

  }
`