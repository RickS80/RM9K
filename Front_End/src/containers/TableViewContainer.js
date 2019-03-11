import React, { Component } from 'react';
import Table from '../components/Table';

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
            this.setState({bookings: data._embedded.bookings})
        })
    }


    render(){
        return(
            <div className="table-view-container">
            <Table  clickEditBooking={this.props.clickEditBooking} bookingsData={this.state.bookings}/>
            </div>
        )
    }



}

export default TableViewContainer;