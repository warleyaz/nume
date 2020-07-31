import React from "react";

import {BackgroundImage, BannerContent} from "./styles"


const Header = ({setShowModal}) => {
  return ( 
    <BackgroundImage> 
      <BannerContent> 
        <h1>Reserve tranquilidade para seu trajeto</h1>
        
        <h4>Estamos ansiosos para viajar com você</h4>
        
        <button onClick={setShowModal}>Orçar agora</button>

      </BannerContent>
    </BackgroundImage>
  )    
};

export default Header;


