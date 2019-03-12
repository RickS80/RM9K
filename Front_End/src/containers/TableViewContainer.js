import React, { Component } from 'react';
import Table from '../components/Table';
import DateSelector from '../components/DateSelector'

class TableViewContainer extends Component{


    constructor(props) {
        super(props);
        this.state = { 
            bookings: [],
         }
    }


    componentDidMount(){
        const url = "http://localhost:8080/bookings"
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({bookings: data._embedded.bookings})
        })
    }

    onDateSelect = (evt) => {
        console.log("you picked a date!")
        console.log(evt.target.value)
    }

    render(){
        return(
            <div className="table-view-container">

            <Table  clickEditBooking={this.props.clickEditBooking} bookingsData={this.state.bookings} passUp={this.props.passUp}/>
            <DateSelector onDateSelect={this.onDateSelect}/>
            

            </div>
        )
    }



}

export default TableViewContainer;