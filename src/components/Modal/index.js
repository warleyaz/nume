import React, { useState } from "react";
import {format, parseISO} from 'date-fns';
import { 
  ModalContainer,
  Layer,
  FirstModalWrapper,
  ModalDescription,
  ModalForm,
  CloseIcon,
  InputField,
  DateInputFieldWrapper,
  SecondModalWrapper,
  SecondModalHeader,
  SecondModalDescription,
  ModalCardContainer,
  CardRow,
  SecondModalFooter
} from "./styles.js";

import closeIcon from '../../assets/images/closeIcon.svg';
import museumIcon from '../../assets/images/museum_icon.svg';
import fretamentoIcon from '../../assets/images/Fretamento.svg';
import airportIcon from '../../assets/images/airport_icon.svg';
import payment from '../../assets/images/payment.svg';
import assentIcon from '../../assets/images/assent_icon.svg';
import calendarIcon from '../../assets/images/calendar_icon.svg';
import retornoIcon from '../../assets/images/Retorno.svg';

import useSendWhatsappMessage from '../../hooks/useSendWhatsappMessage';

export default ({ id = "modal", onClose = () => {}, children }) => {
  const initialState = {
    startingPoint: '',
    destination: '',
    departureDate: '',
    arrivalDate: '',
    timeArrivalDate: '',
    timeDepartureDate: '',
    locationType: 'Fretamento',
    passengerQuantity: '',
  };

  const [modalScreen, setModalScreen] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const [hasArrivalInput, setHasArrivalInput] = useState(false);
  
  console.log(formData)
  
  const sendWhatsappMessage = useSendWhatsappMessage();

  const handleCloseModal = () => {
    setFormData(initialState);
    onClose();
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const {departureDate, arrivalDate, timeDepartureDate, timeArrivalDate,startingPoint, destination, passengerQuantity} = formData;

    const msg = `
      Olá desejo reservar uma viagem para o dia ${departureDate} as ${timeDepartureDate} horas ${hasArrivalInput ? `E a sua volta para o dia ${arrivalDate} ás ${timeArrivalDate}`: '' } do local ${startingPoint} até o local ${destination} para ${passengerQuantity} passageiros no valor de R$ 350,00. Podemos confirmar ?
    `

    const number = 5511984586000;

    sendWhatsappMessage({msg, number});

    handleCloseModal();
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const objValues = Object.values(formData);
    const isFilled = objValues.filter((item) => item);

    if (isFilled.length < 6) {
      alert('Preencha todos os campos!');
      return;
    }

    const parseDepartureDate = parseISO(formData.departureDate);
    const departureDateFormated = format(parseDepartureDate, 'dd/MM/yyyy');
    
    if(!formData.arrivalDate){
      setFormData({
        ...formData,
        departureDate: departureDateFormated,
      });

      setModalScreen(2);
      
      return;
    }

    const parseArrivalDate = parseISO(formData.arrivalDate);
    const arrivalDateFormated = format(parseArrivalDate, 'dd/MM/yyyy');

    setFormData({
      ...formData,
      departureDate: departureDateFormated,
      arrivalDate: arrivalDateFormated
    });

    setModalScreen(2);
  }

  const handleInputChange = (event, inputName) => {
    const value = event.target.value;
    
    setFormData({...formData, [inputName]: value});
  }

  return (
    <>
      <Layer onClick={handleCloseModal}/>

      <ModalContainer>
        {modalScreen === 1 && (
          <FirstModalWrapper>
            <ModalDescription>
              <h2>Orçamento</h2>
              <p>
                Para agilizar seu atendimento, conte-nos um pouco mais sobre o seu
                itinerário e clique em avançar para selecionar o veículo desejado. Em
                seguida, um de nossos agentes atenderá você para acertar cada detalhe
                da sua experiência viajando conosco.
              </p>
            </ModalDescription>
            <ModalForm>
              <CloseIcon src={closeIcon} alt="Fechar modal" onClick={handleCloseModal}/>
              <form onSubmit={handleSubmit}>
                <InputField>
                  <label>Ponto de partida</label>
                  <input type="text" value={formData.startingPoint} onChange={(event) => handleInputChange(event, 'startingPoint')} />
                </InputField>

                <InputField>
                  <label>Destino</label>
                  <input type="text" value={formData.destination} onChange={(event) => handleInputChange(event, 'destination')} />
                </InputField>

                <DateInputFieldWrapper>
                  <InputField isDateField>
                    <label>Data de Partida</label>
                    <input type="date" value={formData.departureDate} onChange={(event) => handleInputChange(event, 'departureDate')} />       
                  </InputField>
                  <InputField isDateField>
                    <label>Horário Partida</label>
                    <input type="time" value={formData.timeDepartureDate} onChange={(event) => handleInputChange(event, 'timeDepartureDate')} />
                  </InputField>                  
                </DateInputFieldWrapper>


                {hasArrivalInput ? (
                  <DateInputFieldWrapper>
                    <InputField isDateField>
                      <label>Data de Retorno </label>
                      <input type="date" value={formData.arrivalDate} onChange={(event) => handleInputChange(event, 'arrivalDate')} />
                    </InputField>

                    <InputField isDateField>
                      <label>Horário de Retorno</label>
                      <input type="time" value={formData.timeArrivalDate} onChange={(event) => handleInputChange(event, 'timeArrivalDate')} />
                    </InputField>
                  </DateInputFieldWrapper>
                  ) : 
                  <div className="button-arrival">
                    <button onClick={() => setHasArrivalInput(true)} >Ida e Volta</button>
                  </div>
                }
                

                <InputField>
                  <label>Tipo de locação</label>
                    <select onChange={(event) => handleInputChange(event, 'locationType')} name="Locação"value={formData.locationType}>
                      <option selected="selected" value="Fretamento">Fretamento</option>
                      <option value="CityTour">City Tour</option>
                      <option value="Viagens">Viagens</option>
                      <option value="Translado">Translado</option>
                    </select>

                </InputField>

                <InputField>
                  <label>Quantidade de passageiros</label>
                  <input type="number" value={formData.passengerQuantity} onChange={(event) => handleInputChange(event, 'passengerQuantity')} />
                </InputField>
      
                <div className="button-container">
                  <button type="submit">Avançar</button>
                </div> 
                
              </form>

            </ModalForm>
          </FirstModalWrapper>
        )}

          {modalScreen === 2 && (
            <SecondModalWrapper>
              <SecondModalHeader>
                <div onClick={() => setModalScreen(1)}>
                  <img src={retornoIcon} alt =""/>
                  <p>Retornar</p>
                </div>
                <CloseIcon 
                  src={closeIcon} 
                  alt="Fechar modal" 
                  onClick={handleCloseModal} 
                  position={25}
                />
              </SecondModalHeader>

              <h2>Orçamento</h2>
              <SecondModalDescription>
                Já estamos prontos para atendê-lo! Revise os detalhes da sua solicitação e clique em <strong>avançar.</strong>
              </SecondModalDescription>

              <ModalCardContainer>
                <h3>Detalhes do itinerário</h3>
                <CardRow>
                  <div>
                    <img src={museumIcon} alt="icone"/> 
                    <p>{formData.startingPoint}</p>
                  </div>                  <div>
                    <img src={fretamentoIcon} alt="icone"/> 
                    <p>{formData.locationType}</p>
                  </div>
                </CardRow>
                <CardRow>
                  <div>
                    <img src={airportIcon} alt="icone"/> 
                    <p>{formData.destination}</p>
                  </div>
                  <div>
                    <img src={assentIcon} alt="icone"/> 
                    <p>{`${formData.passengerQuantity} assentos`}</p>
                  </div>
                </CardRow>
                <CardRow>
                  <div>
                    <img src={payment} alt="icone"/> 
                    <p>R$ 500,23</p>
                  </div>
                  <div>                    
                      <img src={calendarIcon} alt="icone"/> 
                      <p>{`${formData.departureDate} ás ${formData.timeDepartureDate}`}</p>
 
                  {hasArrivalInput && (
                      <div>
                        <img src={calendarIcon} alt="icone"/> 
                        <p>{`${formData.arrivalDate} ás ${formData.timeArrivalDate}`}</p>
                      </div>
                    )}
                  </div>
                </CardRow>
              </ModalCardContainer>

              <SecondModalFooter>
                <div>
                  <h2>Finalize sua reserva</h2>
                  <p>Clicar em avançar levará você ao Whatsapp para ser atendido por um de nossos agentes.</p>
                </div>
                <div className="button-wrapper">
                  <button onClick={handleSubmitForm} >Avançar</button>
                </div>
                
              </SecondModalFooter>

              
            </SecondModalWrapper>
          )}
      </ModalContainer>
    </>
    
  );
};
