import React from 'react';
import ReactDOM from "react-dom";
import './CustomerModalContent.css';

const CustomerModalContent = ({
  onClose,
  role = "dialog",
  modalRef,
  onClickAway,
  buttonRef
}) => {

  return ReactDOM.createPortal(
    <FocusTrap
      tag = "aside"
      className="c-modal-cover"
      role={role}
      tabIndex="-1"
      onClick={onClickAway}
    >
      <div className="c-modal" ref={modalRef}>
        <button
          className="c-modal__close"
          aria-label="Close Modal"
          onClick={onClose}
          ref={buttonRef}
        >
          <span className="u-hide-visually">Close</span>
          <svg className="c-modal__close-icon" viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        <div className="c-modal__body">CONTENT WILL GO HERE</div>
      </div>
    </FocusTrap>,
    document.body
  );
};

export default CustomerModalContent;