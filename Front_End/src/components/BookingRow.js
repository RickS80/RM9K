import React from 'react';


const BookingRow = (props) => {

    const times = ["12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00"]

    const data = []
    console.log(times.length)
    console.log(props.bookings.length)

    for(var i=0; i < times.length; i++){
        for (var j=0; j< props.bookings.length; j++){
            if (times[i] === props.bookings[j].startTime){
                console.log("madness")
                data.push(
                    <td>{props.bookings[j].customer.customerName}</td>
                )
            }else{
                data.push(
                    <td> </td>
                ) 
            }
        }
    }


    return(
        data 
    )



}


export default BookingRow;