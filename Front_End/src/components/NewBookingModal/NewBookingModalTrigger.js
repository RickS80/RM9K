import React from 'react';
import './NewBookingModalTrigger.css'

const NewBookingModalTrigger = ({ buttonText, onOpen, buttonRef }) => (
  <button className="c-btn" onClick={onOpen} ref={buttonRef}>
    {buttonText}
  </button>
);

export default NewBookingModalTrigger;