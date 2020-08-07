import styled from "styled-components";
import {colors} from "../../assets/colors";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 80px;
`
export const ContentWrapper = styled.main`
  max-width:50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImgTravel = styled.img`
  width: 50vw;
  
`
export const ServicesTravel = styled.img` 
  width: 50vw;
  margin-bottom: 40px;

`

export const Car = styled.img`
  width: 100%;

`
const GenericWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{

  font-size: 16px;
  line-height: 24px;
  text-align: justify;
  letter-spacing: 0.02em;
  }
`

export const ApresentationWrapper = styled(GenericWrapper)`
`

export const VehicleWrapper = styled(GenericWrapper)`
  align-items: initial;

 div{
   display: flex;
   justify-content: space-between;
    margin-top: 24px;
 }
`
export const VehicleCard = styled.div`
  border-radius: 8px 8px 0px 0px;
  width: 48.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  div{
    display: flex;
    width: 100%;
    height: 52px;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 8px rgba(17,14,27,0.09);
    border-radius: 8px;

    p{
    font-size:16px;
    text-align: center;
    font-weight: 500;
  }

  }

 
`
