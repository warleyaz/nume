import React, { useState } from "react";

import {Container, Layer} from "./styles"

const PopUp = ({onClose}) => {
  return (
    <>
      <Layer onClick={() => onClose()}/>

      <Container> 
        <p>
          Observando a evolução da Pandemia da Covid-19 e 
          orientados por protocolos sanitários e de proteção recomendados 
          pelas autoridades de saúde responsáveis, adotamos medidas preventivas 
          em nossas operações diárias, pensando no bem estar dos nossos 
          colaboradores e clientes, a fim de preservar a sua segurança e saúde, 
          tais como: lavagem e desinfecção de superfícies internas do veículo, 
          nas quais os clientes e colaboradores circulam e tocam frequentemente; 
          reforço da importância do uso de máscaras e sua correta utilização; 
          monitoração corporal térmica dos motoristas durante o período de 
          trabalho e dos passageiros durante o embarque; implementação do novo 
          layout interno da cabine do veículo, interditando/desativando os 
          assentos entre passageiros, com  sinalização de “USO PROIBIDO”, 
          mantendo dessa forma a distância de 1,5m uma da outra; disponibilização 
          de dispenser de álcool 70%, nas formas líquida, gel, spray, espuma 
          e/ou outro disponível, sempre em local estratégico.
        </p>
        <div className="button-container">
          <button type="button" onClick={() => onClose()}>Entendi</button>
        </div> 
      </Container>
    </>

  )
}
export default PopUp

