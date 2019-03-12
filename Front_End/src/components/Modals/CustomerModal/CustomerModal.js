import React, { Component, Fragment } from 'react';
import CustomerModalTrigger from './CustomerModalTrigger';
import CustomerModalContent from './CustomerModalContent';

class CustomerModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      // customers: []
    };
  }

  componentDidMount() {
  }

  onOpen = () => {
    this.props.refreshData();
    this.setState({ isOpen: true }, () => {
      this.closeButtonNode.focus(); // draw keyboard focus to the modal when opens
    });
    this.toggleScrollLock();
    
    
  };

  onClose = () => {
    this.setState({ isOpen: false });
    this.openButtonNode.focus(); // return keyboard focus to main page when close
    this.toggleScrollLock();
  };

  onKeyDown = (evt) => {
    return evt.keyCode === 27 && this.onClose();
  }

  onClickAway = (evt) => {
    if (this.modalNode && this.modalNode.contains(evt.target)) return;
    this.onClose();
  }



  onSort = (evt, sortKey) => {
    

    const unsortedCustomers = this.props.customers;
    // console.log(sortKey);
   
    unsortedCustomers.sort(function(a,b) {
      if (sortKey == "customerBookings"){
      // console.log(sortKey);
      // console.log(a._embedded.bookings.length)
      // console.log(b._embedded.bookings.length)
      return b._embedded.bookings.length - a._embedded.bookings.length
      }
      else if (sortKey == "customerName"){
        if(a.customerName < b.customerName) { return -1; }
        if(a.customerName > b.customerName) { return 1; }
        return 0;
    }
      else {
      return a[sortKey] - b[sortKey]
      }
    })
    
    this.setState({ customers: unsortedCustomers });
    
  }

  

  

  toggleScrollLock = () => document.querySelector('html').classList.toggle('u-lock-scroll');

  render() {
    const { isOpen } = this.state;
    const { triggerText, role } = this.props;
    return (
      <Fragment>
        <CustomerModalTrigger
          buttonRef={n => (this.openButtonNode = n)}
          buttonText={triggerText}
          onOpen={this.onOpen}
          refreshData={this.props.refreshData}
        />

        {isOpen && (
          <CustomerModalContent
            buttonRef={n => (this.closeButtonNode = n)}
            customers={this.props.customers}
            modalRef={n => (this.modalNode = n)}
            onClickAway={this.onClickAway}
            onClose={this.onClose}
            onKeyDown={this.onKeyDown}
            onSort={this.onSort}
            role={role}
          />
        )}
      </Fragment>
    );
  }
}

export default CustomerModal;