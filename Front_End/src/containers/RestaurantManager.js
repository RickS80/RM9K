import React, { Component } from 'react';
import Header from '../components/Header';
import TableViewContainer from './TableViewContainer';
import Footer from '../components/Footer';


class RestaurantManager extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            bookings: [],
            customers: [],
            restaurantTables: [],
            date: "14-04-2019",
            idForEdit: null
            }

            this.clickEditBooking = this.clickEditBooking.bind(this);
            this.refreshData = this.refreshData.bind(this);
            this.passUp = this.passUp.bind(this)
    }
    
    componentDidMount() {
        this.refreshData();
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
    clickEditBooking(evt){
        //this evt is the id of the booking cliccked in order to edit the booking
        console.log(evt);
    }
    
  
    refreshData(){
        const url = `http://localhost:8080/bookings/date/${this.state.date}`
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ bookings: data })
            })
        const url1 = "http://localhost:8080/customers"
        fetch(url1)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ customers: data._embedded.customers })
            })
        const url2 = "http://localhost:8080/restaurantTables"
        fetch(url2)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ restaurantTables: data._embedded.restaurantTables })
            })
    }

    passUp(evt){
        this.setState({ idForEdit: evt })

    }

    render(){
        return(
            <div className="restaurant-manager">
            <Header customers={this.state.customers} restaurantTables={this.state.restaurantTables} refreshData={this.refreshData} bookings={this.state.bookings} idOfEdit={this.state.idForEdit}/>
            <TableViewContainer clickEditBooking={this.clickEditBooking} passUp={this.passUp} bookings={this.state.bookings} onDateSelect={this.onDateSelect}/>
            <Footer/>
            </div>
        )
    }
}

export default RestaurantManager;