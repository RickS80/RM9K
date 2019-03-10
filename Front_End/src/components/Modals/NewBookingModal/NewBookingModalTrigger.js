import React from 'react';
import '../ModalTrigger.css'

const NewBookingModalTrigger = ({ buttonText, onOpen, buttonRef }) => (
  <button className="c-btn" onClick={onOpen} ref={buttonRef}>
    {buttonText}
  </button>
);

export default NewBookingModalTrigger;