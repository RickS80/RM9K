import React, { Component } from 'react';
import CustomerModal from '../components/CustomerModal/CustomerModal';

class Header extends Component{
      
    render(){
        return(
            <div className="header">
            <a>Home</a>
            <a>New booking</a>
            <CustomerModal triggerText="Customers" />
            <a>Table view</a>
            </div>
        )
    }
}

export default Header;