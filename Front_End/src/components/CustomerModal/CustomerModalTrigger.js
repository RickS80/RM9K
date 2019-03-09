import React from 'react';
import './CustomerModalTrigger.css'

const CustomerModalTrigger = ({ buttonText, onOpen, buttonRef }) => (
  <button className="c-btn" onClick={onOpen} ref={buttonRef}>
    {buttonText}
  </button>
);

export default CustomerModalTrigger;