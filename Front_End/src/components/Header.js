import React from 'react';
import CustomerModal from '../components/Modals/CustomerModal/CustomerModal';
import NewBookingModal from "./Modals/NewBookingModal/NewBookingModal";
import EditModal from './Modals/EditModal/EditModal';
import image from './Logo.png'

const Header = ({ customers, restaurantTables, refreshData, bookings, idOfEdit}) => {
       return (
         <div className="header">
           
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
           <EditModal bookings={bookings} idOfEdit={idOfEdit}/>
           {/* <img src={image}/> */}
           <a>Restaurant Manager 9000</a>
         </div>
         
       );
    }

export default Header;