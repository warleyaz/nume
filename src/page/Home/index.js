import React, { useState, useRef } from "react";
import { Wrapper } from "./style.js";
import Modal from "../../components/Modal";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import MainSection from "../../components/MainSection";
import Footer from "../../components/Footer";

export default () => {
  const [showModal, setShowModal] = useState(false);
  const footerRef = useRef(null);

  const handleFooterLink = () => {
    if (!footerRef) {
      return;
    }
    const offsetValue = footerRef.current.offsetTop;
    // window.scrollY = offsetValue;
  }

  return (
    <>
      <NavBar handleFooterLink={handleFooterLink} />
      <Header setShowModal={() => setShowModal(true)} />
      <MainSection />
      <Footer footerRef={footerRef}/>

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

  
