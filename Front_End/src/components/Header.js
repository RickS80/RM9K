import React from 'react';
import CustomerModal from '../components/Modals/CustomerModal/CustomerModal';
import NewBookingModal from "./Modals/NewBookingModal/NewBookingModal";
import EditModal from './Modals/EditModal/EditModal';

const Header = ({ customers, restaurantTables, refreshData, bookings, idOfEdit }) => {
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
           <EditModal bookings={bookings} idOfEdit={idOfEdit} />
         </div>
       );
    }

export default Header;