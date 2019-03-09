import React from 'react';
import CustomerModal from '../components/CustomerModal/CustomerModal';
import NewBookingModal from './NewBookingModal/NewBookingModal';

const Header = ({customers}) => {
       return(
            <div className="header">
            <a>Home</a>
            <NewBookingModal/>
            <CustomerModal customers={customers} triggerText="Customers" ariaLabel="List of Customers ranked by number of Visits"/>
            <a>Table view</a>
            </div>
        )
    }

export default Header;