import React, { Component } from 'react';
import TimesRow from './TimesRow';
import BookingRow from './BookingRow';

class Table extends Component{


  constructor(props) {
    super(props);
    this.state = { 
          tables: [1,2,3,4,5,6,7,8,9,10],
          times: ["12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00"],
          data: [],
          bookings: []
        }
        
}
    
    render(){
       console.log(this.props.bookingsData)
      const toUpdate = []
      for(var i=0; i < this.state.tables.length; i++){
        const foundBookings = []
        this.props.bookingsData.forEach((booking) => {
          if (booking.restaurantTable.tableNumber === this.state.tables[i]){
            foundBookings.push(booking)
          }
        }
        )
       
        if (foundBookings) {
        toUpdate.push(
                <tr>  
                <td> Table {this.state.tables[i]}</td>
                <BookingRow bookingsData={foundBookings}/>
                </tr> 
                )
    }else{
        toUpdate.push(
                <tr>  
                <td> Table {this.state.tables[i]}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                 )    
                }
              }
    return(
      <div>
      <table>
        <thead>
        <tr>
        <th></th>
        <TimesRow/>
        </tr>
        </thead> 
        <tbody>
        {toUpdate}
        </tbody>
      </table>
      </div>
    )
}


}
export default Table;