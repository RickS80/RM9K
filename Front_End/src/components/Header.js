import React from 'react';
import CustomerModal from '../components/Modals/CustomerModal/CustomerModal';
import NewBookingModal from "./Modals/NewBookingModal/NewBookingModal";

const Header = ({customers}) => {
       return(
            <div className="header">
            <a>Home</a>
               <NewBookingModal triggerText="NewBooking"/>
               <CustomerModal customers={customers} triggerText="Customers" />
            <a>Table view</a>
            </div>
        )
    }

export default Header;