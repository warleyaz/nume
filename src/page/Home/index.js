import React, { useState } from "react";
import { Wrapper } from "./style.js";
import Modal from "../../components/Modal";
import  NavBar  from "../../components/NavBar"

const travelSvg = require("../../assets/images/travel.svg");
const servicesSvg = require("../../assets/images/services.svg");
const car1 = require("../../assets/images/frota/car1.png");
const airportZoomSvg = require("../../assets/images/airportZoom.svg");

export default () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Wrapper>
      {showModal ? (
        <Modal onClose={() => setShowModal(false)}>
          <h1>oi</h1>
        </Modal>
      ) : (
        ""
      )}
      <NavBar></NavBar>
      <header>
        <h1>Reserve tranquilidade para seu trajeto</h1>
        <h4>Estamos ansiosos para viajar com você</h4>
        <button onClick={() => setShowModal(true)}>Orçar agora</button>
      </header>
      <main>
        <img src={travelSvg} alt="svg" />
        <p>
          Todos os veículos de nossa moderna frota são rastreados via satélite,
          dispõem de confortável serviço de bordo para oferecer entretenimento
          durante todo o percurso e podem ser contratados 24 horas por dia, 7
          dias por semana por diferentes canais de comunicação, como telefone,
          e-mail, WhatsApp e através da plataforma U-Van.
        </p>
        <div className="carroussel">
          <ul>
            <li>
              <h3>Freteamento</h3>
              <p>
                Evite imprevistos com esta eficiente condução. Para pequenos ou
                grandes grupos de passageiros.
              </p>
              <button>Reservar</button>
            </li>
            <li>
              <h3>Translado</h3>
              <p>
                Você personaliza um itinerário turístico e garante praticidade
                ao conhecer uma nova cidade e seus pontos de interesse.
              </p>
              <button>Reservar</button>
            </li>
          </ul>
        </div>

        <div id="services">
            <img src={servicesSvg} alt="services" />
            <p>
              Cada veículo da AZ é equipado para garantir o máximo conforto dos
              passageiros durante o percurso. Para isso, contam com TV digital,
              sistema de som, reprodutor de mídias óticas, bancos reclináveis,
              condicionamento de ar, iluminação interna para leitura, geladeira e
              vidros elétricos. A depender da necessidade do cliente, estes
              veículos estão disponíveis em duas opções de lotação máxima.
            </p>
          </div>
          <div className="carroussel">
            <img src={car1} alt="carro 10 assentos" />
          </div>
        </main>
        <footer>
          <div id="about">
            <img src={airportZoomSvg} alt="logo AirportZOOM" />
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
          </div>
          <div id="partners">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
          <div id="contact">
            <div>
              <p>PLANTÃO 24H WHATSAPP</p>
              <p>(11) 98058 6000</p>
            </div>
            <div>
              <p>CENTRAL DE RESERVAS</p>
              <p>(11) 5034 4999</p>
            </div>
            <div>
              <p>EMAIL</p>
              <p>reservas@hservice.com.br</p>
            </div>
            <div>
              <p>SÃO PAULO SP</p>
              <p>Professora Heloísa Carneiro 142</p>
              <p>Jardim aeroporto 04630-050</p>
            </div>
          </div>
          <div id="copyright">
            <span>copyright</span>
          </div>
        </footer>
      </Wrapper>
  );
};
