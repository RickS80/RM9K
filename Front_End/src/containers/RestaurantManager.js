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
            restaurantTables: []
            }
    }
     
    componentDidMount(){
        const url = "http://localhost:8080/bookings"
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({bookings: data._embedded.bookings})
        })
        const url1 = "http://localhost:8080/customers"
        fetch(url1)
        .then((res) => res.json())
        .then((data) => {
            this.setState({customers: data._embedded.customers})
        })
        const url2 = "http://localhost:8080/restaurantTables"
        fetch(url2)
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurantTables: data._embedded.restaurantTables})
        })
    }

    render(){
        return(
            <div className="restaurant-manager">
            <Header customers={this.state.customers}/>
            <TableViewContainer/>
            <Footer/>
            </div>
        )
    }
}

export default RestaurantManager;