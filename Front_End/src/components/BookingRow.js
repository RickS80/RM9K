import React, { Component } from 'react';

class BookingRow extends Component{

    constructor(props){
      super(props);
      this.state = {
        colorClass: "showhide"
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
      this.setState({
        colorClass: "showhide2"
      })
    }

    render(){
      const times =  ["12:00","12:30","13:00","13:30","14:00",
      "14:30","15:00","15:30","16:00","16:30","17:00","17:30",
      "18:00","18:30","19:00","19:30","20:00"]
      const data = []
      for(var i=0; i < times.length; i++){
          // for (var j=0; j< props.bookingsData.length; j++){
              // if (times[i] === props.bookingsData[j].startTime){
                  const foundBooking = this.props.bookingsData.find((booking) => booking.startTime === times[i])
                  if (foundBooking) {
                      let number = foundBooking.id
                  data.push(
                      <td id={foundBooking.id} class={this.state.colorClass} onClick={evt => {this.props.passUp(number)}, this.handleClick} >{foundBooking.customer.customerName}|{foundBooking.covers}|</td>
                  )
              }else{
                  data.push(
                      <td></td>
                  )
              }
      }
      return data;
  }



}

export default BookingRow;
