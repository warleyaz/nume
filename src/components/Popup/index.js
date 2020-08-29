import React, { useState } from "react";

import {Container, Layer} from "./styles"

const PopUp = ({onClose}) => {
  return (
    <>
      <Layer onClick={() => onClose()}/>

      <Container> 
        <p>
          Observando a evolução da pandemia da Covid-19 e orientados por protocolos 
          sanitários e de proteção recomendados pelas autoridades responsáveis, 
          adotamos medidas preventivas em nossas operações diárias, 
          pensando no bem estar dos nossos colaboradores e clientes, 
          preservando sua  segurança e saúde tais:  
          Assegurando lavagem e desinfecção de superfícies internos do veículo onde 
          os clientes e colaboradores circulam e tocam frequentemente;  
          reforçamos a importância do uso de máscaras e sua correta utilização, 
          monitoração corporal térmica dos nossos motoristas durante o período de trabalho 
          e dos passageiros durante o embarque;  
          implementando novo Layout interno da cabine do veículo interditando/desativando 
          os assentos entre passageiros com sinalização  de “USO PROÍBIDO” mantendo 
          dessa forma a distância de 1,5 Metros uma da outra assim como dispenser de 
          álcool em gel, nas formas líquida, gel, spray, espuma e ou outro disponível 
          em local estratégico.
        </p>
        <div className="button-container">
          <button type="button" onClick={() => onClose()}>Entendi</button>
        </div> 
      </Container>
    </>

  )
}
export default PopUp

