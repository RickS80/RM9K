import React from 'react';
import CustomerModal from '../components/Modals/CustomerModal/CustomerModal';
import NewBookingModal from "./Modals/NewBookingModal/NewBookingModal";

const Header = ({ customers, restaurantTables}) => {
       return (
         <div className="header">
           <a>Home</a>
            <NewBookingModal triggerText="New Booking" restaurantTables={restaurantTables} customers={customers}/>
            <CustomerModal triggerText="Customers" customers={customers} />
           <a>Table view</a>
         </div>
       );
    }

export default Header;