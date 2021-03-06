import React, {useState} from 'react';
import ReactDOM from "react-dom";
import '../ModalContent.css';

const EditModalContent = (props) => {

    const [state, setState] = useState(
        {
        time: "",
        date: props.bookingSelected.date,
        covers: "",
        table: ""}
    )

    const handleChange = (e) => {
        const {id, value} = e.target;
        setState({...state, [id]: value})
    }

    function handleDateChange(date) {
      // change date format
      const reversedDate = date
        .split(`-`)
        .reverse()
        .join(`-`);
      return reversedDate
    }

      function makeTableOptions(){
        const allRestaurantTables = props.restaurantTables;
        
        const arrayOfRestaurantTables = []
    
        for (var i = 1; i < 11; i++) {
          
          arrayOfRestaurantTables.push(
            <option >
            {i}
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
            <h2>Edit Booking</h2>
            <form onSubmit = {(e) => {e.preventDefault(); props.editBooking(state)}}>
              <lable>{props.bookingSelected.customer.customerName}</lable>
              <br />
              <br />
              <br />
               <lable>Time:</lable>
              <input
                type= "text"
                className="newInput"
                placeholder={props.bookingSelected.startTime}
                id = "time"
                onChange = {handleChange}
              />
              <br />
              <br />
               <lable>Date:</lable>
              <input
              id = "date"
              className="newInput"
              onChange = {handleChange}
              type="date"
              value = {handleDateChange(props.bookingSelected.date)}
              />
              <br />
               <br />
               <lable>Covers:</lable>
               <input 
               id = "covers"
               className="newInput"
               onChange = {handleChange}
               placeholder={props.bookingSelected.covers}></input>
               <br />
               <br />
               <lable>Table:</lable>
               <select 
               id = "table"
               className="newInput"
               onChange = {handleChange}
               >
              <option value="select a table" disabled selected>
              </option>
              {makeTableOptions()}
             </select>
               <br />
               <br />
               <button className="btn-edit" type="submit">Edit</button>
            </form>
            <button className="btn-delete-booking" onClick={props.handleDeleteClick} value="DELETE THIS BOOKING">
              Delete Booking
            </button>
          </div>
        </div>
      </div>,
      document.body
    );

}

export default EditModalContent