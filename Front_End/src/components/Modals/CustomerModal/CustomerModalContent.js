import React from 'react';
import ReactDOM from "react-dom";
import '../ModalContent.css';

const CustomerModalContent = ({
  buttonRef,
  customers,
  modalRef,
  onClickAway,
  onClose,
  onKeyDown,
  onFocus,
  onSort,
  role = "dialog"
}) => {
  
  const customersList = customers.map(customer => {
    return (
      <tr key={customer.id}>
        <td>{customer.id}</td>
        <td>{customer.customerName}</td>
        <td>{customer.customerNumber}</td>
        <td>{customer.customerBookings}</td>
      </tr>
    );
  });

  return ReactDOM.createPortal(
    <div
      className="c-modal-cover"
      onClick={onClickAway}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
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
          <table>
            <thead>
              <tr>
                <th onClick={evt => onSort(evt, "id")}>ID</th>
                <th onClick={evt => onSort(evt, "name")}>Name:</th>
                <th onClick={evt => onSort(evt, "number")}>Number:</th>
                <th onClick={evt => onSort(evt, "numOfBookings")}># of Bookings:</th>
              </tr>
            </thead>
            <tbody>{customersList}</tbody>
          </table>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CustomerModalContent;