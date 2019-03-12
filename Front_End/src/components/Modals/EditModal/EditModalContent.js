import React from 'react';
import ReactDOM from "react-dom";
import '../ModalContent.css';

const EditModalContent = (props) => { 

    return ReactDOM.createPortal(
      <div
        className="c-modal-cover"
        onFocus={props.onFocus}
        onKeyDown={props.onKeyDown}
        onClick={props.onClickAway}
        role={props.role}
        tabIndex="-1"
      >
        <div className="c-modal" ref={props.modalRef}>
          <button
            className="c-modal__close"
            onClick={props.onClose}
            ref={props.buttonRef}
          >
            <span className="u-hide-visually">Close</span>
            <svg className="c-modal__close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>

          <div className="c-modal__body">
            <h1>Edit Booking</h1>
            <form>
              <lable>Name:</lable>
              <input
                type="text"
                placeholder={props.bookingSelected.customer.customerName}
              />
              <lable />
            </form>
            <button onClick={props.handleDeleteClick} value="DELETE THIS BOOKING">
              DELETE THIS BOOKING
            </button>
          </div>
        </div>
      </div>,
      document.body
    );

}

export default EditModalContent