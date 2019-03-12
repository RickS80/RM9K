import React from 'react';


const BookingRow = (props) => {

    const times =  ["12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00"]

    const data = []

    for(var i=0; i < times.length; i++){
        // for (var j=0; j< props.bookingsData.length; j++){
            // if (times[i] === props.bookingsData[j].startTime){
                const foundBooking = props.bookingsData.find((booking) => booking.startTime === times[i])
                if (foundBooking) {
                data.push(
                    <td>{foundBooking.customer.customerName}|{foundBooking.covers}|</td>
                )
            }else{
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