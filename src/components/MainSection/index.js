import React from "react";
import Slider from "../../components/Slider";

import TravelIlustration from "../../assets/images/travel.svg";
import ServicesIlustration from "../../assets/images/services.svg";
import CarImage from "../../assets/images/van1.png";
import SeatsImage from "../../assets/images/van2.png";

import {
  Container,
  ImgTravel,
  ContentWrapper,
  ApresentationWrapper,
  VehicleWrapper,
  ServicesTravel,
  Car,
  VehicleCard
} from "./styles";

const MainSection = ({servicesRef}) => {
  return (
    <Container>
      <ContentWrapper>
        <ApresentationWrapper> 
          <ImgTravel src={TravelIlustration} alt="Ilustração de Viagem"/>

          <p ref={servicesRef}>
            Todos os veículos de nossa moderna frota são rastreados via satélite,
            dispõem de confortável serviço de bordo para oferecer entretenimento
            durante todo o percurso e podem ser contratados 24 horas por dia, 7
            dias por semana por diferentes canais de comunicação, como telefone,
            e-mail, WhatsApp e através da plataforma U-Van.
          </p>
        </ApresentationWrapper>

        <Slider></Slider>
        <VehicleWrapper>
          <ServicesTravel src={ServicesIlustration} alt="Ilustração dos Serviços de Cada Veiculo"/>
            <p>
              Cada veículo da AZ é equipado para garantir o máximo conforto dos
              passageiros durante o percurso. Para isso, contam com TV digital,
              sistema de som, reprodutor de mídias óticas, bancos reclináveis,
              condicionamento de ar, iluminação interna para leitura, geladeira e
              vidros elétricos. A depender da necessidade do cliente, estes
              veículos estão disponíveis em duas opções de lotação máxima.
            </p>

          <div> 
            <VehicleCard>
              <Car src={SeatsImage} alt="Imagem Interna da Frota da Empresa"/>
              <div>
                <p>ATÉ 10 ASSENTOS</p>
              </div>
              

            </VehicleCard>
            <VehicleCard>
              <Car src={CarImage} alt="Imagem do Carro da Frota da Empresa"/>
              <div>
                <p>ATÉ 10 ASSENTOS</p>
              </div>
             

            </VehicleCard>
          </div>
        </VehicleWrapper>

      </ContentWrapper>
    </Container>
  )
}

export default MainSection;