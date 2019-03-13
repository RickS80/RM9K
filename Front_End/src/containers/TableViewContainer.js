import React, { Component } from 'react';
import Table from '../components/Table';
import DateSelector from '../components/DateSelector'

class TableViewContainer extends Component{


    constructor(props) {
        super(props);
    }
   


  

    render(){
        return(
            <div className="table-view-container">
            <DateSelector className="date-selector" onDateSelect={this.props.onDateSelect}/>
            <Table  clickEditBooking={this.props.clickEditBooking} bookingsData={this.props.bookings} passUp={this.props.passUp}/>
            
            

            </div>
        )
    }



}

export default TableViewContainer;