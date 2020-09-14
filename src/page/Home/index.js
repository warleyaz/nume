import React, { useState, useRef, useEffect } from "react";

import Modal from "../../components/Modal";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import MainSection from "../../components/MainSection";
import Footer from "../../components/Footer";
import Popup from "../../components/Popup";

export default () => {
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const footerRef = useRef();
  const servicesRef = useRef();

  const scrollToRef = (ref) => {
    console.log(ref.current.offsetTop);
    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <div style={{ position: "relative" }}>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <NavBar
        handleClick={scrollToRef}
        setShowModal={() => setShowModal(true)}
        refs={{ footerRef, servicesRef }}
      />
      <Header setShowModal={() => setShowModal(true)} />
      <MainSection servicesRef={servicesRef} />
      <Footer footerRef={footerRef} />
    </div>
  );
};
