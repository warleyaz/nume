import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import FretamentoIcon from "../../assets/images/Fretamento.svg";
import CityIcon from "../../assets/images/CityTour.svg";
import ViagensIcon from "../../assets/images/Viagens.svg";
import TransladoIcon from "../../assets/images/Translado.svg";

import { SliderCardContainer, SliderContainer } from "./styles";

const SliderCard = ({icon, title, description }) => (
  <div>
    <img src={icon} alt="Icone" />
    <h2>{title}</h2>
    <div className="content-wrapper" >
      <p>{description}</p>
      <button>Reservar</button>
    </div>
  </div>
);

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } 
    ]
  };

  return (
    <>
      <SliderContainer {...settings} className="slider-container" >
        <SliderCardContainer>
          <SliderCard icon ={FretamentoIcon} title="FRETAMENTO" description="Evite imprevistos com esta eficiente condução. Para pequenos ou grandes grupos de passageiros." />
        </SliderCardContainer>

        <SliderCardContainer>
          <SliderCard icon ={CityIcon} title="CITY TUR" description="Você personaliza um itinerário turístico e garante praticidade ao conhecer uma nova cidade e seus pontos de interesse." />
        </SliderCardContainer>

        <SliderCardContainer>
          <SliderCard icon ={ViagensIcon} title="VIAGENS" description="Para quem não abre mão da comodidade e segurança ao viajar em grupo, a AZ permite ao passageiro aproveitar a viagem do início ao fim." />
        </SliderCardContainer>

        <SliderCardContainer>
          <SliderCard icon ={TransladoIcon} title="TRANSLADO" description="Oferecemos deslocamento ágil e de confiança. Ideal para reuniões, eventos corporativos e transporte aeroportuário." />
        </SliderCardContainer>
        
      </SliderContainer>
  </>
  )
};

export default SliderComponent; 