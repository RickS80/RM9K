import React from "react";
import "../ModalTrigger.css";

const CustomerModalTrigger = ({
  buttonText,
  onOpen,
  buttonRef,
  refreshData
}) => (
  <button className="c-btn" onClick={onOpen} ref={buttonRef}>
    {buttonText}
  </button>
);

export default CustomerModalTrigger;
