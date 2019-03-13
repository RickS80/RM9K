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
            idForEdit: null
            }

            this.clickEditBooking = this.clickEditBooking.bind(this);
            this.refreshData = this.refreshData.bind(this);
            this.passUp = this.passUp.bind(this)
    }
    
    clickEditBooking(evt){
        //this evt is the id of the booking cliccked in order to edit the booking
        console.log(evt);
    }
    
    componentDidMount() {
        this.refreshData();
    }

    refreshData(){
        console.log("refreshing Data")
        const url = "http://localhost:8080/bookings"
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ bookings: data._embedded.bookings })
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
            }).then(()=>{console.log("finished refreshing data")})
    }

    passUp(evt){
        this.setState({ idForEdit: evt })

    }

    render(){
        return(
            <div className="restaurant-manager">
            <Header customers={this.state.customers} restaurantTables={this.state.restaurantTables} refreshData={this.refreshData} bookings={this.state.bookings} idOfEdit={this.state.idForEdit}/>
                <TableViewContainer clickEditBooking={this.clickEditBooking} refreshData={this.refreshData} passUp={this.passUp}/>
            <Footer/>
            </div>
        )
    }
}

export default RestaurantManager;