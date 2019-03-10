import React from 'react';
import ReactDOM from 'react-dom';
import '../ModalContent.css'

const NewBookingModalContent = ({
  onClose,
  role = "dialog",
  modalRef,
  onClickAway,
  onFocus,
  onKeyDown,
  buttonRef
}) => {

  return ReactDOM.createPortal(
    <div
      className="c-modal-cover"
      role={role}
      tabIndex="-1"
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onClick={onClickAway}
    >
      <div className="c-modal" ref={modalRef}>
        <button className="c-modal__close" onClick={onClose} ref={buttonRef}>
          <span className="u-hide-visually">Close</span>
          <svg className="c-modal__close-icon" viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>

        {/* //TODO: stop default behaviour (page refresh); */}

        <div className="c-modal__body">
          <h1>Add New Booking</h1>
          <form action="/bookings" method="POST">
            Table Number: <br/>
            <input type="text" name="tableNumber" /><br/>
            Customer Name: <br/>
            <input type="text" name="customerName" /><br/>
            Customer Number: <br/>
            <input type="text" name="customerNumber" /><br/><br/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default NewBookingModalContent