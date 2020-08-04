import React, { useState } from "react";
import { Wrapper } from "./style.js";
import Modal from "../../components/Modal";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import MainSection from "../../components/MainSection";
import Footer from "../../components/Footer";

const travelSvg = require("../../assets/images/travel.svg");
const servicesSvg = require("../../assets/images/services.svg");
const car1 = require("../../assets/images/frota/car1.png");
const airportZoomSvg = require("../../assets/images/airportZoom.svg");


export default () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavBar />
      <Header setShowModal={() => setShowModal(true)} />
      <MainSection />
      <Footer />

      {showModal ? (
        <Modal onClose={() => setShowModal(false)}>
          <h1>oi</h1>
        </Modal>
      ) : (
        ""
      )}
      </>
      )
}   

  
