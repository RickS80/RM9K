import React, { Component } from 'react';

const EditModalTrigger = ({ buttonText, onOpen, buttonRef }) => (
    <button className="c-btn" onClick={onOpen} ref={buttonRef}>
      {buttonText}
    </button>
  );
  

export default EditModalTrigger