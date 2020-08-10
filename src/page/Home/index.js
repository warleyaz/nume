import React, { useState, useRef } from "react";

import Modal from "../../components/Modal";
import Budget from "../../components/Modal/components/Budget";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import MainSection from "../../components/MainSection";
import Footer from "../../components/Footer";

export default () => {
  const [showModal, setShowModal] = useState(false);
  const footerRef = useRef();
  const servicesRef = useRef();

  const scrollToRef = (ref) => {
    console.log(ref.current.offsetTop);
    window.scrollTo(0, ref.current.offsetTop);
  };
  return (
    <>
      <NavBar handleClick={scrollToRef} refs={{ footerRef, servicesRef }} />
      <Header setShowModal={() => setShowModal(true)} />
      <MainSection servicesRef={servicesRef} />
      <Footer footerRef={footerRef} />
      {showModal ? (
        <Modal onClose={() => setShowModal(false)}>
          <Budget />
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};
