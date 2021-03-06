import React from "react";
import ReactDOM from "react-dom";
import "../ModalContent.css";

const NewBookingModalContent = (props) => {
  
  function makeSelectTimeOptions() {
    const businessStartTime = 1200;
    const businessEndTime = 2000;
    let timeOptions = [];
    let currentOption = businessStartTime;
    while (currentOption <= businessEndTime) {
      timeOptions.push(
        <option value={prettifyTime(currentOption)}>
          {prettifyTime(currentOption)}
        </option>
      );
      currentOption += 30;
      if (currentOption % 100 === 60) {
        currentOption += 40;
      }
    }
    return timeOptions;
  }

  function prettifyTime(time) {
    const hours = time.toString().substr(0, 2);
    const min = time.toString().substr(2, 3);
    return `${hours}:${min}`;
  }

  function makeTableOptions(){
    const allRestaurantTables = props.restaurantTables;
    
    const arrayOfRestaurantTables = []

    for (var i = 0; i < allRestaurantTables.length; i++) {
      
      arrayOfRestaurantTables.push(
        <option value={allRestaurantTables[i].id}>
          Table Number: {allRestaurantTables[i].tableNumber}, Covers:
          {allRestaurantTables[i].capacity}
        </option>
      );
    }

    return arrayOfRestaurantTables
  }

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
          <h2>Add New Booking</h2>
          <form onSubmit={props.handleSubmit}>
            Table :
            <select 
            className="newInput"
            onChange={props.handleTableIdChange}
            required>
              <option value="" disabled selected>
                Please Select a Table
              </option>
              {makeTableOptions()}
            </select>
  
          
            <br/>
            <br/>
            Customer Name:  
            <input
              className="newInput"
              type="text"
              name="customerName"
              placeholder="Customer Name"
              onChange={props.handleCustomerNameChange}
              required
            />
            <br/>
            <br />
            Customer Contact:  
            <input
              className="newInput"
              type="number"
              name="customerNumber"
              placeholder="Customer Contact"
              onChange={props.handleCustomerNumberChange}
              required
            />

            <br/>
            <br />
            Date: 
            <input
              className="newInput"
              type="date"
              name="bookingdate"
              required
              onInput={evt => {
                props.handleDateChange(evt);
              }
              }
            />
            <br />
            <br/>
            StartTime: 
            <select 
            className="newInput"
            name="starttime" onChange={props.handleStartTimeChange}
            required>
              <option value="" disabled selected>
                Please Select a Time
              </option>
              {makeSelectTimeOptions()}
            </select>
            <br />
            <br/>
            Covers: 
            <input
              className="newInput"
              type="number"
              name="covers"
              placeholder="Covers"
              onChange={props.handleCoverChange}
              required
            />
            <br />
            <br/>
            <input className="btn-submit" type="submit" value="Add Booking" />
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default NewBookingModalContent;
