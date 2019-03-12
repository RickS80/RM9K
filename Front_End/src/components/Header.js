import React from 'react';
import CustomerModal from '../components/Modals/CustomerModal/CustomerModal';
import NewBookingModal from "./Modals/NewBookingModal/NewBookingModal";

const Header = ({ customers, restaurantTables, refreshData}) => {
       return (
         <div className="header">
           <a>Home</a>
           <NewBookingModal
             triggerText="New Booking"
             restaurantTables={restaurantTables}
             refreshData={refreshData}
             customers={customers}
           />
           <CustomerModal
             customers={customers}
             refreshData={refreshData}
             triggerText="Customers"
           />
           <a>Table view</a>
         </div>
       );
    }

export default Header;
