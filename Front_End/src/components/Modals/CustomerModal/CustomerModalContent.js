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
  refreshData,
  role = "dialog"
}) => {
  
  const customersList = customers.map(customer => {
    // this.refreshData()
    return (
      <tr key={customer.id}>
        <td>{customer.id}</td>
        <td>{customer.customerName}</td>
        <td>{customer.customerNumber}</td>
        <td>{customer._embedded.bookings.length}</td>
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
                <th onClick={evt => onSort(evt, "customerName")}>Name:</th>
                <th onClick={evt => onSort(evt, "customerNumber")}>Number:</th>
                <th onClick={evt => onSort(evt, "customerBookings")}># of Bookings:</th>
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