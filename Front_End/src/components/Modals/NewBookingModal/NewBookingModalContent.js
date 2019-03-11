import React from 'react';
import ReactDOM from 'react-dom';
import '../ModalContent.css'

const NewBookingModalContent = ({
  buttonRef,
  handleSubmit,
  modalRef,
  onClickAway,
  onClose,
  onFocus,
  onKeyDown,
  role = "dialog",
  handleTableIdChange,
  handleCustomerIdChange
}) => {
  return ReactDOM.createPortal(
    <div
      className="c-modal-cover"
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onClick={onClickAway}
      role={role}
      tabIndex="-1"
    >
      <div className="c-modal" ref={modalRef}>
        <button className="c-modal__close" onClick={onClose} ref={buttonRef}>
          <span className="u-hide-visually">Close</span>
          <svg className="c-modal__close-icon" viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>

        <div className="c-modal__body">
          <h1>Add New Booking</h1>
          <form onSubmit={handleSubmit}>
            Table ID: <br />
            <input type="number" name="tableId" onChange={handleTableIdChange}/>
            <br />
            Customer ID: <br />
            <input type="number" name="customerId" onChange={handleCustomerIdChange}/>
            <br />
            <br />
            <input type="submit" value="Add Booking" />
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default NewBookingModalContent