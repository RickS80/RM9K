import React from 'react';

const CustomerModalTrigger = ({ buttonText, onOpen, buttonRef }) => (
  <button className="c-btn" onClick={onOpen} ref={buttonRef}>
    {buttonText}
  </button>
);

export default CustomerModalTrigger;