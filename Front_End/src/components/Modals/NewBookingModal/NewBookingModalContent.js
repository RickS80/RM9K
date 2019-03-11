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
  handleCustomerIdChange,
  handleStartTimeChange,
  handleCoverChange
}) => {

  function makeSelectTimeOptions (){
    const businessStartTime = 1100;
    const businessEndTime = 2200;
    let timeOptions = [] 
    let currentOption = businessStartTime;
    while (currentOption <= businessEndTime) {
      timeOptions.push(
        <option value={prettifyTime(currentOption)}>
          {prettifyTime(currentOption)}
        </option>
      );
      currentOption += 30
      if (currentOption % 100 === 60){
        currentOption += 40
      }
    }
    return timeOptions
  }

  function prettifyTime(time){
    const hours = time.toString().substr(0,2)
    const min = time.toString().substr(2,3) 
    return `${hours}:${min}`
  }

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
            <input
              type="number"
              name="tableId"
              placeholder="Table ID"
              onChange={handleTableIdChange}
            />
            <br />
            Customer ID: <br />
            <input
              type="number"
              name="customerId"
              placeholder="Customer ID"
              onChange={handleCustomerIdChange}
            />
            <br />
            StartTime: <br />
            <select name="starttime" onChange={handleStartTimeChange}>
              {makeSelectTimeOptions()}
            </select>
            <br />
            Covers: <br />
            <input
              type="number"
              name="covers"
              placeholder="Covers"
              onChange={handleCoverChange}
            />
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