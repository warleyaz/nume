import React, { useState, useRef } from "react";

import Modal from "../../components/Modal";
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
    <div style={{position: 'relative'}}>
      <NavBar handleClick={scrollToRef} setShowModal={() => setShowModal(true)} refs={{ footerRef, servicesRef }} />
      <Header setShowModal={() => setShowModal(true)} />
      <MainSection servicesRef={servicesRef} />
      <Footer footerRef={footerRef} />
      {showModal && (<Modal onClose={() => setShowModal(false)} />)}
    </div>
  );
};
