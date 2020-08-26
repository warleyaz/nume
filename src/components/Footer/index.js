import React from "react";
import Logo from "../../assets/images/airportZoom.svg";
import CadastrurLicense from "../../assets/images/Cadastrur.png";
import EmbraturLicense  from "../../assets/images/Embratur.png";
import AnttLicense  from "../../assets/images/Antt.png";
import SptransLicense  from "../../assets/images/SPTrans.png";
import ArtespLicense  from "../../assets/images/ARTESP.png";
import EmtuLicense  from "../../assets/images/EMTU.png";

import {
  Container,
  ContainerAbout,
  LogoFooter,
  Licenses,
  Informations,
  FirstColumn,
  SecondColumn,
  ThirdyColumn,
  FourthColumn,
  Copyright,
} from "./styles";

const Footer = ({footerRef}) => {
  return (
    <Container>   
      <ContainerAbout ref={footerRef}>
        <LogoFooter src={Logo} alt="Logo AirportZoom"/>
        <p>
        Fundada em São Paulo no ano de 2019, a Airport Zoom é uma empresa de
        transporte de passageiros que valoriza, sobretudo, a experiência do
        usuário. Por isso, contamos com uma equipe de motoristas
        certificados e capacitados para garantir a segurança e satisfação do
        cliente em situações ordinárias e extraordinárias. Nós da AZ
        prezamos pela pontualidade, cordialidade e excelência em nossos
        serviços, e temos como principal objetivo honrar a relação
        custo-benefício no transporte de passageiros.
        </p>

      </ContainerAbout>  

      <Licenses>
      <img src={CadastrurLicense} alt="Logo Cadastrur" />
      <img src={EmbraturLicense} alt="Logo Embratur" />
      <img src={AnttLicense} alt="Logo ANTT" />
      <img src={SptransLicense} alt="Logo SPTrans" />
      <img src={ArtespLicense} alt="Logo Artesp" />
      <img src={EmtuLicense} alt="Logo EMTU" />
      </Licenses>
           
      <Informations>
        <FirstColumn>
          <p>SÃO PAULO SP</p>
          <p>Professora Heloísa Carneiro 142</p>
          <p>Jardim aeroporto 04630-050</p>
        </FirstColumn>
        <SecondColumn>
          <p>EMAIL</p>
          <p>reservas@hservice.com.br</p>
        </SecondColumn>
        <ThirdyColumn>
          <p>CENTRAL DE RESERVAS</p>
          <p>(11) 5034 4999</p>
        </ThirdyColumn>
        <FourthColumn>
          <p>PLANTÃO 24H WHATSAPP</p>
          <p>(11) 98058 6000</p>
        </FourthColumn>
      </Informations>
      
      <Copyright>
        <span>Copyright</span>

      </Copyright>  
    </Container>      
  )
}

export default Footer;