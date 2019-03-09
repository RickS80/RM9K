import React from 'react';
import CustomerModal from '../components/CustomerModal/CustomerModal';

const Header = (props) => {
       return(
            <div className="header">
            <a>Home</a>
            <a>New booking</a>
                <CustomerModal triggerText="Customers" ariaLabel="List of Customers ranked by number of Visits"/>
            <a>Table view</a>
            </div>
        )
    }

export default Header;