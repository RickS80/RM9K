import React, {useState} from 'react';
import ReactDOM from "react-dom";
import '../ModalContent.css';

const EditModalContent = (props) => {

    const [state, setState] = useState(
        {name: "",
        time: "",
        date: "",
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
            <h1>Edit Booking</h1>
            <form onSubmit = {(e) => {e.preventDefault(); props.editBooking(state)}}>
              <lable>Name:</lable>
              <input
               id = "name"
               onChange = {handleChange}
                type="text"
                placeholder={props.bookingSelected.customer.customerName}
              />
              <br />
               <lable>Time:</lable>
              <input
                type= "text"
                placeholder={props.bookingSelected.startTime}
                id = "time"
                onChange = {handleChange}
              />
              <br />
               <lable>Date:</lable>
              <input
              id = "date"
              onChange = {handleChange}
                type="date"
              />
               <br />
               <lable>Covers:</lable>
               <input 
               id = "covers"
               onChange = {handleChange}
               placeholder={props.bookingSelected.covers}></input>
               <br />
               <lable>Table:</lable>
               <select 
               id = "table"
               onChange = {handleChange}
               >
              <option value="select a table" disabled selected>
              </option>
              {makeTableOptions()}
             </select>
               <br />
               <button type="submit">edit </button>
            </form>
           
            <button onClick={props.handleDeleteClick} value="Delete this booking">
              Delete Booking
            </button>
          </div>
        </div>
      </div>,
      document.body
    );

}

export default EditModalContent