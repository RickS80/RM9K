import React from 'react';
import CustomerModal from '../components/CustomerModal/CustomerModal';
import NewBookingModal from './NewBookingModal/NewBookingModal';

const Header = ({customers}) => {
       return(
            <div className="header">
            <a>Home</a>
               <NewBookingModal triggerText="New Booking"/>
               <CustomerModal customers={customers} triggerText="Customers" />
            <a>Table view</a>
            </div>
        )
    }

export default Header;