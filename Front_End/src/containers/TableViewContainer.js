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
        const requestedDate = (evt.target.value);
        const formattedDate = requestedDate
          .split(`-`)
          .reverse()
          .join(`-`);
        this.getBookingsForDate(formattedDate);
    }

    getBookingsForDate(date) {
        const url = `http://localhost:8080/bookings/date/${date}`
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ bookings: data }, console.log(this.state.bookings))
            })
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