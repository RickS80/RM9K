import React from 'react';

const CustomerModalTrigger = ({ buttonText, onOpen }) => (
  <button className="c-btn" onClick={onOpen}>
    {buttonText}
  </button>
);

export default CustomerModalTrigger;