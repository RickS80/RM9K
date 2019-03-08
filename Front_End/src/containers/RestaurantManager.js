import React, { Component } from 'react';
import Header from './Header';
import TableViewContainer from './TableViewContainer';
import Footer from '../components/Footer';


class RestaurantManager extends Component {

    render(){
        return(
            <div className="restaurant-manager">
            <Header/>
            <TableViewContainer/>
            <Footer/>
            </div>
        )
    }
}

export default RestaurantManager;