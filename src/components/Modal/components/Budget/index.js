import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { WrapperModal } from "./style.js";

export default () => {
  const [initialDate, setInitialDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [setup, setSetup] = useState(false);
  const [type, setType] = useState("translado");

  function handleNext() {
    if (location && destination && count !== 0) {
      setSetup(true);
    } else {
      alert("preencha todos os campos");
    }
  }

  function sendMessageWhatsapp() {
    console.log("oi");
  }

  return setup ? (
    <WrapperModal>
      <header>
        <h1>Orçamento</h1>
        <p>
          Já estamos prontos para atendê-lo! Revise os detalhes da sua
          solicitação e clique em avançar.
        </p>
      </header>
      <main>
        <h3>Detalhes do itinerário</h3>
        <p>{location}</p>
        <p>{destination}</p>
        <p>{initialDate.toLocaleDateString("pt-br")}</p>
        <p>{count} assentos</p>
        <p>valor</p>
      </main>
      <footer>
        <h3>Finalize sua reserva</h3>
        <p>
          Clicar em avançar levará você ao Whatsapp para ser atendido por um de
          nossos agentes.
        </p>
      </footer>
      <button onClick={() => sendMessageWhatsapp()}>Avançar</button>
    </WrapperModal>
  ) : (
    <WrapperModal>
      <header>
        <h1>Orçamento</h1>
        <p>
          Para agilizar seu atendimento, conte-nos um pouco mais sobre o seu
          itinerário e clique em avançar para selecionar o veículo desejado. Em
          seguida, um de nossos agentes atenderá você para acertar cada detalhe
          da sua experiência viajando conosco.
        </p>
      </header>
      <main>
        <label htmlFor="location">Ponto de partida</label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        <label htmlFor="destination">Destino</label>
        <input
          type="text"
          name="destination"
          id="destination"
          onChange={(e) => setDestination(e.target.value)}
          value={destination}
        />
        <div>
          <div className="container">
            <label htmlFor="date-start">Data de partida</label>
            <DatePicker
              selected={initialDate}
              onChange={(date) => setInitialDate(date)}
              name="date-start"
              id="date-start"
            />
          </div>
          <div className="container">
            <label htmlFor="date-finish">Data de retorno</label>
            <DatePicker
              selected={finishDate}
              onChange={(date) => setFinishDate(date)}
              name="date-finish"
              id="date-finish"
            />
          </div>
          <div className="container">
            <label htmlFor="type">Tipo de locação</label>
            <select selected={type} name="type" id="type">
              <option value="freteamento">Freteamento</option>
              <option value="translado">Translado</option>
            </select>
          </div>
          <div className="container">
            <label htmlFor="count">Quantidade de passageiros</label>
            <input
              type="text"
              value={count}
              name="count"
              id="count"
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
        </div>
        <button onClick={() => handleNext()}>Avançar</button>
      </main>
    </WrapperModal>
  );
};
