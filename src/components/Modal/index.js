import React, { useState } from "react";
import { format, parseISO } from "date-fns";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { getPrice } from "../../services/uvan";

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
  SecondModalFooter,
  SuggestionItem,
  SuggestionsList,
  AutocompleteWrapper,
} from "./styles.js";

import closeIcon from "../../assets/images/closeIcon.svg";
import museumIcon from "../../assets/images/museum_icon.svg";
import fretamentoIcon from "../../assets/images/Fretamento.svg";
import airportIcon from "../../assets/images/airport_icon.svg";
import payment from "../../assets/images/payment.svg";
import assentIcon from "../../assets/images/assent_icon.svg";
import calendarIcon from "../../assets/images/calendar_icon.svg";
import retornoIcon from "../../assets/images/Retorno.svg";

import useSendWhatsappMessage from "../../hooks/useSendWhatsappMessage";

export default ({ id = "modal", onClose = () => {}, children }) => {
  const initialState = {
    startingPoint: "",
    destination: "",
    departureDate: "",
    arrivalDate: "",
    timeArrivalDate: "",
    timeDepartureDate: "",
    locationType: "Fretamento",
    passengerQuantity: "",
    startLatLng: "",
    arrivalLatLng: "",
  };

  const [modalScreen, setModalScreen] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const [hasArrivalInput, setHasArrivalInput] = useState(false);
  const [startLatLng, setStartLatLng] = useState({});
  const [arrivalLatLng, setArrivalLatLng] = useState({});
  const [price, setPrice] = useState();

  const sendWhatsappMessage = useSendWhatsappMessage();

  const handleCloseModal = () => {
    setFormData(initialState);
    onClose();
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const {
      departureDate,
      arrivalDate,
      timeDepartureDate,
      timeArrivalDate,
      startingPoint,
      destination,
      passengerQuantity,
      locationType,
    } = formData;

    const msg = `
    Prezado Cliente,
    Estamos a um ponto de partida para confirmar a sua pr??xima viagem com a Airport Zoom.
    Em instantes lhe enviaremos um e-mail contendo as instru????es pertinentes ?? contrata????o dos servi??os que voc?? solicitou, contendo a(s) data(s) e hor??rio(s) da(s) partida(s)/retorno(s), origem(ns)/destino(s), tipo(s) de loca????o, quantidade de passageiros e valor(es) para pagamento, a fim de processarmos sua solicita????o.
    Teremos o prazer de serv??-lo para que voc?? e seus convidados aproveitem ao m??ximo essa experi??ncia!
    Dados solicitados para or??amento:
    - ponto de partida: ${startingPoint}
    - destino: ${destination}
    - data de partida: ${departureDate} 
    - hor??rio de partida: ${timeDepartureDate}
    - data de retorno: ${arrivalDate}
    - hor??rio de retorno: ${timeArrivalDate}
    - tipo de loca????o: ${locationType}
    - quantidade de passageiros: ${passengerQuantity}
    Att.,
    Equipe Reserva AZ
    `;

    const number = 5511980586000;

    sendWhatsappMessage({ msg, number });

    handleCloseModal();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const objValues = Object.values(formData);
    const isFilled = objValues.filter((item) => item);

    if (isFilled.length < 6) {
      alert("Preencha todos os campos!");
      return;
    }

    const parseDepartureDate = parseISO(formData.departureDate);
    const departureDateFormated = format(parseDepartureDate, "dd/MM/yyyy");

    if (!formData.arrivalDate) {
      setFormData({
        ...formData,
        departureDate: departureDateFormated,
      });

      setModalScreen(2);

      return;
    }

    const parseArrivalDate = parseISO(formData.arrivalDate);
    const arrivalDateFormated = format(parseArrivalDate, "dd/MM/yyyy");

    setFormData({
      ...formData,
      departureDate: departureDateFormated,
      arrivalDate: arrivalDateFormated,
    });

    const dataObj = {
      origLat: startLatLng.lat,
      origLng: startLatLng.lng,
      destLat: arrivalLatLng.lat,
      destLng: arrivalLatLng.lng,
      serviceType: formData.locationType,
      passengers: formData.passengerQuantity,
      startDate: formData.departureDate,
      arrivalDate: formData.arrivalDate,
    };

    getPrice(dataObj)
      .then((res) => setPrice(res.data.valor))
      .catch((e) => console.log(e));

    setModalScreen(2);
  };

  const handleInputChange = (event, inputName) => {
    const value = event.target.value;

    if (inputName === "passengerQuantity" && Number(value) <= 0) return;

    setFormData({ ...formData, [inputName]: value });
  };
   const handleStartingPointingInput = (text) => {
    geocodeByAddress(text)
      .then((res) => getLatLng(res[0]))
      .then((resLatLng) => setStartLatLng({ ...resLatLng }))
      .catch((e) => console.error("Error", e));
    setFormData({...formData, startingPoint:text})
   }
  const handleDestinationInput = (text) => {
    geocodeByAddress(text)
      .then((res) => getLatLng(res[0]))
      .then((resLatLng) => setArrivalLatLng({ ...resLatLng }))
      .catch((e) => console.error("Error", e));
    setFormData({ ...formData, destination: text });
  };
  console.log(formData);
  return (
    <>
      <Layer onClick={handleCloseModal} />

      <ModalContainer>
        {modalScreen === 1 && (
          <FirstModalWrapper>
            <ModalDescription>
              <h2>Or??amento</h2>
              <p>
                Para agilizar seu atendimento, conte-nos um pouco mais sobre o
                seu itiner??rio e clique em avan??ar para selecionar o ve??culo
                desejado. Em seguida, um de nossos agentes atender?? voc?? para
                acertar cada detalhe da sua experi??ncia viajando conosco.
              </p>
            </ModalDescription>
            <ModalForm>
              <CloseIcon
                src={closeIcon}
                alt="Fechar modal"
                onClick={handleCloseModal}
              />
              <form onSubmit={handleSubmit}>
                <PlacesAutocomplete
                  value={formData.startingPoint}
                  onChange={(text) => handleStartingPointingInput(text)}
                  onSelect={handleStartingPointingInput}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => {
                    return (
                      <AutocompleteWrapper>
                        <InputField>
                          <label>Partida</label>
                          <input
                            type="text"
                            {...getInputProps({
                              placeholder: "Digite o Endere??o de Partida",
                            })}
                          />
                        </InputField>

                        {suggestions.length > 0 && (
                          <SuggestionsList>
                            {suggestions.map((suggestion) => (
                              <SuggestionItem
                                {...getSuggestionItemProps(suggestion)}
                              >
                                <p>{suggestion.description}</p>
                              </SuggestionItem>
                            ))}
                          </SuggestionsList>
                        )}
                      </AutocompleteWrapper>
                    );
                  }}
                </PlacesAutocomplete>

                <PlacesAutocomplete
                  value={formData.destination}
                  onChange={(text) => handleDestinationInput(text)}
                  onSelect={handleDestinationInput}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => {
                    return (
                      <AutocompleteWrapper>
                        <InputField>
                          <label>Destino</label>
                          <input
                            type="text"
                            {...getInputProps({
                              placeholder: "Digite o Endere??o de Destino",
                            })}
                          />
                        </InputField>

                        {suggestions.length > 0 && (
                          <SuggestionsList>
                            {suggestions.map((suggestion) => (
                              <SuggestionItem
                                {...getSuggestionItemProps(suggestion)}
                              >
                                <p>{suggestion.description}</p>
                              </SuggestionItem>
                            ))}
                          </SuggestionsList>
                        )}
                      </AutocompleteWrapper>
                    );
                  }}
                </PlacesAutocomplete>

                <DateInputFieldWrapper>
                  <InputField isDateField>
                    <label>Data de Partida</label>
                    <input
                      type="date"
                      value={formData.departureDate}
                      onChange={(event) =>
                        handleInputChange(event, "departureDate")
                      }
                    />
                  </InputField>
                  <InputField isDateField>
                    <label>Hor??rio</label>
                    <input
                      type="time"
                      value={formData.timeDepartureDate}
                      onChange={(event) =>
                        handleInputChange(event, "timeDepartureDate")
                      }
                    />
                  </InputField>
                </DateInputFieldWrapper>

                {hasArrivalInput ? (
                  <DateInputFieldWrapper>
                    <InputField isDateField>
                      <label>Data de Retorno </label>
                      <input
                        type="date"
                        value={formData.arrivalDate}
                        onChange={(event) =>
                          handleInputChange(event, "arrivalDate")
                        }
                      />
                    </InputField>

                    <InputField isDateField>
                      <label>Hor??rio</label>
                      <input
                        type="time"
                        value={formData.timeArrivalDate}
                        onChange={(event) =>
                          handleInputChange(event, "timeArrivalDate")
                        }
                      />
                    </InputField>
                  </DateInputFieldWrapper>
                ) : (
                  <div className="button-arrival">
                    <button onClick={() => setHasArrivalInput(true)}>
                      Ida e Volta
                    </button>
                  </div>
                )}

                <InputField>
                  <label>Tipo de loca????o</label>
                  <select
                    onChange={(event) =>
                      handleInputChange(event, "locationType")
                    }
                    name="Loca????o"
                    value={formData.locationType}
                  >
                    <option selected="selected" value="Fretamento">
                      Fretamento
                    </option>
                    <option value="CityTour">City Tour</option>
                    <option value="Viagens">Viagens</option>
                    <option value="Translado">Translado</option>
                  </select>
                </InputField>

                <InputField>
                  <label>Quantidade de passageiros</label>
                  <input
                    type="number"
                    value={formData.passengerQuantity}
                    onChange={(event) =>
                      handleInputChange(event, "passengerQuantity")
                    }
                  />
                </InputField>

                <div className="button-container">
                  <button type="submit">Avan??ar</button>
                </div>
              </form>
            </ModalForm>
          </FirstModalWrapper>
        )}

        {modalScreen === 2 && (
          <SecondModalWrapper>
            <SecondModalHeader>
              <div onClick={() => setModalScreen(1)}>
                <img src={retornoIcon} alt="" />
                <p>Retornar</p>
              </div>
              <CloseIcon
                src={closeIcon}
                alt="Fechar modal"
                onClick={handleCloseModal}
                position={25}
              />
            </SecondModalHeader>

            <h2>Or??amento</h2>
            <SecondModalDescription>
              J?? estamos prontos para atend??-lo! Revise os detalhes da sua
              solicita????o e clique em <strong>avan??ar.</strong>
            </SecondModalDescription>

            <ModalCardContainer>
              <h3>Detalhes do itiner??rio</h3>
              <CardRow>
                <div>
                  <img src={museumIcon} alt="icone" />
                  <p>{formData.startingPoint}</p>
                </div>{" "}
                <div>
                  <img src={fretamentoIcon} alt="icone" />
                  <p>{formData.locationType}</p>
                </div>
              </CardRow>
              <CardRow>
                <div>
                  <img src={airportIcon} alt="icone" />
                  <p>{formData.destination}</p>
                </div>
                <div>
                  <img src={assentIcon} alt="icone" />
                  <p>{`${formData.passengerQuantity} assentos`}</p>
                </div>
              </CardRow>
              <CardRow>
                <div>
                  <img src={payment} alt="icone" />
                  <p>R$ {price && price.toFixed(2)}</p>
                </div>
                <div>
                  <img src={calendarIcon} alt="icone" />
                  <p>{`${formData.departureDate} ??s ${formData.timeDepartureDate}`}</p>

                  {hasArrivalInput && (
                    <div>
                      <img src={calendarIcon} alt="icone" />
                      <p>{`${formData.arrivalDate} ??s ${formData.timeArrivalDate}`}</p>
                    </div>
                  )}
                </div>
              </CardRow>
            </ModalCardContainer>

            <SecondModalFooter>
              <div>
                <h2>Finalize sua reserva</h2>
                <p>
                  Clicar em avan??ar levar?? voc?? ao Whatsapp para ser atendido
                  por um de nossos agentes.
                </p>
              </div>
              <div className="button-wrapper">
                <button onClick={handleSubmitForm}>Avan??ar</button>
              </div>
            </SecondModalFooter>
          </SecondModalWrapper>
        )}
      </ModalContainer>
    </>
  );
};
