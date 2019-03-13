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
    return (
      <tr key={customer.id} data-item={customer}>
        <td data-title="id">{customer.id}</td>
        <td data-title="customerName">{customer.customerName}</td>
        <td data-title="customerNumber">{customer.customerNumber}</td>
        <td data-title="customerBookings">{customer._embedded.bookings.length}</td>
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
        <h2>Customer Information</h2>
          <table>
            <thead>
              <tr>

                <th onClick={evt => onSort(evt, "id")}>ID</th>
                <th onClick={evt => onSort(evt, "customerName")}>Name</th>
                <th onClick={evt => onSort(evt, "customerNumber")}>Contact</th>
                <th className="bookingsColumn" onClick={evt => onSort(evt, "customerBookings")}># Bookings</th>
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