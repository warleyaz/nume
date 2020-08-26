import styled from "styled-components";
import {colors} from "../../assets/colors"

export const Container = styled.footer`
  display: flex;
  flex-direction: column;

`

export const ContainerAbout = styled.div`
  background-color:#474747;
  display: flex;
  height: 296px;
  align-items: center;
  justify-content: center;
  margin-top: 55px;
  @media(max-width: 800px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 15px;
  }

  p{
    color: ${colors.white};
    font-size: 16px;
    max-width: 35vw;
    margin-left: 50px;
    line-height: 24px; 
    letter-spacing: -0.02em;  
    text-align: justify;
    @media(max-width: 800px) {
      font-size: 14px;
      max-width: 80vw;
      margin-left: 12px;
      line-height: 18px;
      margin-top: -20px;
    }
  }
`
export const LogoFooter = styled.img`
  height: 170px;
  width: 170px;
  align-items: center; 
  @media(max-width: 800px) {
    width: 90px;
  }
`
export const Licenses = styled.div`
  width: 100%;
  display:flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 15px;
  
  img{
    width: 180px;
    @media(max-width: 800px) {
   width: 100px;
  }
  }  
`
export const Informations = styled.div`
  background-color: #474747;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 10px 20%;
  @media(max-width: 800px) {
    padding: 10px 30px 10px 15px;
    justify-content: space-between;
    flex-flow: wrap;
  }
`
export const FirstColumn = styled.div`
  color: #E2E2E2;
  line-height: 20px;
  align-items: center;
  letter-spacing: -0.02em;
  font-size: 12px;
  p { 
    margin-bottom: 0;
  }
  @media(max-width: 800px) {
    margin-bottom: 18px;
  }
`
export const SecondColumn = styled.div`
  color: #E2E2E2;
  line-height: 20px;
  align-items: center;
  letter-spacing: -0.02em;
  font-size: 12px;  
  p { 
    margin-bottom: 0;
  }
`
export const ThirdyColumn = styled.div`
  color: #E2E2E2;
  line-height: 20px;
  align-items: center;
  letter-spacing: -0.02em;
  font-size: 12px;
  p { 
    margin-bottom: 0;
  }
`
export const FourthColumn = styled.div`
  color: #E2E2E2;
  line-height: 20px;
  align-items: center;
  letter-spacing: -0.02em;
  font-size: 12px;
  p { 
    margin-bottom: 0;
  }
`
export const Copyright = styled.div`
  display: flex;
  color:#6B6B6B;
  align-items: center;
  justify-content: center;
  padding:16px;
  background-color: #F0F0F0;
  
  span{
    font-size: 12px;
    letter-spacing: -0.02em;
  }
`

