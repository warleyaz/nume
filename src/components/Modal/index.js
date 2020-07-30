import React from "react";
import { Modal } from "./style.js";

export default ({ id = "modal", onClose = () => {}, children }) => {
  const handleOutSideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <Modal id={id} onClick={handleOutSideClick}>
      <div id="container">
        <button id="close" onClick={onClose}></button>
        <div id="content">{children}</div>
      </div>
    </Modal>
  );
};
