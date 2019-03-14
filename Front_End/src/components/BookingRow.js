import React from 'react';


const BookingRow = (props) => {

    const times =  ["12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00"]

    const data = []


    for(var i=0; i < times.length; i++){
                const foundBooking = props.bookingsData.find((booking) => booking.startTime === times[i])
                if (foundBooking) {
                    let number = foundBooking.id
                    i++
                data.push(
                    <React.Fragment>
                    <td  className="booked" colspan="2"  id={foundBooking.id} onClick={evt => {props.passUp(number)}} >{foundBooking.customer.customerName}|{foundBooking.covers}|</td>      
                    </React.Fragment>
                )
            } else {
                data.push(
                    <td></td>
                )
            } 
    }


    return(
        data 
    )



}


export default BookingRow;