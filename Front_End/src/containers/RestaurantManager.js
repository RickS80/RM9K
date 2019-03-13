import React, { Component } from 'react';
import Header from '../components/Header';
import TableViewContainer from './TableViewContainer';
import Footer from '../components/Footer';
import { watchFile } from 'fs';


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
            this.resetState = this.resetState.bind(this);
    }
    
    clickEditBooking(evt){
        //this evt is the id of the booking cliccked in order to edit the booking
        console.log(evt);
    }
    
    componentDidMount() {
        // this.refreshData();
    }

    refreshData(){
        setTimeout(() => {
        console.log("refreshing Data")
        const url = "http://localhost:8080/bookings"
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ bookings: data._embedded.bookings });
                this.forceUpdate();
            })
        const url1 = "http://localhost:8080/customers"
        fetch(url1)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ customers: data._embedded.customers });
                this.forceUpdate();
            })
        const url2 = "http://localhost:8080/restaurantTables"
        fetch(url2)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ restaurantTables: data._embedded.restaurantTables });
                this.forceUpdate();
            }).then(()=>{console.log("finished refreshing data")})}, 1000)
    }

    passUp(evt){
        this.setState({ idForEdit: evt })
    }

    resetState(){
        console.log("i tried")
        this.setState((prevState)=>{this.state = prevState})
    }

    render(){
        return(
            <div className="restaurant-manager">
            <Header customers={this.state.customers} restaurantTables={this.state.restaurantTables} refreshData={this.refreshData} bookings={this.state.bookings} idOfEdit={this.state.idForEdit}/>
                <TableViewContainer clickEditBooking={this.clickEditBooking} refreshData={this.refreshData} resetState={this.resetState} passUp={this.passUp}/>
            <Footer/>
            </div>
        )
    }
}

export default RestaurantManager;